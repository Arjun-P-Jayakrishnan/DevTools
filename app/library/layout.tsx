import Sidebar, { Tile } from "@/components/organisms/Sidebar";
import { FilePlus2, FileStack } from "lucide-react";

const tiles: Tile[] = [
  {
    title: "Create New",
    href: "/library/new",
    prefix: <FilePlus2 height={20} />,
  },
  {
    title: "Posts",
    href: "/library/posts",
    prefix: <FileStack height={20} />,
  },
];

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[92vh] flex flex-row">
      <Sidebar tiles={tiles} />
      {children}
    </div>
  );
}
