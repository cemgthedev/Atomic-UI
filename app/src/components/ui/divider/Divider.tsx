import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const dividerVariants = cva(
  "peer flex-1 shrink-0 rounded-full opacity-60 border-0",
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
  VariantProps<typeof dividerVariants>;

function Divider({
  className,
  variant = "default",
  size = "md",
  ...props
}: DividerProps) {
  const Comp = "hr";

  return (
    <Comp
      data-slot="hr"
      data-variant={variant}
      data-size={size}
      className={cn(dividerVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Divider, dividerVariants };
export type { DividerProps };
