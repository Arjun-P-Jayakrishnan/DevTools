"use client";

import { updatePost } from "@/lib/actions/posts.actions";
import Button from "@/modules/common/Button";
import { Form } from "@/modules/common/Form";
import MarkdownViewer from "@/modules/ui/markdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import z from "zod";
import { FormInputProps, InputFormField } from "./InputField";
import { TextAreaFormField } from "./InputTeaxtArea";
import { formSchema, NewPostSchemaType } from "./schema";

const fieldConfig: Record<keyof NewPostSchemaType, FormInputProps> = {
  title: {
    field: "title",
    label: "Title",
    placeholder: "Enter the Title",
    description: "The Title of the post.",
    form: null,
  },
  topic: {
    field: "topic",
    label: "Topic",
    placeholder: "Enter the topic.",
    description: "The Topic of the post.",
    form: null,
  },
  category: {
    field: "category",
    label: "Category",
    placeholder: "Enter the category.",
    description: "The Category of the post.",
    form: null,
  },
  tags: {
    field: "tags",
    label: "Tags",
    placeholder: "Related Fields",
    description: "',' is the separator",
    form: null,
  },
  content: {
    field: "content",
    label: "Content",
    placeholder: "",
    description: "",
    form: null,
  },
};

const PostHeader = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return (
    <div className="flex flex-row justify-start gap-3">
      <InputFormField {...fieldConfig["title"]} form={form} />
      <InputFormField {...fieldConfig["topic"]} form={form} />
    </div>
  );
};
const PostSubHeader = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return (
    <div className="flex flex-row justify-start gap-3">
      <InputFormField {...fieldConfig["category"]} form={form} />
      <InputFormField {...fieldConfig["tags"]} form={form} />
    </div>
  );
};

const PostContent = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return <TextAreaFormField {...fieldConfig["content"]} form={form} />;
};

const LibraryPostForm = ({
  id,
  created_at,
  form,
}: {
  id: string;
  created_at: string;
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  /**
   * @description update database when submitted
   * return to view the newest post if created else throw Error
   * @param values currently populated values from form
   */
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const posts = await updatePost({
        topic: values.title,
        category: values.category,
        content: values.content,
        id: id,
        tags: values.tags.split(","),
        title: values.title,
        created_at: created_at,
      });
      console.log("posts", { ...values });

      // if (posts) {
      //   redirect(`/library/posts/${posts.id}`);
      // }
    } catch (err) {
      console.log("Failed to create a post", err);
      throw new Error(`Failed to create a new post in library due to ${err}`);
    }
  }
  return (
    <div className="text-primary">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <PostHeader form={form} />
          <PostSubHeader form={form} />
          <PostContent form={form} />
          <Button type="submit" className="bg-primary">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

/**
 * @description allows user to create new post
 * @returns The template for the new post creation
 */
const EditPost = ({
  id,
  created_at,
  category,
  content,
  tags,
  title,
  topic,
}: NewPostSchemaType & { id: string; created_at: string }) => {
  const form = useForm<NewPostSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      category: category,
      content: content,
      tags: tags,
      topic: topic,
    },
  });
  const { _content, _title, _tags } = {
    _content: form.watch("content"),
    _title: form.watch("title"),
    _tags: form.watch("tags"),
  };

  return (
    <div className="w-screen h-full flex flex-row justify-center px-2">
      <div className="w-1/2 h-full pr-4 border-r-2 pt-4">
        <LibraryPostForm form={form} created_at={created_at} id={id} />
      </div>
      {/* Split into two sections */}
      <div className=" w-1/2 h-full text-primary pl-3">
        <MarkdownViewer
          title={_title}
          content={_content}
          tags={_tags.split(",")}
        />
      </div>
    </div>
  );
};

export default EditPost;
