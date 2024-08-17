"use client";

import { useFormState } from "react-dom";
import { changeTodoStatus } from "@/modules/todo/todo-actions";
import ChangeStatusButton from "@/modules/todo/components/ChangeStatusButton";

export default function TodoStatus({
  id,
  status,
}: {
  id: number;
  status: number;
}) {
  const changeTodoStatusWithParams = changeTodoStatus.bind(null, id, status);
  const initialState = { message: "" };
  const [state, dispatch] = useFormState(
    changeTodoStatusWithParams,
    initialState,
  );

  return (
    <form action={dispatch}>
      <div className="flex items-center justify-center">
        <ChangeStatusButton status={status} />
        <div id="error" aria-live="polite" aria-atomic="true">
          {state?.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </div>
      </div>
    </form>
  );
}
