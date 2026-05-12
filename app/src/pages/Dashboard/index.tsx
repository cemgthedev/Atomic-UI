import { Heading, Label } from "@/components/ui";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>
      <Heading size={"lg"} variant={"success"}>
        Get started!!
      </Heading>
      <Heading size={"md"} variant={"warning"}>
        Get started!!
      </Heading>
      <Heading size={"sm"} variant={"danger"}>
        Get started!!
      </Heading>
      <Heading size={"xs"}>Get started!!</Heading>
    </main>
  );
}
