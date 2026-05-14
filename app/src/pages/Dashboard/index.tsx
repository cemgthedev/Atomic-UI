import { Heading, Label } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="grid grid-cols-1 gap-2 min-w-4xl max-w-4xl">
        <Skeleton />
        <Skeleton variant={"dark"} rounded={"full"} className="w-12 h-12" />
        <Skeleton variant={"primary"} />
        <Skeleton variant={"secondary"} />
        <Skeleton variant={"success"} />
        <Skeleton variant={"warning"} />
        <Skeleton variant={"danger"} />
      </div>
    </main>
  );
}
