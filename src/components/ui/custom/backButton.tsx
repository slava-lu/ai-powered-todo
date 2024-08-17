"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

const BackButton = () => {
  const router = useRouter();
  const t = useTranslations();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Button
      onClick={handleBackClick}
      variant="outline"
      className="flex items-center space-x-2 w-26"
    >
      <ArrowLeft size={20} />
      <span>{t("general#back")}</span>
    </Button>
  );
};

export default BackButton;
