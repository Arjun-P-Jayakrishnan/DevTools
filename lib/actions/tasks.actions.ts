"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export interface CreateTask {
  title: string;
  project_id: string;
  status: string;
  started_at: string;
  end_at?: string;
  blockers: string;
}

export interface GetAllPosts {
  /** Limit the number of items fetched */
  limit?: number;
  /** The page number */
  page?: number;
}

export interface Task {
  /**Id of the post */
  task_id: string;
  /**Created at Timestamp */
  started_at: string;
  /**Title of the post */
  title: string;
  /** Category of the post */
  status: string;
  /**Topic */
  project_id: string;
  /** Tags related to the field */
  blockers: string;
}

/**
 * @description creates a new post
 * @param formData Post Data
 * @returns
 */
export const createNewTask = async (formData: CreateTask) => {
  try {
    await auth();
    const supabase = createSupabaseClient();
    console.log(`form data ${formData}`);
    const { data, error } = await supabase
      .from("tasks")
      .insert({ ...formData })
      .select();

    if (error || !data)
      throw new Error(error.message || "Failed to create companion");

    return data[0];
  } catch (err) {
    throw new Error(`Error while creating new task ${err}`);
  }
};

export const getAllTasks = async ({
  limit = 10,
  page = 1,
}: GetAllPosts): Promise<Task[]> => {
  await auth();
  const supabase = createSupabaseClient();

  let query = supabase.from("tasks").select();

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data, error } = await query;

  console.log(data);

  if (error) throw new Error(error.message);

  let tasks: Array<Task> = [];

  tasks = data.map((task) => {
    return {
      task_id: task.id,
      started_at: task.started_at.split("T")[0],
      title: task.title,
      status: task.status,
      project_id: task.project_id,
      blockers: task.blockers,
    };
  });

  return tasks;
};

export const getPostById = async ({
  postId,
}: {
  postId: string;
}): Promise<Task | null> => {
  try {
    await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
      .from("posts")
      .select()
      .eq("id", postId)
      .single();

    if (error) {
      console.log(`Error while getting data`);
      return null;
    }
    if (!data) return null;

    return {
      task_id: data.task_id,
      title: data.title,
      status: data.status,
      project_id: data.project_id,
      blockers: data.blockers,
      started_at: data.started_at,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};
