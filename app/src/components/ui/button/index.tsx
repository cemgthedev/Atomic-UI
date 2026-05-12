import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "w-fit flex justify-center items-center gap-2 transition-all duration-300 hover:opacity-80 border border-border",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        muted: "bg-muted text-foreground opacity-60",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
      },
      size: {
        xl: "text-xl p-3",
        lg: "text-lg px-3 py-2",
        md: "text-md p-2",
        sm: "text-sm px-2 py-1",
        xs: "text-xs p-1",
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
  startContent,
  endContent,
  children,
  ...props
}: ButtonProps) {
  if (asChild)
    return (
      <div
        className={cn(buttonVariants({ variant, size, rounded, className }))}
      >
        {!!startContent && startContent}

        <Slot.Root
          data-slot="button"
          data-variant={variant}
          data-size={size}
          {...props}
        >
          {children}
        </Slot.Root>
        
        {!!endContent && endContent}
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
