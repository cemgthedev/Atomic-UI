export const datePickerSourceCode = `import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { Calendar, type CalendarButton } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import React from "react";
import type { DateRange, DayPicker } from "react-day-picker";
import { pt } from "react-day-picker/locale";

const inputDateVariants = cva(
  "flex justify-between items-center gap-2 px-3 transition-all border border-border cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground border-gray-200 hover:border-gray-400 focus-within:border-gray-900",
        dark: "bg-dark text-dark-foreground border-gray-200 hover:border-gray-400 focus-within:border-gray-200",
        muted:
          "bg-background text-foreground border-gray-200 hover:border-gray-400 focus-within:border-gray-900 opacity-60",
        primary:
          "bg-background text-primary-800 border-primary-200 hover:border-primary-400 focus-within:border-primary-900",
        secondary:
          "bg-background text-secondary-800 border-secondary-200 hover:border-secondary-400 focus-within:border-secondary-900",
        success:
          "bg-background text-success-800 border-success-200 hover:border-success-400 focus-within:border-success-900",
        warning:
          "bg-background text-warning-800 border-warning-200 hover:border-warning-400 focus-within:border-warning-900",
        danger:
          "bg-background text-danger-800 border-danger-200 hover:border-danger-400 focus-within:border-danger-900",
      },
      size: {
        xl: "min-h-13 max-h-13",
        lg: "min-h-12 max-h-12",
        md: "min-h-11 max-h-11",
        sm: "min-h-10 max-h-10",
        xs: "min-h-9 max-h-9",
      },
      rounded: {
        full: "rounded-full",
        xl: "rounded-xl",
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
        xs: "rounded-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
    },
  },
);

type InputDateProps = React.ComponentProps<"button"> &
  VariantProps<typeof inputDateVariants> & {
    asChild?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };

function InputDate({
  className,
  variant = "default",
  size = "md",
  rounded = "md",
  asChild = false,
  startContent = null,
  endContent = null,
  children,
  ...props
}: InputDateProps) {
  if (asChild)
    return (
      <div
        className={cn(inputDateVariants({ variant, size, rounded, className }))}
      >
        {startContent}

        <Slot.Root
          data-slot="button"
          data-variant={variant}
          data-size={size}
          {...props}
        >
          {children}
        </Slot.Root>

        {endContent}
      </div>
    );

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(inputDateVariants({ variant, size, rounded, className }))}
      {...props}
    >
      {startContent}

      {children}

      {endContent}
    </button>
  );
}

type DatePickerSimpleProps = Omit<
  React.ComponentProps<typeof DayPicker>,
  "mode"
> & {
  value?: Date;
  defaultValue?: Date;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  formatString?: string;
  onChange?: (date: Date | undefined) => void;

  //variants
  inputVariant?: React.ComponentProps<typeof InputDate>["variant"];
  inputRounded?: React.ComponentProps<typeof InputDate>["rounded"];
  calendarVariant?: React.ComponentProps<typeof CalendarButton>["variant"];
  calendarRounded?: React.ComponentProps<typeof CalendarButton>["rounded"];
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
      inputVariant = "default",
      inputRounded = "md",
      calendarVariant = "default",
      calendarRounded = "md",
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
          <InputDate
            ref={ref}
            disabled={disabled}
            variant={inputVariant}
            rounded={inputRounded}
            className={className}
            endContent={
              <div className="flex items-center gap-1">
                {clearable && selectedDate && (
                  <span
                    role="button"
                    onClick={handleClear}
                    className={cn(
                      "rounded-sm p-0.5 transition-colors",
                      "hover:bg-muted-foreground/10",
                    )}
                  >
                    <X className="size-4 opacity-70" />
                  </span>
                )}

                <CalendarIcon className="size-4 opacity-70" />
              </div>
            }
          >
            <span
              className={cn(
                "truncate",
                !selectedDate && "text-muted-foreground",
              )}
            >
              {selectedDate ? format(selectedDate, formatString) : placeholder}
            </span>
          </InputDate>
        </PopoverTrigger>

        <PopoverContent align="start" className="w-auto overflow-hidden p-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            locale={pt}
            showOutsideDays
            calendarButtonVariant={calendarVariant}
            calendarButtonRounded={calendarRounded}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

type DatePickerRangeProps = Omit<
  React.ComponentProps<typeof DayPicker>,
  "mode"
> & {
  value?: DateRange | undefined;
  defaultValue?: DateRange;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  formatString?: string;
  onChange?: (date: DateRange | undefined) => void;

  //variants
  inputVariant?: React.ComponentProps<typeof InputDate>["variant"];
  inputRounded?: React.ComponentProps<typeof InputDate>["rounded"];
  calendarVariant?: React.ComponentProps<typeof CalendarButton>["variant"];
  calendarRounded?: React.ComponentProps<typeof CalendarButton>["rounded"];
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
      inputVariant = "default",
      inputRounded = "md",
      calendarVariant = "default",
      calendarRounded = "md",
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
        return \`\${format(range.from, formatString)} - \${format(range.to, formatString)}\`;
      }
      return format(range.from, formatString);
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <InputDate
            ref={ref}
            disabled={disabled}
            variant={inputVariant}
            rounded={inputRounded}
            className={className}
            endContent={
              <div className="flex items-center gap-1">
                {clearable && selectedRange?.from && (
                  <span
                    role="button"
                    onClick={handleClear}
                    className={cn(
                      "rounded-sm p-0.5 transition-colors",
                      "hover:bg-muted-foreground/10",
                    )}
                  >
                    <X className="size-4 opacity-70" />
                  </span>
                )}

                <CalendarIcon className="size-4 opacity-70" />
              </div>
            }
          >
            <span
              className={cn(
                "truncate",
                !selectedRange?.from && "text-muted-foreground",
              )}
            >
              {formatRange(selectedRange)}
            </span>
          </InputDate>
        </PopoverTrigger>

        <PopoverContent align="start" className="w-auto overflow-hidden p-0">
          <Calendar
            mode="range"
            selected={selectedRange}
            onSelect={handleSelect}
            locale={pt}
            showOutsideDays
            calendarButtonVariant={calendarVariant}
            calendarButtonRounded={calendarRounded}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

type DatePickerMultipleProps = Omit<
  React.ComponentProps<typeof DayPicker>,
  "mode"
> & {
  value?: Date[];
  defaultValue?: Date[];
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
  formatString?: string;
  onChange?: (dates: Date[]) => void;

  //variants
  inputVariant?: React.ComponentProps<typeof InputDate>["variant"];
  inputRounded?: React.ComponentProps<typeof InputDate>["rounded"];
  calendarVariant?: React.ComponentProps<typeof CalendarButton>["variant"];
  calendarRounded?: React.ComponentProps<typeof CalendarButton>["rounded"];
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
      inputVariant = "default",
      inputRounded = "md",
      calendarVariant = "default",
      calendarRounded = "md",
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
      return \`\${dates.length} datas selecionadas\`;
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <InputDate
            ref={ref}
            disabled={disabled}
            variant={inputVariant}
            rounded={inputRounded}
            className={className}
            endContent={
              <div className="flex items-center gap-1">
                {clearable && selectedDates.length > 0 && (
                  <span
                    role="button"
                    onClick={handleClear}
                    className={cn(
                      "rounded-sm p-0.5 transition-colors",
                      "hover:bg-muted-foreground/10",
                    )}
                  >
                    <X className="size-4 opacity-70" />
                  </span>
                )}

                <CalendarIcon className="size-4 opacity-70" />
              </div>
            }
          >
            <span
              className={cn(
                "truncate",
                selectedDates.length === 0 && "text-muted-foreground",
              )}
            >
              {formatMultipleDates(selectedDates)}
            </span>
          </InputDate>
        </PopoverTrigger>

        <PopoverContent align="start" className="w-auto overflow-hidden p-0">
          <Calendar
            mode="multiple"
            required
            selected={selectedDates}
            onSelect={handleSelect}
            locale={pt}
            showOutsideDays
            calendarButtonVariant={calendarVariant}
            calendarButtonRounded={calendarRounded}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  },
);

export { InputDate, inputDateVariants, DatePickerSimple, DatePickerRange, DatePickerMultiple };
export type { InputDateProps, DatePickerSimpleProps, DatePickerRangeProps, DatePickerMultipleProps };
`;
