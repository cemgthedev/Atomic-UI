export const cardSourceCode = `import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "group/card flex flex-col overflow-hidden border border-muted-200",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        dark: "bg-dark text-dark-foreground",
        muted: "bg-muted text-foreground opacity-80",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
        "dark-bordered":
          "border-dark text-dark hover:bg-dark hover:text-dark-foreground",
        "muted-bordered":
          "border-muted text-muted opacity-80 hover:bg-muted hover:text-muted-foreground",
        "primary-bordered":
          "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        "secondary-bordered":
          "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "success-bordered":
          "border-success text-success hover:bg-success hover:text-success-foreground",
        "warning-bordered":
          "border-warning text-warning hover:bg-warning hover:text-warning-foreground",
        "danger-bordered": "border-danger text-danger",
        ghost: "bg-transparent border-transparent",
        "dark-ghost": "bg-muted border-dark text-dark",
        "primary-ghost": "bg-primary-200 border-primary-800 text-primary-800",
        "secondary-ghost":
          "bg-secondary-200 border-secondary-800 text-secondary-800",
        "success-ghost": "bg-success-200 border-success-800 text-success-800",
        "warning-ghost": "bg-warning-200 border-warning-800 text-warning-800",
        "danger-ghost": "bg-danger-200 border-danger-800 text-danger-800",
      },
      size: {
        xl: "p-8 gap-8",
        lg: "p-6 gap-6",
        md: "p-4 gap-4",
        sm: "p-2 gap-2",
        xs: "p-1 gap-1",
        none: "",
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

type CardProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants>;

function Card({ variant, size, rounded, className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

const cardContentVariants = cva("group/card-content flex flex-col", {
  variants: {
    size: {
      xl: "p-8 gap-8",
      lg: "p-6 gap-6",
      md: "p-4 gap-4",
      sm: "p-2 gap-2",
      xs: "p-1 gap-1",
      none: "",
    },
    rounded: {
      full: "rounded-full",
      xl: "rounded-xl",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      xs: "rounded-xs",
      none: "",
    },
  },
  defaultVariants: {
    size: "none",
    rounded: "none",
  },
});

type CardContentProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardContentVariants>;

function CardContent({ size, rounded, className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariants({ size, rounded, className }))}
      {...props}
    />
  );
}

const cardFooterVariants = cva("group/card-footer flex flex-col", {
  variants: {
    size: {
      xl: "p-8 gap-8",
      lg: "p-6 gap-6",
      md: "p-4 gap-4",
      sm: "p-2 gap-2",
      xs: "p-1 gap-1",
      none: "",
    },
    rounded: {
      full: "rounded-full",
      xl: "rounded-xl",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      xs: "rounded-xs",
      none: "",
    },
  },
  defaultVariants: {
    size: "none",
    rounded: "none",
  },
});

type CardFooterProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardFooterVariants>;

function CardFooter({ size, rounded, className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(cardFooterVariants({ size, rounded, className }))}
      {...props}
    />
  );
}

const cardHeaderVariants = cva("group/card-header flex flex-col", {
  variants: {
    size: {
      xl: "p-8 gap-8",
      lg: "p-6 gap-6",
      md: "p-4 gap-4",
      sm: "p-2 gap-2",
      xs: "p-1 gap-1",
      none: "",
    },
    rounded: {
      full: "rounded-full",
      xl: "rounded-xl",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      xs: "rounded-xs",
      none: "",
    },
  },
  defaultVariants: {
    size: "none",
    rounded: "none",
  },
});

type CardHeaderProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardHeaderVariants>;

function CardHeader({ size, rounded, className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariants({ size, rounded, className }))}
      {...props}
    />
  );
}

export {
  Card,
  CardContent,
  cardContentVariants,
  CardFooter,
  cardFooterVariants,
  CardHeader,
  cardHeaderVariants,
  cardVariants,
};
export type { CardContentProps, CardFooterProps, CardHeaderProps, CardProps };
`;
