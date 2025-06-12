import z from "zod";

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

type NewPostSchemaType = z.infer<typeof formSchema>;

export { formSchema };
export type { NewPostSchemaType };
