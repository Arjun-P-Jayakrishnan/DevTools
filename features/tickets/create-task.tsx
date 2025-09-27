"use client";

import Button from "@/components/Atoms/Button";
import { Form } from "@/components/Molecules/Form";
import { createNewTask } from "@/lib/actions/tasks.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useForm, UseFormReturn } from "react-hook-form";
import z from "zod";
import { FormInputProps, InputFormField } from "./components/InputField";
import { TextAreaFormField } from "./components/InputTeaxtArea";
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
async function onSubmit({
  values,
  router,
}: {
  values: z.infer<typeof formSchema>;
  router: AppRouterInstance;
}) {
  try {
    const posts = await createNewTask({
      ...values,
    });

    if (posts) {
      router.push(`/planner/tasks`);
    }
  } catch (err) {
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
      <TextAreaFormField {...fieldConfig["blockers"]} form={form} />
    </div>
  );
};

const TaskForm = ({ form }: { form: UseFormReturn<NewTaskSchemaType> }) => {
  const router = useRouter();

  return (
    <div className="bg-white text-primary w-1/2 h-max border-2 rounded-md px-3 py-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => {
            onSubmit({
              values: values,
              router: router,
            });
          })}
          className="space-y-8"
        >
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
      title: "Title",
      status: "started",
      blockers: "blockers",
      project_id: "Portfolio",
    },
  });

  return (
    <div className="w-full h-full flex flex-row justify-center px-2 py-10 overflow-y-scroll">
      <TaskForm form={form} />
    </div>
  );
};

export default NewTask;
