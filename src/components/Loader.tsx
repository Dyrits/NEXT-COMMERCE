import { Loader2 } from "lucide-react";

export function AdminLoader() {
  return (
    <div className="flex justify-center">
      <Loader2 className="size-24 animate-spin" />
    </div>
  );
}