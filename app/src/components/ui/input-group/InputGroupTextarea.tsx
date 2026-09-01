import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const inputGroupTextareaVariants = cva(
  "group/textarea flex gap-2 w-full max-h-fit border overflow-hidden px-3 py-2",
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
        xl: "min-h-16",
        lg: "min-h-14",
        md: "min-h-12",
        sm: "min-h-10",
        xs: "min-h-9",
      },
      rounded: {
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

type InputGroupTextareaProps = Omit<React.ComponentProps<"textarea">, "size"> &
  VariantProps<typeof inputGroupTextareaVariants>;

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  InputGroupTextareaProps
>(
  (
    { className, variant = "default", size = "md", rounded = "md", ...props },
    ref,
  ) => {
    return (
      <textarea
        ref={ref}
        className={inputGroupTextareaVariants({
          variant,
          size,
          rounded,
          className,
        })}
        {...props}
      />
    );
  },
);

export { InputGroupTextarea, inputGroupTextareaVariants };
export type { InputGroupTextareaProps };
