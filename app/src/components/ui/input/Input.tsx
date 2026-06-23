import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { X } from "lucide-react";

const inputVariants = cva(
  "group/input flex gap-2 w-full items-center border overflow-hidden px-3",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground border-gray-200 hover:border-gray-400 focus-within:border-gray-900",
        dark: "bg-dark text-dark-foreground border-gray-200 hover:border-gray-400 focus-within:border-gray-200",
        muted:
          "bg-background text-foreground border-muted-200 hover:border-muted-400 focus-within:border-muted-900 opacity-60",
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

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    isClearable?: boolean;
    onClear?: () => void;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      rounded = "md",
      startContent = null,
      endContent = null,
      isClearable,
      onClear,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={inputVariants({ variant, size, rounded, className })}>
        {startContent}

        <input
          ref={ref}
          className={cn(
            "flex h-full w-full bg-transparent text-base focus:outline-none disabled:cursor-not-allowed",
            // Variant colors
            "group-data-[variant=default]/input:text-foreground",
            "group-data-[variant=dark]/input:text-dark-foreground",
            "group-data-[variant=muted]/input:text-foreground",
            "group-data-[variant=primary]/input:text-cyan-800",
            "group-data-[variant=secondary]/input:text-violet-800",
            "group-data-[variant=success]/input:text-emerald-800",
            "group-data-[variant=warning]/input:text-yellow-800",
            "group-data-[variant=danger]/input:text-red-800",
          )}
          {...props}
        />

        {endContent}

        {isClearable && onClear && props.value && (
          <button
            aria-label="Limpar"
            className={cn(
              "flex items-center hover:opacity-80 transition-opacity",
              // Variant colors
              "group-data-[variant=default]/input:text-foreground",
              "group-data-[variant=dark]/input:text-dark-foreground",
              "group-data-[variant=muted]/input:text-foreground",
              "group-data-[variant=primary]/input:text-cyan-800",
              "group-data-[variant=secondary]/input:text-violet-800",
              "group-data-[variant=success]/input:text-emerald-800",
              "group-data-[variant=warning]/input:text-yellow-800",
              "group-data-[variant=danger]/input:text-red-800",
            )}
            type="button"
            onClick={onClear}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  },
);

export { Input, inputVariants };
export type { InputProps };
