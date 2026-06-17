import { Switch as SwitchPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "group/switch px-0.5 relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-disabled:cursor-not-allowed data-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-unchecked:bg-gray-200 data-checked:bg-muted",
        dark: "data-unchecked:bg-input data-checked:bg-dark",
        muted: "data-unchecked:bg-gray-200 data-checked:bg-muted opacity-60",
        primary: "data-unchecked:bg-gray-200 data-checked:bg-primary",
        secondary: "data-unchecked:bg-gray-200 data-checked:bg-secondary",
        success: "data-unchecked:bg-gray-200 data-checked:bg-success",
        warning: "data-unchecked:bg-gray-200 data-checked:bg-warning",
        danger: "data-unchecked:bg-gray-200 data-checked:bg-danger",
        "dark-bordered":
          "border-dark data-unchecked:bg-gray-200 data-checked:bg-dark data-checked:border-dark",
        "muted-bordered":
          "border-muted data-unchecked:bg-gray-200 data-checked:bg-muted data-checked:border-muted opacity-60",
        "primary-bordered":
          "border-primary data-unchecked:bg-gray-200 data-checked:bg-primary data-checked:border-primary",
        "secondary-bordered":
          "border-secondary data-unchecked:bg-gray-200 data-checked:bg-secondary data-checked:border-secondary",
        "success-bordered":
          "border-success data-unchecked:bg-gray-200 data-checked:bg-success data-checked:border-success",
        "warning-bordered":
          "border-warning data-unchecked:bg-gray-200 data-checked:bg-warning data-checked:border-warning",
        "danger-bordered":
          "border-danger data-unchecked:bg-gray-200 data-checked:bg-danger data-checked:border-danger",
        "dark-ghost":
          "bg-gray-400 border-dark data-checked:bg-dark data-checked:border-dark",
        "primary-ghost":
          "bg-cyan-200 border-cyan-800 data-checked:bg-cyan-800 data-checked:border-cyan-800",
        "secondary-ghost":
          "bg-violet-200 border-violet-800 data-checked:bg-violet-800 data-checked:border-violet-800",
        "success-ghost":
          "bg-emerald-200 border-emerald-800 data-checked:bg-emerald-800 data-checked:border-emerald-800",
        "warning-ghost":
          "bg-yellow-200 border-yellow-800 data-checked:bg-yellow-800 data-checked:border-yellow-800",
        "danger-ghost":
          "bg-red-200 border-red-800 data-checked:bg-red-800 data-checked:border-red-800",
      },
      size: {
        xl: "h-6 w-9",
        lg: "h-5.5 w-8.5",
        md: "h-5 w-8",
        sm: "h-4.5 w-7.5",
        xs: "h-4 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>;

function Switch({
  size = "md",
  variant = "default",
  className,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(switchVariants({ variant, size, className }))}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full data-unchecked:bg-background data-checked:bg-background ring-0 transition-transform data-unchecked:translate-x-0",
          // Size variants
          "group-data-[size=xl]/switch:size-5 group-data-[size=xl]/switch:data-checked:translate-x-[calc(100%-9px)]",
          "group-data-[size=lg]/switch:size-4.5 group-data-[size=lg]/switch:data-checked:translate-x-[calc(100%-7px)]",
          "group-data-[size=md]/switch:size-4 group-data-[size=md]/switch:data-checked:translate-x-[calc(100%-5px)]",
          "group-data-[size=sm]/switch:size-3.5 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-3px)]",
          "group-data-[size=xs]/switch:size-3 group-data-[size=xs]/switch:data-checked:translate-x-[calc(100%-1px)]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, switchVariants };
export type { SwitchProps };
