import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

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
          "bg-background text-cyan-800 border-cyan-200 hover:border-cyan-400 focus-within:border-cyan-900",
        secondary:
          "bg-background text-violet-800 border-violet-200 hover:border-violet-400 focus-within:border-violet-900",
        success:
          "bg-background text-emerald-800 border-emerald-200 hover:border-emerald-400 focus-within:border-emerald-900",
        warning:
          "bg-background text-yellow-800 border-yellow-200 hover:border-yellow-400 focus-within:border-yellow-900",
        danger:
          "bg-background text-red-800 border-red-200 hover:border-red-400 focus-within:border-red-900",
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

export { InputDate, inputDateVariants };
export type { InputDateProps };
