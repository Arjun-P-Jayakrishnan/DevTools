"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export interface CreatePost {
  /**Title of the post */
  title: string;
  /** Category of the post */
  category: string;
  /**Topic */
  topic: string;
  /** Tags related to the field */
  tags: string[];
  /**Markdown content */
  content: string;
}

export interface GetAllPosts {
  /** Limit the number of items fetched */
  limit?: number;
  /** The page number */
  page?: number;
}

export interface Post {
  /**Id of the post */
  id: string;
  /**Created at Timestamp */
  created_at: string;
  /**Title of the post */
  title: string;
  /** Category of the post */
  category: string;
  /**Topic */
  topic: string;
  /** Tags related to the field */
  tags: string[];
  /**Markdown content */
  content: string;
}

/**
 * @description creates a new post
 * @param formData Post Data
 * @returns
 */
export const createPost = async (formData: CreatePost) => {
  try {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
      .from("posts")
      .insert({ ...formData, user_id: author })
      .select();

    if (error || !data)
      throw new Error(error.message || "Failed to create post");

    return data[0];
  } catch (err) {
    throw new Error(`Error while creating new post ${err}`);
  }
};

/**
 * @description creates a new post
 * @param formData Post Data
 * @returns
 */
export const updatePost = async (formData: Post) => {
  console.log("updating post", formData);
  try {
    // const { userId: author } = await auth();
    // const supabase = createSupabaseClient();
    // const { data, error } = await supabase
    //   .from("posts")
    //   .update({ ...formData })
    //   .eq("id", formData.id)
    //   .select();
    // if (error || !data)
    //   throw new Error(error.message || "Failed to update post");
    // return data[0];
  } catch (err) {
    console.log(`Error for updating ${err}`);
    throw new Error(`Error while updat new post ${err}`);
  }
};

export const getAllPosts = async ({
  limit = 10,
  page = 1,
}: GetAllPosts): Promise<Post[]> => {
  await auth();
  const supabase = createSupabaseClient();

  let query = supabase.from("posts").select();

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data, error } = await query;

  console.log(data);

  if (error) throw new Error(error.message);

  let posts: Array<Post> = [];

  posts = data.map((post) => {
    return {
      id: post.id,
      created_at: post.created_at,
      title: post.title,
      content: post.content,
      topic: post.topic,
      category: post.category,
      tags: post.tags,
    };
  });

  return posts;
};

export const getPostById = async ({
  postId,
}: {
  postId: string;
}): Promise<Post | null> => {
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
      id: data.id,
      title: data.title,
      category: data.category,
      content: data.content,
      created_at: data.created_at,
      tags: data.tags,
      topic: data.topic,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};
