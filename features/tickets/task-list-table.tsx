"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/modules/common/Table";
import { useState } from "react";

type TaskStatus =
  | "todo"
  | "started"
  | "in_progress"
  | "paused"
  | "cancelled"
  | "completed";

type TaskColor = Record<TaskStatus, string>;

interface TaskTableCol<T> {
  header: (title: string | number | undefined) => React.ReactNode;
  cell: (values: T) => React.ReactNode;
}

interface TaskTableElements {
  /**The Task ID*/
  task_id: TaskTableCol<string | number>;

  /**Task Title */
  task_title: TaskTableCol<string>;

  /*Project */
  project_id: TaskTableCol<string>;

  /**Status of the task */
  status: TaskTableCol<TaskStatus>;

  /**Start date for */
  start_date: TaskTableCol<string>;

  /**If completed or stopped */
  end_date?: TaskTableCol<string>;

  /**Blockers if any */
  blockers?: TaskTableCol<string>;

  actions: TaskTableCol<null>;
}

interface TaskTableData {
  /**The Task ID*/
  task_id: string | number;

  /**Task Title */
  task_title: string;

  /*Project */
  project_id: string;

  /**Status of the task */
  status: TaskStatus;

  /**Start date for */
  start_date: string;

  /**If completed or stopped */
  end_date?: string;

  /**Blockers if any */
  blockers?: string;
}

interface TaskTableProps {
  headers: TaskTableData;
  data: TaskTableData[];
  elements: TaskTableElements;
  className: string;
}

const TaskTable = ({ data, elements, className, headers }: TaskTableProps) => {
  const [sortBy, setSortBy] = useState<keyof TaskTableData>("task_id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const keys: (keyof TaskTableData)[] = Object.keys(
    headers
  ) as (keyof TaskTableData)[];

  return (
    <div className={`text-primary bg-white rounded-md border${className}`}>
      <Table className="h-full w-full">
        <TableHeader className="pl-2">
          <TableRow>
            {keys.map((key) => (
              <TableHead key={key} className="text-center">
                {elements[key]?.header(headers[key] ?? "")}
              </TableHead>
            ))}
            <TableHead>{elements["actions"].header(undefined)}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {keys.map((key, index) => (
                <TableCell key={`${key}-${index}`} className="text-center">
                  {elements[key]?.cell(row[key] as any)}
                </TableCell>
              ))}
              <TableCell>{elements["actions"].cell(null)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { TaskTable };
export type {
  TaskColor,
  TaskTableCol,
  TaskTableData,
  TaskTableElements,
  TaskTableProps,
};
