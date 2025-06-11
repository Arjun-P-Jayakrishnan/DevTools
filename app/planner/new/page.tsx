import NewTask from "@/features/tickets/create-task";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewTaskPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");
  return (
    <div className="bg-gray-50 w-full">
      <NewTask />
    </div>
  );
};

export default NewTaskPage;
