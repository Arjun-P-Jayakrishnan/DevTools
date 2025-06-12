"use server";

import EditPost from "@/features/posts/edit-posts";
import { NewPostSchemaType } from "@/features/posts/schema";
import { getPostById } from "@/lib/actions/posts.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const EditLibraryPostPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");
  const postId = (await params).id;
  console.log(`id in edit ${postId}`);
  const postData = await getPostById({ postId });

  const post: NewPostSchemaType & { id: string; created_at: string } = {
    title: postData!.title,
    category: postData?.category ?? "",
    content: postData?.content ?? "",
    tags: postData?.tags.toLocaleString() ?? "",
    topic: postData?.topic ?? "",
    id: postId,
    created_at: postData?.created_at ?? "",
  };
  return (
    <>
      <EditPost {...post} />
    </>
  );
};

export default EditLibraryPostPage;
