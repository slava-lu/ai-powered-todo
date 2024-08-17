import sql from "@/lib/db";
import { Todo } from "@/modules/todo/models";

export async function fetchAllTodos(query: {
  search?: string;
  filter?: string;
}) {
  try {
    const { search = "", filter } = query;
    return sql<Todo[]>`select *
                     from task_list
                     where 
                       (category ILIKE ${`%${search}%`} OR
                       description ILIKE ${`%${search}%`})
                       ${filter ? sql`AND status = 0` : sql``} 
                       order by id`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the todo list");
  }
}

export async function fetchTodosById(id: string) {
  try {
    return sql<Todo[]>`select *
                     from task_list
                     where 
                       id = ${id}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the todo item");
  }
}

export async function fetchTodoCount() {
  try {
    return sql`SELECT COUNT(id) from task_list`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the todo list");
  }
}
