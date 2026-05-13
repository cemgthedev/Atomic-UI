import { Heading, Label } from "@/components/ui";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>
    </main>
  );
}
