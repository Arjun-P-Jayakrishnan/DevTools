"use client";

import { TASK_LIST_DATA, TASK_LIST_HEADERS } from "@/constants";
import {
  TaskColor,
  TaskTable,
  TaskTableData,
  TaskTableElements,
} from "@/features/tickets/task-list-table";
import Button from "@/modules/common/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/common/Dropdown";
import { MoreHorizontal } from "lucide-react";

const colors: TaskColor = {
  todo: "text-primary bg-gray-500",
  started: "text-primary bg-green-200",
  in_progress: "text-primary bg-blue-200",
  paused: "text-primary bg-yellow-500",
  cancelled: "text-primary bg-red-500",
  completed: "text-primary bg-green-100",
};

const elements: TaskTableElements = {
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
        <Button className={` ${colors[data]}`} variant="disabled" size={"sm"}>
          {data}
        </Button>
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
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => {}}></DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
};

const TaskListsPage = () => {
  const headers: TaskTableData = TASK_LIST_HEADERS as TaskTableData;
  const data: TaskTableData[] = TASK_LIST_DATA as TaskTableData[];

  return (
    <div className="w-5/6 h-full px-2 py-2 bg-white ">
      <TaskTable
        data={data}
        elements={elements}
        headers={headers}
        className=""
      />
    </div>
  );
};

export default TaskListsPage;
