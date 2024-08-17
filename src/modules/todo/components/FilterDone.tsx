"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterDone() {
  const t = useTranslations();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const handleCheck = (value: boolean) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("filter", String(value));
    } else {
      params.delete("filter");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center mr-2">
      <Checkbox
        className="mr-1 md:mr-2"
        checked={Boolean(searchParams.get("filter"))}
        onCheckedChange={handleCheck}
      />
      <div className="text-xs md:text-sm text-nowrap ">
        {t("todo#filter_title")}
      </div>
    </div>
  );
}
