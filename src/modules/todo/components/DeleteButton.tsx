import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";

export default function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      variant="outline"
      size="icon"
      className="w-[30px] h-[30px] p-1 md:w-[40px] md:h-[40px]"
    >
      {!pending && <Trash2 className="h-4 w-4" />}
      {pending && <Loader2 className="h-4 w-4 animate-spin" />}
    </Button>
  );
}
