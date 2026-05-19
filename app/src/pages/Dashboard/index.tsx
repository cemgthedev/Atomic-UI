import { Heading, Label, Text } from "@/components/ui";
import { Checkbox } from "@/components/ui/checkbox";
import { Building2Icon, XIcon } from "lucide-react";

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
          <Checkbox variant={"default"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"primary"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"secondary"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"success"}/>
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"warning"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"danger"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"muted"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"primary-bordered"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"secondary-bordered"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"success-bordered"}/>
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"warning-bordered"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"danger-bordered"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"dark-bordered"}/>
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"primary-ghost"} className="size-12" size={"xl"} sizeIndicator={"xl"} rounded={"full"} icon={<Building2Icon size={32} className="size-10" />} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"secondary-ghost"} size={"lg"} sizeIndicator={"lg"} rounded={"xl"}/>
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"success-ghost"} size={"md"} sizeIndicator={"md"} rounded={"full"}/>
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"warning-ghost"} size={"sm"} sizeIndicator={"sm"} />
          <Text>Checkbox</Text>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox variant={"danger-ghost"} size={"xs"} sizeIndicator={"xs"} />
          <Text>Checkbox</Text>
        </div>
      </div>
    </main>
  );
}
