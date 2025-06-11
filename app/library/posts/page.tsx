import { getAllPosts, Post } from "@/lib/actions/posts.actions";
import Button from "@/modules/common/Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/modules/common/Card";
import Link from "next/link";

interface PostCardProps extends Post {
  key?: string | number;
}

const PostCard = ({
  id,
  key,
  title,
  tags,
  created_at,
  category,
  topic,
}: PostCardProps) => {
  return (
    <Card className="h-fit" key={key}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{tags}</CardDescription>
        <CardAction>
          <Button variant="link">{created_at}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>The Card Content</CardContent>
      <CardFooter className="w-full flex-row gap-2 flex-end">
        <Button>
          <Link href={`/library/posts/${id}`}>Read</Link>
        </Button>
        <Button>Edit</Button>
      </CardFooter>
    </Card>
  );
};

function getPostCards(posts: Post[]): React.ReactNode[] {
  const cards: React.ReactNode[] = [];

  posts.forEach((post, index) => {
    cards.push(
      PostCard({
        id: post.id,
        key: index,
        title: post.title,
        tags: post.tags,
        created_at: new Date(post.created_at).toLocaleDateString(),
        category: post.category,
        topic: post.topic,
        content: "",
      })
    );
  });

  return cards;
}

const LibraryPostsPage = async () => {
  const posts: Array<Post> = await getAllPosts({});

  const cards: React.ReactNode[] = getPostCards(posts);
  console.log("posts", posts);

  return (
    <div className="w-5/6 h-full px-2 py-2 bg-gray-100 ">
      <div className="h-11/12 grid lg:grid-cols-4 md:grid-cols-2  gap-x-3 gap-y-3overflow-y-scroll">
        {...cards}
      </div>
      {/* <div className="flex flex-row justify-center items-center gap-3">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div> */}
    </div>
  );
};

export default LibraryPostsPage;
