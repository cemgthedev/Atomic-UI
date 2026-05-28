import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const messageVariants = cva("font-normal font-sans", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
    },
    size: {
      xl: "text-xl",
      lg: "text-lg",
      md: "text-md",
      sm: "text-sm",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type MessageProps = React.ComponentProps<"p"> &
  VariantProps<typeof messageVariants> & {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };

function Message({
  className,
  variant = "default",
  size = "sm",
  startContent = null,
  endContent = null,
  children,
  ...props
}: MessageProps) {
  const Comp = "p";

  /**
   * Alter color text for icons of lucide icons
   */
  const messageVariantStyles = {
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
        "flex gap-1 items-center w-fit",
        variant && messageVariantStyles[variant],
      )}
    >
      {startContent}

      <Comp
        data-slot="p"
        data-variant={variant}
        data-size={size}
        className={cn(messageVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Comp>

      {endContent}
    </div>
  );
}

export { Message, messageVariants };
export type { MessageProps };
