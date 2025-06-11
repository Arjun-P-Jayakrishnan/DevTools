import { TASK_LIST_HEADERS } from "@/constants";
import { TaskTable, TaskTableData } from "@/features/tickets/task-list-table";
import { getAllTasks } from "@/lib/actions/tasks.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TaskListsPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const headers: TaskTableData = TASK_LIST_HEADERS as TaskTableData;
  const data: TaskTableData[] = [];
  (await getAllTasks({ limit: 1, page: 1 })).forEach((task, index) => {
    data.push({
      task_id: index + 1,
      project_id: task.project_id,
      start_date: task.started_at,
      status: "started",
      task_title: task.title,
      blockers: task.blockers,
    });
  });

  return (
    <div className="w-5/6 h-full px-2 py-2 bg-white ">
      <TaskTable data={data} headers={headers} className="" />
    </div>
  );
};

export default TaskListsPage;
