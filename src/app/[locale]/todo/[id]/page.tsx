import { getTranslations } from "next-intl/server";
import ReactMarkdown from "react-markdown";
import { fetchTodosById } from "@/modules/todo/todo-data";
import { format } from "date-fns";
import BackButton from "@/components/ui/custom/backButton";

export default async function TodoDetail({
  params,
}: {
  params: { id: string };
}) {
  const t = await getTranslations();
  const [todo] = await fetchTodosById(params.id);

  return (
    <div className="container text-sm md:text-base">
      <div className="flex items-center mb-6 md:mb-10 mt-4 md:mt-8">
        <BackButton />
        <h4 className="hidden md:block text-xl font-semibold text-center justify-self-center flex-grow">
          {t("todo#todo_item_title")}
        </h4>
      </div>
      <div className="flex flex-col">
        <div className="flex mb-2 md:mb-6">
          <div className="font-semibold mr-6 w-24 md:w-28">
            {t("todo#cat_table_header_raw")}:
          </div>
          <div>{todo.category}</div>
        </div>

        <div className="flex mb-2 md:mb-6">
          <div className="font-semibold mr-6 w-24 md:w-28">
            {t("todo#created_table_header")}:
          </div>
          <div>{format(new Date(todo.created), "dd-MM-yy HH:mm")}</div>
        </div>

        <div className="flex mb-4 md:mb-6">
          <div className="font-semibold mr-6 w-24 md:w-28">
            {t("todo#status_table_header")}:
          </div>
          <div>
            {todo.status === 1
              ? t("todo#todo_status_done")
              : t("todo#todo_status_new")}
          </div>
        </div>
        <div className="flex mb-4 md:mb-6 flex-col md:flex-row">
          <div className="font-semibold mr-6 mb-1 md:mb-0 w-24 md:w-28 shrink-0">
            {t("todo#description_table_header_raw")}:
          </div>
          <div>{todo.description}</div>
        </div>
        <div className="flex  flex-col md:flex-row">
          <div className="font-semibold mr-6 mb-1 md:mb-0 w-24 md:w-28 shrink-0 text-nowrap">
            {t("todo#ai_completion_table_header")}:
          </div>
          <div className="mb-20">
            <ReactMarkdown>{todo.ai_rec}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
