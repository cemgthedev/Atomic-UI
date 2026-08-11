export const paginationSourceCode = `import { cn } from "@/utils/cn";

type PaginationProps = React.ComponentProps<"nav">;

function Pagination({ className, ...props }: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

const paginationButtonVariants = cva(
  "w-fit h-fit flex justify-center items-center gap-1 transition-all border border-border cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground hover:opacity-80",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-muted-foreground opacity hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        "dark-bordered":
          "border-dark text-dark hover:bg-dark hover:text-dark-foreground",
        "muted-bordered":
          "border-muted text-muted-foreground opacity-60 hover:bg-muted hover:text-muted-foreground",
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
        ghost: "bg-transparent border-transparent hover:bg-muted",
        "dark-ghost": "bg-muted border-dark text-dark hover:opacity-80",
        "muted-ghost":
          "bg-muted border-dark text-dark opacity-60 hover:opacity-80",
        "primary-ghost":
          "bg-primary-200 border-primary-800 text-primary-800 hover:opacity-80",
        "secondary-ghost":
          "bg-secondary-200 border-secondary-800 text-secondary-800 hover:opacity-80",
        "success-ghost":
          "bg-success-200 border-success-800 text-success-800 hover:opacity-80",
        "warning-ghost":
          "bg-warning-200 border-warning-800 text-warning-800 hover:opacity-80",
        "danger-ghost":
          "bg-danger-200 border-danger-800 text-danger-800 hover:opacity-80",
      },
      size: {
        xl: "h-13 min-w-13 px-3 text-lg leading-none",
        lg: "h-11 min-w-11 px-2.5 text-md leading-none",
        md: "h-10 min-w-10 px-2 text-md leading-none",
        sm: "h-9 min-w-9 px-2 text-sm leading-none",
        xs: "h-8 min-w-8 px-1.5 text-sm leading-none",
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

type PaginationButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof paginationButtonVariants> & {
    asChild?: boolean;
  };

function PaginationButton({
  className,
  variant = "default",
  size = "md",
  rounded = "md",
  asChild = false,
  ...props
}: PaginationButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        paginationButtonVariants({ variant, size, rounded, className }),
      )}
      {...props}
    />
  );
}

type PaginationContentProps = React.ComponentProps<"ul">;

function PaginationContent({ className, ...props }: PaginationContentProps) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

type PaginationEllipsisProps = React.ComponentProps<"span">;

function PaginationEllipsis({ className, ...props }: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More pages</span>
    </span>
  );
}

type PaginationItemProps = React.ComponentProps<"li">;

function PaginationItem({ ...props }: PaginationItemProps) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = Pick<
  React.ComponentProps<typeof PaginationButton>,
  "size"
> &
  VariantProps<typeof paginationButtonVariants> &
  React.ComponentProps<"a"> & {
    isActive?: boolean;
  };

function PaginationLink({
  className,
  variant,
  size = "md",
  rounded = "md",
  isActive = false,
  ...props
}: PaginationLinkProps) {
  return (
    <PaginationButton
      asChild
      variant={variant ? variant : "ghost"}
      size={size}
      rounded={rounded}
      className={cn(className)}
    >
      <a
        aria-current={isActive ? "page" : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...props}
      />
    </PaginationButton>
  );
}

type PaginationNextProps = React.ComponentProps<typeof PaginationLink> & {
  text?: string;
};

function PaginationNext({
  className,
  text = "Próximo",
  ...props
}: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Vá para a próxima página"
      className={cn("group", className)}
      {...props}
    >
      <span>{text}</span>
      <ChevronRightIcon className="group-data-[size=xs]:size-3 group-data-[size=sm]:size-4 group-data-[size=md]:size-5 group-data-[size=lg]:size-6 group-data-[size=xl]:size-7" />
    </PaginationLink>
  );
}

type PaginationPreviousProps = React.ComponentProps<typeof PaginationLink> & {
  text?: string;
};

function PaginationPrevious({
  className,
  text = "Anterior",
  ...props
}: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Vá para a página anterior"
      className={cn("group", className)}
      {...props}
    >
      <ChevronLeftIcon className="group-data-[size=xs]:size-3 group-data-[size=sm]:size-4 group-data-[size=md]:size-5 group-data-[size=lg]:size-6 group-data-[size=xl]:size-7" />
      <span>{text}</span>
    </PaginationLink>
  );
}

export {
  Pagination,
  PaginationButton,
  paginationButtonVariants,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
export type {
  PaginationButtonProps,
  PaginationContentProps,
  PaginationEllipsisProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationNextProps,
  PaginationPreviousProps,
  PaginationProps,
};
`;
