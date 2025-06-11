"use client";

import { createNewTask } from "@/lib/actions/tasks.actions";
import Button from "@/modules/common/Button";
import { Form } from "@/modules/common/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import z from "zod";
import { FormInputProps, InputFormField } from "./InputField";
import { TextAreaFormField } from "./InputTeaxtArea";
import { formSchema, NewTaskSchemaType } from "./schema";

const fieldConfig: Record<keyof NewTaskSchemaType, FormInputProps> = {
  title: {
    field: "title",
    label: "Title",
    placeholder: "Enter the Title",
    description: "The Title of the post.",
    form: null,
  },
  project_id: {
    field: "project_id",
    label: "Project ID",
    placeholder: "Enter the Project Name",
    description: "The Project Name.",
    form: null,
  },
  status: {
    field: "status",
    label: "Status",
    placeholder: "Enter the status of task",
    description: "The state of task.",
    form: null,
  },
  started_at: {
    field: "started_at",
    label: "Start Date",
    placeholder: "Starting Date",
    description: "Choose a Date",
    form: null,
  },
  blockers: {
    field: "blockers",
    label: "Blockers",
    placeholder: "Any issues Pending",
    description: "Any issues facing the development",
    form: null,
  },
};

/**
 * @description update database when submitted
 * return to view the newest post if created else throw Error
 * @param values currently populated values from form
 */
async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const posts = await createNewTask({
      ...values,
    });
    // if (posts) {
    //   redirect(`/library/posts/${posts.id}`);
    // }

    console.log(`values ${JSON.stringify(values)}`);
  } catch (err) {
    console.log("Failed to create a post", err);
    throw new Error(`Failed to create a new post in library due to ${err}`);
  }
}

const TaskInputFields = ({
  form,
}: {
  form: UseFormReturn<NewTaskSchemaType>;
}) => {
  return (
    <div className="flex flex-col justify-start gap-3">
      <InputFormField {...fieldConfig["title"]} form={form} />
      <InputFormField {...fieldConfig["project_id"]} form={form} />
      <InputFormField {...fieldConfig["status"]} form={form} />
      <InputFormField {...fieldConfig["started_at"]} form={form} />
      <TextAreaFormField {...fieldConfig["blockers"]} form={form} />
    </div>
  );
};

const TaskForm = ({ form }: { form: UseFormReturn<NewTaskSchemaType> }) => {
  return (
    <div className="bg-white text-primary w-1/2 h-max border-2 rounded-md px-3 py-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TaskInputFields form={form} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

/**
 * @description allows user to create new post
 * @returns The template for the new post creation
 */
const NewTask = () => {
  const form = useForm<NewTaskSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      status: "",
      started_at: new Date().toISOString(),
      blockers: "",
      project_id: "",
    },
  });

  return (
    <div className="w-full h-full flex flex-row justify-center px-2 py-10 overflow-y-scroll">
      <TaskForm form={form} />
    </div>
  );
};

export default NewTask;
