import {
  DatePickerMultiple,
  DatePickerRange,
  DatePickerSimple,
  Heading,
  Label,
} from "@/components/ui";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

export function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>(
    undefined,
  );

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
          inputVariant={"default"}
          inputRounded={"md"}
          calendarVariant={"default"}
          calendarRounded={"full"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"primary"}
          inputRounded={"md"}
          calendarVariant={"primary"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"secondary"}
          inputRounded={"md"}
          calendarVariant={"secondary"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"success"}
          inputRounded={"md"}
          calendarVariant={"success"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"warning"}
          inputRounded={"md"}
          calendarVariant={"warning"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"danger"}
          inputRounded={"md"}
          calendarVariant={"danger"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"default"}
          inputRounded={"md"}
          calendarVariant={"default"}
          calendarRounded={"full"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"primary"}
          inputRounded={"md"}
          calendarVariant={"primary-bordered"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"secondary"}
          inputRounded={"md"}
          calendarVariant={"secondary-bordered"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"success"}
          inputRounded={"md"}
          calendarVariant={"success-bordered"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"warning"}
          inputRounded={"md"}
          calendarVariant={"warning-bordered"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"danger"}
          inputRounded={"md"}
          calendarVariant={"danger-bordered"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"default"}
          inputRounded={"md"}
          calendarVariant={"default"}
          calendarRounded={"full"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"default"}
          inputRounded={"md"}
          calendarVariant={"primary-ghost"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"secondary"}
          inputRounded={"md"}
          calendarVariant={"secondary-ghost"}
          calendarRounded={"md"}
        />
        <DatePickerSimple
          value={date}
          onChange={setDate}
          inputVariant={"success"}
          inputRounded={"md"}
          calendarVariant={"success-ghost"}
          calendarRounded={"md"}
        />
        <DatePickerMultiple
          value={multipleDates}
          onChange={setMultipleDates}
          inputVariant={"warning"}
          inputRounded={"md"}
          calendarVariant={"warning-ghost"}
          calendarRounded={"md"}
        />
        <DatePickerRange
          value={rangeDate}
          onChange={(range) => {
            console.log(range);
            setRangeDate(range);
          }}
          inputVariant={"danger"}
          inputRounded={"md"}
          calendarVariant={"danger-ghost"}
          calendarRounded={"md"}
        />
      </div>
    </main>
  );
}
