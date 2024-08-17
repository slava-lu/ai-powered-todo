import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CreateNewButton() {
  const { pending } = useFormStatus();
  const t = useTranslations();
  return (
    <Button disabled={pending} variant="default" className="w-36 mt-6">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {t("todo#add_new_item_action")}
    </Button>
  );
}
