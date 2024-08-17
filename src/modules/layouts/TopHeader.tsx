import LocaleSwitcher from "./LocaleSwitcher";
import SearchBar from "@/modules/todo/components/SearchBar";
import FilterDone from "@/modules/todo/components/FilterDone";
import { getTranslations } from "next-intl/server";

export default async function TopHeader() {
  const t = await getTranslations();
  return (
    <div className="md:sticky md:top-0 py-4 bg-gray-100 z-10">
      <div className="container flex  items-center justify-between">
        <div className="flex items-center">
          <SearchBar />
          <FilterDone />
        </div>
        <h3 className="hidden md:block  md:text-lg lg:text-2xl font-semibold w-[30%]">
          {t("todo#list_title")}
        </h3>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
