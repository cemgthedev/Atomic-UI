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

const avatarImageVariants = cva(
  "aspect-square size-full rounded-full object-cover",
);

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image> &
  VariantProps<typeof avatarImageVariants>;

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(avatarImageVariants({ className }))}
      {...props}
    />
  );
}

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full text-sm group-data-[size=sm]/avatar:text-xs",
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
      className={cn(avatarFallbackVariants({ variant, className }))}
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
  "relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
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
