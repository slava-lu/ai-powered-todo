import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Loader2, Check, Undo } from "lucide-react";

export default function ChangeStatusButton({ status }: { status: number }) {
  const t = useTranslations();
  const { pending } = useFormStatus();
  const buttonText = status === 1 ? t("todo#undo_action") : t("todo#do_action");
  const buttonIcon = status === 1 ? <Undo /> : <Check />;
  return (
    <>
      {/*desktop version*/}
      <Button
        disabled={pending}
        variant="default"
        className={cn("hidden md:flex w-[100px]", {
          "bg-gray-500": status === 1,
        })}
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {!pending && buttonText}
      </Button>

      {/*mobile version*/}
      <Button
        disabled={pending}
        variant="default"
        className={cn("md:hidden w-[30px] h-[30px] p-1", {
          "bg-gray-500": status === 1,
        })}
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {!pending && buttonIcon}
      </Button>
    </>
  );
}
