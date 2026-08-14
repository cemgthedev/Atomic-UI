export const avatarSourceCode = `import { Avatar as AvatarPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva("group/avatar relative flex shrink-0 select-none", {
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
    rounded: "full",
  },
});

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>;

function Avatar({
  size = "md",
  rounded = "full",
  className,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      data-rounded={rounded}
      className={cn(avatarVariants({ size, rounded, className }))}
      {...props}
    />
  );
}

const avatarBadgeVariants = cva(
  "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 ring-background select-none",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        dark: "bg-dark text-dark-foreground",
        muted: "bg-muted text-foreground opacity-60",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
      },
      size: {
        xl: "w-4 h-4",
        lg: "w-3 h-3",
        md: "w-2 h-2",
        sm: "w-1.5 h-1.5",
        xs: "w-1 h-1",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type AvatarBadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof avatarBadgeVariants>;

function AvatarBadge({
  className,
  variant = "success",
  size = "md",
  ...props
}: AvatarBadgeProps) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(avatarBadgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        dark: "bg-dark text-dark-foreground",
        muted: "bg-muted text-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type AvatarFallbackProps = React.ComponentProps<
  typeof AvatarPrimitive.Fallback
> &
  VariantProps<typeof avatarFallbackVariants>;

function AvatarFallback({
  variant = "default",
  className,
  ...props
}: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        avatarFallbackVariants({ variant, className }),
        // Avatar text size
        "group-data-[size=xs]/avatar:text-sm",
        "group-data-[size=sm]/avatar:text-sm",
        "group-data-[size=md]/avatar:text-md",
        "group-data-[size=lg]/avatar:text-md",
        "group-data-[size=xl]/avatar:text-md",
        // Avatar rounded variant styles
        "group-data-[rounded=xs]/avatar:rounded-xs",
        "group-data-[rounded=sm]/avatar:rounded-sm",
        "group-data-[rounded=md]/avatar:rounded-md",
        "group-data-[rounded=lg]/avatar:rounded-lg",
        "group-data-[rounded=xl]/avatar:rounded-xl",
        "group-data-[rounded=full]/avatar:rounded-full",
      )}
      {...props}
    />
  );
}

const avatarGroupVariants = cva(
  "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
);

type AvatarGroupProps = React.ComponentProps<"div"> &
  VariantProps<typeof avatarGroupVariants>;

function AvatarGroup({ className, ...props }: AvatarGroupProps) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(avatarGroupVariants({ className }))}
      {...props}
    />
  );
}

const avatarGroupCountVariants = cva(
  "relative flex shrink-0 items-center justify-center rounded-full text-sm ring-2 ring-background",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        dark: "bg-dark text-dark-foreground",
        muted: "bg-muted text-foreground opacity-60",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
      },
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
      variant: "default",
      size: "md",
      rounded: "md",
    },
  },
);

type AvatarGroupCountProps = React.ComponentProps<"div"> &
  VariantProps<typeof avatarGroupCountVariants>;

function AvatarGroupCount({
  className,
  variant = "default",
  rounded = "full",
  size = "md",
  ...props
}: AvatarGroupCountProps) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        avatarGroupCountVariants({ variant, rounded, size, className }),
      )}
      {...props}
    />
  );
}

const avatarImageVariants = cva("aspect-square size-full object-cover");

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image> &
  VariantProps<typeof avatarImageVariants>;

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        avatarImageVariants({ className }),
        // Avatar rounded variant styles
        "group-data-[rounded=xs]/avatar:rounded-xs",
        "group-data-[rounded=sm]/avatar:rounded-sm",
        "group-data-[rounded=md]/avatar:rounded-md",
        "group-data-[rounded=lg]/avatar:rounded-lg",
        "group-data-[rounded=xl]/avatar:rounded-xl",
        "group-data-[rounded=full]/avatar:rounded-full",
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarBadge,
  avatarBadgeVariants,
  AvatarFallback,
  avatarFallbackVariants,
  AvatarGroup,
  AvatarGroupCount,
  avatarGroupCountVariants,
  avatarGroupVariants,
  AvatarImage,
  avatarImageVariants,
  avatarVariants,
};
export type {
  AvatarBadgeProps,
  AvatarFallbackProps,
  AvatarGroupCountProps,
  AvatarGroupProps,
  AvatarImageProps,
  AvatarProps,
};
`;
