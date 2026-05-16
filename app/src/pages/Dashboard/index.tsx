import { DatePickerSimple, Heading, Label } from "@/components/ui";
import { useState } from "react";

export function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <DatePickerSimple
          value={date}
          onChange={setDate}
          dayVariant={"primary-ghost"}
          dayRounded={"full"}
        />
      </div>
    </main>
  );
}
