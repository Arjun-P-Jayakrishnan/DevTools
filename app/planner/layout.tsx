import Sidebar, { Tile } from "@/components/_Organisms/Sidebar";
import { FolderKanban, TicketPlus } from "lucide-react";

const tiles: Tile[] = [
  {
    title: "Task List",
    href: "/planner/tasks",
    prefix: <FolderKanban height={20} />,
  },
  {
    title: "Create New",
    href: "/planner/new",
    prefix: <TicketPlus height={20} />,
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
