import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "lucide-react";

const checkboxVariants = cva(
  "peer relative flex shrink-0 items-center justify-center border transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
  {
    variants: {
      variant: {
        default:
          "bg-muted text-foreground border-input hover:opacity-80 aria-invalid:aria-checked:border-input",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-foreground opacity-60 hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        "dark-bordered":
          "border-dark text-dark hover:bg-dark hover:text-dark-foreground aria-invalid:aria-checked:border-dark",
        "muted-bordered":
          "border-muted text-muted opacity-60 hover:bg-muted hover:text-muted-foreground aria-invalid:aria-checked:border-muted",
        "primary-bordered":
          "border-primary text-primary hover:bg-primary hover:text-primary-foreground aria-invalid:aria-checked:border-primary",
        "secondary-bordered":
          "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground aria-invalid:aria-checked:border-secondary",
        "success-bordered":
          "border-success text-success hover:bg-success hover:text-success-foreground aria-invalid:aria-checked:border-success",
        "warning-bordered":
          "border-warning text-warning hover:bg-warning hover:text-warning-foreground aria-invalid:aria-checked:border-warning",
        "danger-bordered":
          "border-danger text-danger hover:bg-danger hover:text-danger-foreground aria-invalid:aria-checked:border-danger",
        ghost: "",
        "dark-ghost":
          "bg-muted border-dark text-dark hover:opacity-80 aria-invalid:aria-checked:border-dark",
        "muted-ghost":
          "bg-muted border-dark text-dark opacity-60 hover:opacity-80 aria-invalid:aria-checked:border-dark",
        "primary-ghost":
          "bg-cyan-200 border-cyan-800 text-cyan-800 hover:opacity-80 aria-invalid:aria-checked:border-cyan-800",
        "secondary-ghost":
          "bg-violet-200 border-violet-800 text-violet-800 hover:opacity-80 aria-invalid:aria-checked:border-violet-800",
        "success-ghost":
          "bg-emerald-200 border-emerald-800 text-emerald-800 hover:opacity-80 aria-invalid:aria-checked:border-emerald-800",
        "warning-ghost":
          "bg-yellow-200 border-yellow-800 text-yellow-800 hover:opacity-80 aria-invalid:aria-checked:border-yellow-800",
        "danger-ghost":
          "bg-red-200 border-red-800 text-red-800 hover:opacity-80 aria-invalid:aria-checked:border-red-800",
      },
      size: {
        xl: "size-8",
        lg: "size-7",
        md: "size-6",
        sm: "size-5",
        xs: "size-4",
      },
      rounded: {
        full: "rounded-full",
        xl: "rounded-xl",
        lg: "rounded-lg",
        md: "rounded-xs",
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

const checkboxIndicatorVariants = cva(
  "grid place-content-center text-current transition-none",
  {
    variants: {
      sizeIndicator: {
        xl: "[&>svg]:size-6",
        lg: "[&>svg]:size-5",
        md: "[&>svg]:size-4",
        sm: "[&>svg]:size-3",
        xs: "[&>svg]:size-2",
      },
    },
    defaultVariants: {
      sizeIndicator: "md",
    },
  },
);

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants> &
  VariantProps<typeof checkboxIndicatorVariants> & {
    icon?: React.ReactNode;
  };

function Checkbox({
  className,
  variant = "default",
  size = "md",
  sizeIndicator = "md",
  rounded = "md",
  icon,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant, size, rounded, className }))}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(checkboxIndicatorVariants({ sizeIndicator }))}
      >
        {icon ? icon : <CheckIcon />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
