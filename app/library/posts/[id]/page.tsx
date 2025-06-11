import { getPostById } from "@/lib/actions/posts.actions";
import MarkdownViewer from "@/modules/ui/markdown";

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const postId = (await params).id;
  const post = await getPostById({ postId: postId });

  return (
    <div className=" w-full h-full bg-white  text-primary">
      <MarkdownViewer
        content={post?.content}
        title={post?.title}
        tags={post?.tags}
        className="max-w-full px-6 py-3"
      />
    </div>
  );
}
