"use client";

import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import { addTodo } from "@/modules/todo/todo-actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import CreateNewButton from "./CreateNewButton";
import AiCompletion from "@/modules/ai/components/AiCompletion";

export default function TodoCreateNew({ todoCount }: { todoCount: number }) {
  const initialState = { message: "" };
  const t = useTranslations();
  const [state, dispatch] = useFormState(addTodo, initialState);

  return (
    <form action={dispatch}>
      <div className="mt-6 flex flex-col md:flex-row">
        <div className="max-w-64 items-start mr-6 hidden md:flex md:flex-col">
          <Label htmlFor="category" className="mb-1">
            {t("todo#cat_table_header")}
          </Label>
          <Input
            type="text"
            id="category"
            name="category"
            placeholder={t("todo#category_placeholder")}
          />
        </div>
        <div className="items-start flex min-w-0 flex-1 flex-col">
          <Label htmlFor="description" className="mb-1">
            {t("todo#description_table_header")}
          </Label>
          <Textarea
            className="hidden md:block "
            rows={1}
            id="description"
            name="description"
            placeholder={t("todo#description_placeholder")}
          />
          <Textarea
            className="block md:hidden"
            rows={2}
            id="description"
            name="description"
            placeholder={t("todo#description_placeholder")}
          />
        </div>
      </div>
      <div id="error" aria-live="polite" aria-atomic="true">
        {state?.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
      </div>
      <CreateNewButton />
      <AiCompletion />
    </form>
  );
}
