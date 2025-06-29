import Sidebar, { Tile } from "@/components/organisms/Sidebar";
import { FileJson } from "lucide-react";

const tiles: Tile[] = [
  {
    title: "Json Viewer",
    href: "/tools/json",
    prefix: <FileJson height={20} />,
  },
];

export default function PlannerLayout({
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
