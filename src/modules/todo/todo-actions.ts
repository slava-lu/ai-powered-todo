"use server";

import { getTranslations } from "next-intl/server";
import { aiSystemMessage, maxTokens } from "@/lib/consts";
import sql from "@/lib/db";
import { revalidatePath } from "next/cache";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";

type State = {
  message?: string;
};

export async function changeTodoStatus(
  id: number,
  status: number,
  prevState: State | undefined,
) {
  const t = await getTranslations();
  try {
    await sql`
    update task_list
    set status = ${status === 1 ? 0 : 1}
    where id= ${id}`;
  } catch (error) {
    return {
      message: t("general#database_error"),
    };
  }
  revalidatePath("/");
}

export async function deleteTodo(id: number, prevState: State | undefined) {
  const t = await getTranslations();
  try {
    await sql`
    delete from task_list    
    where id= ${id}`;
  } catch (error) {
    return {
      message: t("general#database_error"),
    };
  }
  revalidatePath("/");
}

export async function addTodo(
  prevState: State | undefined,
  formData: FormData,
) {
  const category = formData.get("category")?.toString() || "Default";
  const description = formData.get("description")?.toString();
  const t = await getTranslations();

  if (!description) {
    return { message: t("todo#missing_field_error") };
  }

  try {
    await sql`
    insert into task_list
       (category, description, status)
    values 
    (${category}, ${description}, 0)`;
  } catch {
    return {
      message: t("general#database_error"),
    };
  }
  revalidatePath("/");
}

export async function updateTodoAiRec(text: string) {
  const t = await getTranslations();
  try {
    const result = await sql`
    select max(id) as max_id from task_list`;
    const id = result[0].max_id;
    await sql`
      update task_list
      set ai_rec = ${text}
      where id = ${id}`;
  } catch {
    return {
      message: t("general#database_error"),
    };
  }
  revalidatePath("/");
}

export const streamTextAction = async (prompt: string) => {
  const result = await streamText({
    model: openai("gpt-4o"),
    temperature: 0,
    maxTokens: maxTokens,
    system: aiSystemMessage,
    prompt: prompt,
  });
  return createStreamableValue(result.textStream).value;
};
