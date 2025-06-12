import z from "zod";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required." }),
  project_id: z.string().min(2, { message: "Project is required." }),
  status: z.string().min(2, { message: "Status is required." }),
  blockers: z.string().min(2, { message: "Blockers is required." }),
});

type NewTaskSchemaType = z.infer<typeof formSchema>;

export { formSchema };
export type { NewTaskSchemaType };
