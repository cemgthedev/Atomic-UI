import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "w-fit h-fit flex justify-center items-center gap-2 transition-all border border-border cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground hover:opacity-80",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-foreground opacity-60 hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        "dark-bordered":
          "border-dark text-dark hover:bg-dark hover:text-dark-foreground",
        "muted-bordered":
          "border-muted text-muted opacity-60 hover:bg-muted hover:text-muted-foreground",
        "primary-bordered":
          "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        "secondary-bordered":
          "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "success-bordered":
          "border-success text-success hover:bg-success hover:text-success-foreground",
        "warning-bordered":
          "border-warning text-warning hover:bg-warning hover:text-warning-foreground",
        "danger-bordered":
          "border-danger text-danger hover:bg-danger hover:text-danger-foreground",
        ghost: "",
        "dark-ghost": "bg-muted border-dark text-dark hover:opacity-80",
        "muted-ghost":
          "bg-muted border-dark text-dark opacity-60 hover:opacity-80",
        "primary-ghost":
          "bg-cyan-200 border-cyan-800 text-cyan-800 hover:opacity-80",
        "secondary-ghost":
          "bg-violet-200 border-violet-800 text-violet-800 hover:opacity-80",
        "success-ghost":
          "bg-emerald-200 border-emerald-800 text-emerald-800 hover:opacity-80",
        "warning-ghost":
          "bg-yellow-200 border-yellow-800 text-yellow-800 hover:opacity-80",
        "danger-ghost":
          "bg-red-200 border-red-800 text-red-800 hover:opacity-80",
      },
      size: {
        xl: "text-lg leading-lg p-3",
        lg: "text-md leading-md px-2.5 py-2",
        md: "text-md leading-md p-2",
        sm: "text-sm leading-sm px-2 py-1.5",
        xs: "text-sm leading-xs p-1.5",
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

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };

function Button({
  className,
  variant = "default",
  size = "md",
  rounded = "md",
  asChild = false,
  startContent = null,
  endContent = null,
  children,
  ...props
}: ButtonProps) {
  if (asChild)
    return (
      <div
        className={cn(buttonVariants({ variant, size, rounded, className }))}
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
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    >
      {!!startContent && startContent}

      {children}

      {!!endContent && endContent}
    </button>
  );
}

export { Button, buttonVariants };
