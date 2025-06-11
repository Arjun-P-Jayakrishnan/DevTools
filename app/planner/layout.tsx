import Sidebar, { Tile } from "@/modules/layout/Sidebar";
import { FolderKanban, TicketPlus, Tickets } from "lucide-react";

const tiles: Tile[] = [
  {
    title: "Projects",
    href: "/planner/projects",
    prefix: <FolderKanban />,
  },
  {
    title: "Tickets",
    href: "/planner/tickets",
    prefix: <Tickets />,
  },
  {
    title: "Create New",
    href: "/planner/posts",
    prefix: <TicketPlus />,
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
