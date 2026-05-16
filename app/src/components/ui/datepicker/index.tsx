import { CalendarIcon, X } from "lucide-react";
import * as React from "react";
import { pt } from "react-day-picker/locale";

import {
  Button as ButtonCalendar,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";

import { cn } from "@/utils/cn";
import { format } from "date-fns";
import type { DateRange, DayPicker } from "react-day-picker";

type CalendarProps = Omit<React.ComponentProps<typeof DayPicker>, "mode"> & {
  dayVariant?: React.ComponentProps<typeof ButtonCalendar>["variant"];
  dayRounded?: React.ComponentProps<typeof ButtonCalendar>["rounded"];
};

type DatePickerSimpleProps = CalendarProps & {
  value?: Date;
  defaultValue?: Date;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  formatString?: string;
  onChange?: (date: Date | undefined) => void;
};

const DatePickerSimple = React.forwardRef<
  HTMLButtonElement,
  DatePickerSimpleProps
>(
  (
    {
      value,
      defaultValue,
      placeholder = "Selecione uma data",
      disabled,
      clearable = true,
      className,
      formatString = "dd/MM/yyyy",
      onChange,
      dayVariant,
      dayRounded,
      ...calendarProps
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    const [internalDate, setInternalDate] = React.useState<Date | undefined>(
      defaultValue,
    );

    const selectedDate = value ?? internalDate;

    const handleSelect = (date: Date | undefined) => {
      if (!value) {
        setInternalDate(date);
      }

      onChange?.(date);

      if (date) {
        setOpen(false);
      }
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (!value) {
        setInternalDate(undefined);
      }

      onChange?.(undefined);
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors",
              "hover:bg-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
          >
            <span
              className={cn(
                "truncate",
                !selectedDate && "text-muted-foreground",
              )}
            >
              {selectedDate ? format(selectedDate, formatString) : placeholder}
            </span>

            <div className="flex items-center gap-1">
              {clearable && selectedDate && (
                <button
                  type="button"
                  onClick={handleClear}
                  className={cn(
                    "rounded-sm p-0.5 transition-colors",
                    "hover:bg-muted-foreground/10",
                  )}
                >
                  <X className="size-4 opacity-70" />
                </button>
              )}

              <CalendarIcon className="size-4 opacity-70" />
            </div>
          </button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="w-auto overflow-hidden rounded-xl p-0"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            locale={pt}
            showOutsideDays
            dayVariant={dayVariant}
            dayRounded={dayRounded}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

type DatePickerRangeProps = CalendarProps & {
  value?: DateRange | undefined;
  defaultValue?: DateRange;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  formatString?: string;
  onChange?: (date: DateRange | undefined) => void;
};

const DatePickerRange = React.forwardRef<
  HTMLButtonElement,
  DatePickerRangeProps
>(
  (
    {
      value,
      defaultValue,
      placeholder = "Selecione um período",
      disabled,
      clearable = true,
      className,
      formatString = "dd/MM/yyyy",
      onChange,
      dayVariant,
      dayRounded,
      ...calendarProps
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    const [internalRange, setInternalRange] = React.useState<
      DateRange | undefined
    >(defaultValue);

    const selectedRange = value ?? internalRange;

    const handleSelect = (range: DateRange | undefined) => {
      if (!value) {
        setInternalRange(range);
      }

      onChange?.(range);

      if (range?.from && range?.to) {
        setOpen(false);
      }
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (!value) {
        setInternalRange(undefined);
      }

      onChange?.(undefined);
    };

    const formatRange = (range: DateRange | undefined): string => {
      if (!range?.from) return placeholder;
      if (range.to) {
        return `${format(range.from, formatString)} - ${format(range.to, formatString)}`;
      }
      return format(range.from, formatString);
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors",
              "hover:bg-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
          >
            <span
              className={cn(
                "truncate",
                !selectedRange?.from && "text-muted-foreground",
              )}
            >
              {formatRange(selectedRange)}
            </span>

            <div className="flex items-center gap-1">
              {clearable && selectedRange?.from && (
                <button
                  type="button"
                  onClick={handleClear}
                  className={cn(
                    "rounded-sm p-0.5 transition-colors",
                    "hover:bg-muted-foreground/10",
                  )}
                >
                  <X className="size-4 opacity-70" />
                </button>
              )}

              <CalendarIcon className="size-4 opacity-70" />
            </div>
          </button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="w-auto overflow-hidden rounded-xl p-0"
        >
          <Calendar
            mode="range"
            selected={selectedRange}
            onSelect={handleSelect}
            locale={pt}
            showOutsideDays
            dayVariant={dayVariant}
            dayRounded={dayRounded}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

type DatePickerMultipleProps = CalendarProps & {
  value?: Date[];
  defaultValue?: Date[];
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  formatString?: string;
  onChange?: (dates: Date[]) => void;
};

const DatePickerMultiple = React.forwardRef<
  HTMLButtonElement,
  DatePickerMultipleProps
>(
  (
    {
      value,
      defaultValue = [],
      placeholder = "Selecione datas",
      disabled,
      clearable = true,
      className,
      formatString = "dd/MM/yyyy",
      onChange,
      dayVariant,
      dayRounded,
      required = true,
      ...calendarProps
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    const [internalDates, setInternalDates] =
      React.useState<Date[]>(defaultValue);

    const selectedDates = value ?? internalDates;

    const handleSelect = (dates: Date[]) => {
      if (!value) {
        setInternalDates(dates);
      }

      onChange?.(dates);
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (!value) {
        setInternalDates([]);
      }

      onChange?.([]);
    };

    const formatMultipleDates = (dates: Date[]): string => {
      if (dates.length === 0) return placeholder;
      if (dates.length === 1) return format(dates[0], formatString);
      return `${dates.length} datas selecionadas`;
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors",
              "hover:bg-muted",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
          >
            <span
              className={cn(
                "truncate",
                selectedDates.length === 0 && "text-muted-foreground",
              )}
            >
              {formatMultipleDates(selectedDates)}
            </span>

            <div className="flex items-center gap-1">
              {clearable && selectedDates.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className={cn(
                    "rounded-sm p-0.5 transition-colors",
                    "hover:bg-muted-foreground/10",
                  )}
                >
                  <X className="size-4 opacity-70" />
                </button>
              )}

              <CalendarIcon className="size-4 opacity-70" />
            </div>
          </button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="w-auto overflow-hidden rounded-xl p-0"
        >
          <Calendar
            mode="multiple"
            required
            selected={selectedDates}
            onSelect={handleSelect}
            locale={pt}
            showOutsideDays
            dayVariant={dayVariant}
            dayRounded={dayRounded}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

export { DatePickerMultiple, DatePickerRange, DatePickerSimple };
