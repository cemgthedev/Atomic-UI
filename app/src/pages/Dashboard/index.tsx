import { Heading, Label, Progress, ProgressValue } from "@/components/ui";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="space-y-4">
        <Progress>
          <ProgressValue value={50} variant={"default"} striped />
        </Progress>
        <Progress size={"xl"}>
          <ProgressValue value={50} variant={"primary"} striped />
        </Progress>
        <Progress size={"lg"}>
          <ProgressValue value={50} variant={"secondary"} striped />
        </Progress>
        <Progress size={"md"}>
          <ProgressValue value={50} variant={"success"} striped />
        </Progress>
        <Progress size={"sm"}>
          <ProgressValue value={50} variant={"warning"} striped />
        </Progress>
        <Progress size={"xs"}>
          <ProgressValue value={50} variant={"danger"} striped />
        </Progress>
        <Progress>
          <ProgressValue value={50} variant={"dark"} striped animated />
        </Progress>
      </div>
    </main>
  );
}
