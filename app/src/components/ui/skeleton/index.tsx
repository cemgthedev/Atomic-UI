import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const skeletonVariants = cva("animate-pulse bg-linear-to-r", {
  variants: {
    variant: {
      default: "from-gray-200 to-gray-300",
      dark: "from-gray-600 to-gray-800",
      primary: "from-cyan-200 to-cyan-300",
      secondary: "from-violet-200 to-violet-300",
      success: "from-emerald-200 to-emerald-300",
      warning: "from-yellow-200 to-yellow-300",
      danger: "from-red-200 to-red-300",
    },
    size: {
      xl: "h-13",
      lg: "h-12",
      md: "h-11",
      sm: "h-10",
      xs: "h-9",
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

type SkeletonProps = React.ComponentProps<"div"> &
  VariantProps<typeof skeletonVariants>;

function Skeleton({
  className,
  variant = "default",
  size = "md",
  rounded = "md",
  ...props
}: SkeletonProps) {
  const Comp = "div";

  return (
    <Comp
      data-slot="div"
      data-variant={variant}
      data-size={size}
      className={cn(skeletonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Skeleton, skeletonVariants };
