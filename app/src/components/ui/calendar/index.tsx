import * as React from "react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker";
import { pt } from "react-day-picker/locale";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const calendarButtonVariants = cva(
  "w-fit h-fit flex justify-center items-center gap-2 transition-all border border-border cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-muted text-foreground hover:opacity-80 data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-muted data-[range-start=true]:text-muted-foreground data-[range-middle=true]:bg-gray-100 data-[range-middle=true]:text-muted-foreground data-[range-end=true]:bg-muted data-[range-end=true]:text-muted-foreground data-[today=true]:bg-muted data-[today=true]:text-muted-foreground",
        dark: "bg-dark text-dark-foreground hover:opacity-80 data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-zinc-800 data-[range-start=true]:text-gray-50 data-[range-middle=true]:bg-zinc-600 data-[range-middle=true]:text-gray-50 data-[range-end=true]:bg-zinc-800 data-[range-end=true]:text-gray-50 data-[today=true]:bg-zinc-800 data-[today=true]:text-gray-50",
        muted:
          "bg-muted text-muted-foreground opacity hover:opacity-80 data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-muted data-[range-start=true]:text-muted-foreground data-[range-middle=true]:bg-gray-100 data-[range-middle=true]:text-muted-foreground data-[range-end=true]:bg-muted data-[range-end=true]:text-muted-foreground data-[today=true]:bg-muted data-[today=true]:text-muted-foreground",
        primary:
          "bg-primary text-primary-foreground hover:opacity-80 data-[selected-single=true]:bg-cyan-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-cyan-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-cyan-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-cyan-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-cyan-400 data-[today=true]:text-zinc-800",
        secondary:
          "bg-secondary text-secondary-foreground hover:opacity-80 data-[selected-single=true]:bg-violet-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-violet-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-violet-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-violet-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-violet-400 data-[today=true]:text-zinc-800",
        success:
          "bg-success text-success-foreground hover:opacity-80 data-[selected-single=true]:bg-emerald-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-emerald-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-emerald-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-emerald-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-emerald-400 data-[today=true]:text-zinc-800",
        warning:
          "bg-warning text-warning-foreground hover:opacity-80 data-[selected-single=true]:bg-yellow-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-yellow-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-yellow-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-yellow-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-yellow-400 data-[today=true]:text-zinc-800",
        danger:
          "bg-danger text-danger-foreground hover:opacity-80 data-[selected-single=true]:bg-red-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-red-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-red-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-red-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-red-400 data-[today=true]:text-zinc-800",
        "dark-bordered":
          "border-dark text-dark hover:bg-dark hover:text-dark-foreground data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-zinc-800 data-[range-start=true]:text-gray-50 data-[range-middle=true]:bg-zinc-600 data-[range-middle=true]:text-gray-50 data-[range-end=true]:bg-zinc-800 data-[range-end=true]:text-gray-50 data-[today=true]:bg-zinc-800 data-[today=true]:text-gray-50",
        "muted-bordered":
          "border-muted text-muted-foreground opacity-60 hover:bg-muted hover:text-muted-foreground data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-muted data-[range-start=true]:text-muted-foreground data-[range-middle=true]:bg-gray-100 data-[range-middle=true]:text-muted-foreground data-[range-end=true]:bg-muted data-[range-end=true]:text-muted-foreground data-[today=true]:bg-muted data-[today=true]:text-muted-foreground",
        "primary-bordered":
          "border-primary text-primary hover:bg-primary hover:text-primary-foreground data-[selected-single=true]:bg-cyan-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-cyan-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-cyan-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-cyan-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-cyan-400 data-[today=true]:text-zinc-800",
        "secondary-bordered":
          "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground data-[selected-single=true]:bg-violet-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-violet-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-violet-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-violet-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-violet-400 data-[today=true]:text-zinc-800",
        "success-bordered":
          "border-success text-success hover:bg-success hover:text-success-foreground data-[selected-single=true]:bg-emerald-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-emerald-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-emerald-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-emerald-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-emerald-400 data-[today=true]:text-zinc-800",
        "warning-bordered":
          "border-warning text-warning hover:bg-warning hover:text-warning-foreground data-[selected-single=true]:bg-yellow-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-yellow-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-yellow-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-yellow-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-yellow-400 data-[today=true]:text-zinc-800",
        "danger-bordered":
          "border-danger text-danger hover:bg-danger hover:text-danger-foreground data-[selected-single=true]:bg-red-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-red-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-red-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-red-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-red-400 data-[today=true]:text-zinc-800",
        ghost:
          "data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-muted data-[range-start=true]:text-muted-foreground data-[range-middle=true]:bg-gray-100 data-[range-middle=true]:text-muted-foreground data-[range-end=true]:bg-muted data-[range-end=true]:text-muted-foreground data-[today=true]:bg-muted data-[today=true]:text-muted-foreground",
        "dark-ghost":
          "bg-muted border-dark text-dark hover:opacity-80 data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-zinc-800 data-[range-start=true]:text-gray-50 data-[range-middle=true]:bg-zinc-600 data-[range-middle=true]:text-gray-50 data-[range-end=true]:bg-zinc-800 data-[range-end=true]:text-gray-50 data-[today=true]:bg-zinc-800 data-[today=true]:text-gray-50",
        "muted-ghost":
          "bg-muted border-dark text-dark opacity-60 hover:opacity-80 data-[selected-single=true]:bg-muted data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-muted data-[range-start=true]:text-muted-foreground data-[range-middle=true]:bg-gray-100 data-[range-middle=true]:text-muted-foreground data-[range-end=true]:bg-muted data-[range-end=true]:text-muted-foreground data-[today=true]:bg-muted data-[today=true]:text-muted-foreground",
        "primary-ghost":
          "bg-cyan-200 border-cyan-800 text-cyan-800 hover:opacity-80 data-[selected-single=true]:bg-cyan-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-cyan-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-cyan-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-cyan-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-cyan-400 data-[today=true]:text-zinc-800",
        "secondary-ghost":
          "bg-violet-200 border-violet-800 text-violet-800 hover:opacity-80 data-[selected-single=true]:bg-violet-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-violet-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-violet-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-violet-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-violet-400 data-[today=true]:text-zinc-800",
        "success-ghost":
          "bg-emerald-200 border-emerald-800 text-emerald-800 hover:opacity-80 data-[selected-single=true]:bg-emerald-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-emerald-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-emerald-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-emerald-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-emerald-400 data-[today=true]:text-zinc-800",
        "warning-ghost":
          "bg-yellow-200 border-yellow-800 text-yellow-800 hover:opacity-80 data-[selected-single=true]:bg-yellow-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-yellow-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-yellow-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-yellow-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-yellow-400 data-[today=true]:text-zinc-800",
        "danger-ghost":
          "bg-red-200 border-red-800 text-red-800 hover:opacity-80 data-[selected-single=true]:bg-red-400 data-[selected-single=true]:text-muted-foreground data-[range-start=true]:bg-red-400 data-[range-start=true]:text-zinc-800 data-[range-middle=true]:bg-red-100 data-[range-middle=true]:text-zinc-800 data-[range-end=true]:bg-red-400 data-[range-end=true]:text-zinc-800 data-[today=true]:bg-red-400 data-[today=true]:text-zinc-800",
      },
      size: {
        xl: "text-lg leading-lg p-3",
        lg: "text-md leading-md px-2.5 py-2",
        md: "text-md leading-md p-2",
        sm: "text-sm leading-sm px-2 py-1.5",
        xs: "text-sm leading-xs p-1.5",
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

type CalendarButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof calendarButtonVariants>;

function CalendarButton({
  className,
  variant = "default",
  size = "md",
  rounded = "md",
  ...props
}: CalendarButtonProps) {
  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(calendarButtonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  calendarButtonVariant?: React.ComponentProps<
    typeof CalendarButton
  >["variant"];
  calendarButtonRounded?: React.ComponentProps<
    typeof CalendarButton
  >["rounded"];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  calendarButtonVariant = "ghost",
  calendarButtonRounded = "md",
  locale = pt,
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months,
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          calendarButtonVariants({
            variant: calendarButtonVariant,
            rounded: calendarButtonRounded,
          }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          calendarButtonVariants({
            variant: calendarButtonVariant,
            rounded: calendarButtonRounded,
          }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-sm"
            : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label,
        ),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) mx-0.25 p-0 text-center select-none",
          defaultClassNames.day,
        ),
        range_start: cn(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4",
          defaultClassNames.range_start,
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4",
          defaultClassNames.range_end,
        ),
        today: cn("rounded-(--cell-radius)", defaultClassNames.today),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled,
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton
            locale={locale}
            variant={calendarButtonVariant}
            rounded={calendarButtonRounded}
            {...props}
          />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

type CalendarDayButtonProps = React.ComponentProps<typeof DayButton> & {
  locale?: Partial<Locale>;
} & {
  variant?: React.ComponentProps<typeof CalendarButton>["variant"];
  rounded?: React.ComponentProps<typeof CalendarButton>["rounded"];
};

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale = pt,
  variant = "ghost",
  rounded = "md",
  ...props
}: CalendarDayButtonProps) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <CalendarButton
      ref={ref}
      variant={variant}
      rounded={rounded}
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-today={modifiers.today}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-l-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarButton };
