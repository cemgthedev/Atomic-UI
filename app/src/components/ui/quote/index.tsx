import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const quoteVariants = cva("font-normal font-sans p-2", {
  variants: {
    variant: {
      default: "bg-gray-100 text-foreground",
      dark: "bg-dark text-dark-foreground",
      primary: "bg-cyan-100 text-foreground",
      secondary: "bg-violet-100 text-foreground",
      success: "bg-emerald-100 text-foreground",
      warning: "bg-yellow-100 text-foreground",
      danger: "bg-red-100 text-foreground",
    },
    size: {
      xl: "text-xl",
      lg: "text-lg",
      md: "text-md",
      sm: "text-sm",
      xs: "text-xs",
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
});

type QuoteProps = React.ComponentProps<"p"> &
  VariantProps<typeof quoteVariants>;

function Quote({
  className,
  variant = "default",
  size = "md",
  rounded = "md",
  ...props
}: QuoteProps) {
  const Comp = "p";

  return (
    <Comp
      data-slot="p"
      data-variant={variant}
      data-size={size}
      className={cn(quoteVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Quote, quoteVariants };
