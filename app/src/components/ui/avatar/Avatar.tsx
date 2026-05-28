import { Avatar as AvatarPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
  {
    variants: {
      size: {
        xl: "w-13 h-13",
        lg: "w-12 h-12",
        md: "w-11 h-11",
        sm: "w-10 h-10",
        xs: "w-9 h-9",
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
      size: "md",
      rounded: "md",
    },
  },
);

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>;

function Avatar({
  className,
  rounded = "full",
  size = "md",
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(avatarVariants({ rounded, size, className }))}
      {...props}
    />
  );
}

export { Avatar, avatarVariants };
export type { AvatarProps };
