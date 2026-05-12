import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const dividerVariants = cva(
  "flex-1 shrink-0 rounded-full opacity-60 border-0",
  {
    variants: {
      variant: {
        default: "bg-muted",
        dark: "bg-dark",
        muted: "bg-muted",
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        warning: "bg-warning",
        danger: "bg-danger",
      },
      size: {
        xl: "h-2",
        lg: "h-1.5",
        md: "h-1",
        sm: "h-0.5",
        xs: "h-px",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type DividerProps = React.ComponentProps<"hr"> &
  VariantProps<typeof dividerVariants> & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };

function Divider({
  className,
  variant = "default",
  size = "md",
  startContent = null,
  endContent = null,
  ...props
}: DividerProps) {
  const Comp = "hr";

  /**
   * Alter color text for icons of lucide icons
   */
  const dividerVariantStyles = {
    default: "text-muted",
    dark: "text-dark",
    muted: "text-muted",
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  };

  return (
    <div
      className={cn(
        "flex gap-1 items-center",
        variant && dividerVariantStyles[variant],
      )}
    >
      {startContent}

      <Comp
        data-slot="hr"
        data-variant={variant}
        data-size={size}
        className={cn(dividerVariants({ variant, size, className }))}
        {...props}
      />

      {endContent}
    </div>
  );
}

export { Divider, dividerVariants };
