"use client";

import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mr-2 md:mr-4">
      <Input
        defaultValue={searchParams.get("search") || ""}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        type="text"
        id="search"
        placeholder={t("todo#search_placeholder")}
        style={{ minWidth: "80px" }}
      />
    </div>
  );
}
