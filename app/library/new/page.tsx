import NewPost from "@/features/posts/create-posts";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewPostPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return <NewPost />;
};

export default NewPostPage;
