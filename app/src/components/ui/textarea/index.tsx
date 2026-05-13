import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { X } from "lucide-react";

const textareaVariants = cva(
  "flex gap-2 w-full max-h-fit border overflow-hidden px-3 py-2",
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
        md: "min-h-20 max-h-40",
        sm: "min-h-10 max-h-10",
        xs: "min-h-9 max-h-9",
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

type TextareaProps = Omit<React.ComponentProps<"textarea">, "size"> &
  VariantProps<typeof textareaVariants> & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    isClearable?: boolean;
    onClear?: () => void;
  };

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
    /**
     * Alter color text for icons of lucide icons
     */
    const textareaVariantStyles = {
      default: "text-foreground",
      dark: "text-dark-foreground",
      muted: "text-foreground",
      primary: "text-cyan-800",
      secondary: "text-violet-800",
      success: "text-emerald-800",
      warning: "text-yellow-800",
      danger: "text-red-800",
    };

    const textareaVariantSizes = {
      xl: "min-h-13 max-h-13",
      lg: "min-h-12 max-h-12",
      md: "min-h-20 max-h-40",
      sm: "min-h-10 max-h-10",
      xs: "min-h-9 max-h-9",
    };

    return (
      <div className={textareaVariants({ variant, size, rounded, className })}>
        {startContent}

        <textarea
          ref={ref}
          className={cn(
            "flex w-full bg-transparent text-base focus:outline-none disabled:cursor-not-allowed resize-y",
            variant && textareaVariantStyles[variant],
            size && textareaVariantSizes[size],
          )}
          {...props}
        />

        {endContent}

        {isClearable && onClear && props.value && (
          <button
            aria-label="Limpar"
            className={cn(
              "flex items-center hover:opacity-80 transition-opacity",
              variant && textareaVariantStyles[variant],
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

export { Textarea, textareaVariants };
