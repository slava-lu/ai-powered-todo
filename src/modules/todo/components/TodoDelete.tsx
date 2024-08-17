"use client";

import { useFormState } from "react-dom";
import { deleteTodo } from "@/modules/todo/todo-actions";
import DeleteButton from "@/modules/todo/components/DeleteButton";

export default function TodoDelete({ id }: { id: number }) {
  const deleteTodoWithParams = deleteTodo.bind(null, id);
  const initialState = { message: "" };
  const [state, dispatch] = useFormState(deleteTodoWithParams, initialState);

  return (
    <form action={dispatch}>
      <DeleteButton />
      <div id="error" aria-live="polite" aria-atomic="true">
        {state?.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
      </div>
    </form>
  );
}
