import { Fragment } from "react";
import { format } from "date-fns";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import TodoStatus from "@/modules/todo/components/TodoStatus";
import TodoDelete from "@/modules/todo/components/TodoDelete";
import { fetchAllTodos } from "@/modules/todo/todo-data";
import { getTranslations } from "next-intl/server";

export default async function TodoListFlex({
  query,
}: {
  query: {
    search?: string;
    filter?: string;
  };
}) {
  const t = await getTranslations();
  const todos = await fetchAllTodos(query);
  return (
    <div className="flex flex-col mt-8">
      {todos.map((todo) => {
        const opacityLevel = todo.status === 0 ? "opacity-100" : "opacity-40";
        const opacityLevelAi = todo.status === 0 ? "opacity-60" : "opacity-40";
        return (
          <Fragment key={todo.id}>
            <div className="flex pb-1 items-end">
              <div className={cn("w-[40px] hidden md:flex", opacityLevel)}>
                {todo.id}
              </div>
              <div className={cn("hidden md:flex w-[140px]", opacityLevel)}>
                {todo.category}
              </div>
              <div
                className={cn(
                  "flex-1  text-sm md:text-base mr-2 md:mr-4  text-ellipsis line-clamp-3 ",
                  opacityLevel,
                )}
              >
                <Link href={`/todo/${todo.id}`}>{todo.description}</Link>
              </div>
              <div
                className={cn("hidden md:flex w-[140px] mr-4", opacityLevel)}
              >
                {format(new Date(todo.created), "dd-MM-yy HH:mm")}
              </div>
              <div className="mr-4 md:mr-6">
                <TodoStatus id={todo.id} status={todo.status} />
              </div>
              <div className="w-[40px] mr-2">
                <TodoDelete id={todo.id} />
              </div>
            </div>
            <div className="flex flex-1 items-center mr-[10px] md:mr-[200px] mb-4 md:mb-6 ">
              <div
                className={cn(
                  opacityLevelAi,
                  "italic text-ellipsis  line-clamp-2 text-xs md:text-sm",
                )}
              >
                <Link href={`/todo/${todo.id}`} className="border-0">
                  {todo?.ai_rec?.replaceAll("**", " ")}
                </Link>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
