"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const t = useTranslations();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">{t("general#error_message")}</h2>
      <h2 className="text-center">{error.message}</h2>
    </main>
  );
}
