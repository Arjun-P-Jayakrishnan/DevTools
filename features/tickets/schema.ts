import z from "zod";

const formSchema = z.object({
  title: z.string().min(2, { message: "Category is required." }),
  project_id: z.string().min(2, { message: "Topic is required." }),
  status: z.string().min(2, { message: "Tags is required." }),
  start_date: z.string().min(2, { message: "Topic is required." }),
  end_date: z.string().min(2, { message: "Topic is required." }),
  blockers: z.string().min(2, { message: "Topic is required." }),
});

type NewTaskSchemaType = z.infer<typeof formSchema>;

export { formSchema };
export type { NewTaskSchemaType };
