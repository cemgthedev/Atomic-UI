export const separatorSourceCode = `import { cva, type VariantProps } from "class-variance-authority";
import { Separator as SeparatorPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/utils/cn";

const separatorVariants = cva(
  "peer w-full rounded-full opacity-60 border-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
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

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>;

function Separator({
  className,
  variant = "default",
  orientation = "horizontal",
  size = "md",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="hr"
      data-variant={variant}
      orientation={orientation}
      data-size={size}
      className={cn(separatorVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Separator, separatorVariants };
export type { SeparatorProps };
`;
