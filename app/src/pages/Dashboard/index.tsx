import { Heading, Label, Switch, Text } from "@/components/ui";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="flex items-center gap-2">
          <Switch variant={"default"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"primary"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"secondary"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"success"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"warning"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"danger"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"muted"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"primary-bordered"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"secondary-bordered"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"success-bordered"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"warning-bordered"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"danger-bordered"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"dark-ghost"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"primary-ghost"} size="xl" />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"secondary-ghost"} size={"lg"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"success-ghost"} size={"md"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"warning-ghost"} size={"sm"} />
          <Text>Switch</Text>
        </div>
        <div className="flex items-center gap-2">
          <Switch variant={"danger-ghost"} size={"xs"} />
          <Text>Switch</Text>
        </div>
      </div>
    </main>
  );
}
