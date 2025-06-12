import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/molecules/Dropdown";
import { MoreHorizontal } from "lucide-react";
import { TaskColor, TaskTableElements } from "./task-list-table";

const colors: TaskColor = {
  todo: "text-primary bg-gray-500",
  started: "text-primary bg-green-300",
  in_progress: "text-primary bg-blue-200",
  paused: "text-primary bg-yellow-500",
  cancelled: "text-primary bg-red-500",
  completed: "text-primary bg-green-100",
};

const taskTableElements: TaskTableElements = {
  task_id: {
    header: (title) => <div>{title}</div>,
    cell: (data) => {
      return <>{data}</>;
    },
  },
  task_title: {
    header: (title) => <div>{title}</div>,
    cell: (data) => {
      return <>{data}</>;
    },
  },
  project_id: {
    header: (title) => <div>{title}</div>,
    cell: (data) => {
      return <>{data}</>;
    },
  },
  status: {
    header: (title) => <div>{title}</div>,
    cell: (data) => {
      return (
        <div className={`text-white rounded-md ${colors[data]} pt-1 pb-1.5`}>
          {data}
        </div>
      );
    },
  },
  start_date: {
    header: (title) => <div>{title}</div>,
    cell: (data) => {
      return <>{data}</>;
    },
  },
  end_date: {
    header: (title) => <div>{title}</div>,
    cell: (data) => {
      return <>{data}</>;
    },
  },
  blockers: {
    header: (title) => <div>{title}</div>,
    cell: (data) => {
      return <>{data}</>;
    },
  },
  actions: {
    header: (_) => <div>Actions</div>,
    cell: (_) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="hover:bg-gray-200 rounded-md px-2 py-1">
              <MoreHorizontal />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            {/* <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {}}>Delete</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
};

export { taskTableElements };
