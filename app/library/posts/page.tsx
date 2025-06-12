import Button from "@/components/atoms/Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/molecules/Card";
import { getAllPosts, Post } from "@/lib/actions/posts.actions";
import Link from "next/link";

interface PostCardProps extends Post {
  key?: string | number;
}

const PostCard = ({
  id,
  key,
  title,
  category,
  tags,
  created_at,
}: PostCardProps) => {
  return (
    <Card className="h-fit" key={key}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-xs pt-6">
          <ul className="flex flex-row gap-2">
            {tags.map((tag, index) => (
              <li key={index} className="w-fit bg-gray-50 rounded-md  p-2">
                {tag}
              </li>
            ))}
          </ul>
        </CardDescription>
        <CardAction>
          <Button variant="link">{created_at}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>{category}</CardContent>
      <CardFooter className="w-full flex-row gap-2 flex-end">
        <Button>
          <Link href={`/library/posts/${id}`}>Read</Link>
        </Button>
        <Button>
          <Link href={`/library/posts/${id}/edit`}>Edit</Link>
        </Button>
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

  return (
    <div className="w-5/6 h-full px-2 py-2 bg-gray-100 ">
      <div className="h-11/12 w-full grid lg:grid-cols-3 md:grid-cols-2  gap-x-3 gap-y-3 overflow-y-scroll">
        {...cards}
      </div>
    </div>
  );
};

export default LibraryPostsPage;
