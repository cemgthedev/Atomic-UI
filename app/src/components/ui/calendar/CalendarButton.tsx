import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

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
      className={cn(
        calendarButtonVariants({ variant, size, rounded, className }),
      )}
      {...props}
    />
  );
}

export { CalendarButton, calendarButtonVariants };
export type { CalendarButtonProps };
