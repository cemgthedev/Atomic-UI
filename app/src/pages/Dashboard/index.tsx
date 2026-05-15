import { Button, Heading, Label, Loader } from "@/components/ui";
import { MailCheckIcon } from "lucide-react";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <Loader variant={"default"} size={"xs"} />
        <Loader variant={"muted"} />
        <Loader variant={"dark"} />
        <Loader
          variant={"dark"}
          icon={<MailCheckIcon size={120} />}
        />
        
        <Button variant={"primary-ghost"}>
          <Loader className="text-cyan-800" /> Entrando...
        </Button>
        <Loader variant={"success"} />
        <Loader variant={"warning"} />
        <Loader variant={"danger"} />
      </div>
    </main>
  );
}
