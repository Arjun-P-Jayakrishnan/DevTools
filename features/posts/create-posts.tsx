"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { POST_TEMPLATE } from "@/constants";
import { createPost } from "@/lib/actions/posts.actions";
import MarkdownViewer from "@/modules/ui/markdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm, UseFormReturn } from "react-hook-form";
import z from "zod";

/** Post Schema */
export interface PostFormSchema {
  /** Title of project */
  title: string;
  /** Related Fields */
  category: string;
  /** Markdown Content */
  content: string;
}

const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required." }),
  category: z.string().min(2, { message: "Category is required." }),
  topic: z.string().min(2, { message: "Topic is required." }),
  tags: z.string().min(2, { message: "Tags is required." }),
  content: z
    .string()
    .min(2, { message: "Content is required." })
    .max(1000, "Limit to 255 words. Update will have chunking"),
});

/**
 * @description update database when submitted
 * return to view the newest post if created else throw Error
 * @param values currently populated values from form
 */
async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const posts = await createPost({
      ...values,
      tags: values.tags.split(","),
    });

    if (posts) {
      redirect(`/library/posts/${posts.id}`);
    }
  } catch (err) {
    console.log("Failed to create a post", err);
    throw new Error(`Failed to create a new post in library due to ${err}`);
  }
}

const PostHeader = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return (
    <div className="flex flex-row justify-start gap-3">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter the title"
                {...field}
                className="input "
              />
            </FormControl>
            <FormDescription>Post Topic.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="topic"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Topic</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter the Topic"
                {...field}
                className="input"
              />
            </FormControl>
            <FormDescription>Main Topic.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
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
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter the title"
                {...field}
                className="input"
              />
            </FormControl>
            <FormDescription>Category of the topic</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tags"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tags</FormLabel>
            <FormControl>
              <Input placeholder="Tags" {...field} className="input" />
            </FormControl>
            <FormDescription>
              Fields relevant to the topic. Use ',' for separation.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

const PostContent = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return (
    <FormField
      control={form.control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Enter the Markdown"
              {...field}
              className="input h-90"
            ></Textarea>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const LibraryPostForm = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) => {
  return (
    <div className="text-primary">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <PostHeader form={form} />
          <PostSubHeader form={form} />
          <PostContent form={form} />
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
const NewPost = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Setting up Auth",
      category: "Authentication",
      content: POST_TEMPLATE,
      tags: "next-js",
      topic: "Next Js Site",
    },
  });
  const { content, title, tags } = {
    content: form.watch("content"),
    title: form.watch("title"),
    tags: form.watch("tags"),
  };

  return (
    <div className="w-screen h-full flex flex-row justify-center px-2">
      <div className="w-1/2 h-full pr-4 border-r-2 pt-4">
        <LibraryPostForm form={form} />
      </div>
      {/* Split into two sections */}
      <div className=" w-1/2 h-full text-primary pl-3">
        <MarkdownViewer
          title={title}
          content={content}
          tags={tags.split(",")}
        />
      </div>
    </div>
  );
};

export default NewPost;
