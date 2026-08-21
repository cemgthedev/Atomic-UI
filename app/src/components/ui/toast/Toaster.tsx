import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Toaster as Sonner,
  toast as toastSonner,
  type ExternalToast,
  type ToasterProps,
} from "sonner";

export const toastVariants = cva("border!", {
  variants: {
    variant: {
      default: "bg-muted! text-foreground!",

      dark: "bg-dark! text-dark-foreground!",

      muted: "bg-muted! text-foreground! opacity-60!",

      primary: "bg-primary! text-primary-foreground!",

      secondary: "bg-secondary! text-secondary-foreground!",

      success: "bg-success! text-success-foreground!",

      warning: "bg-warning! text-warning-foreground!",

      danger: "bg-danger! text-danger-foreground!",

      "dark-bordered": "border-dark! text-dark!",

      "muted-bordered": "border-muted! text-muted! opacity-60!",

      "primary-bordered": "border-primary! text-primary!",

      "secondary-bordered": "border-secondary! text-secondary!",

      "success-bordered": "border-success! text-success!",

      "warning-bordered": "border-warning! text-warning!",

      "danger-bordered": "border-danger! text-danger!",

      ghost: "bg-transparent! border-transparent!",

      "dark-ghost": "bg-muted! border-dark! text-dark!",

      "primary-ghost": "bg-primary-200! border-primary-800! text-primary-800!",

      "secondary-ghost":
        "bg-secondary-200! border-secondary-800! text-secondary-800!",

      "success-ghost": "bg-success-200! border-success-800! text-success-800!",

      "warning-ghost": "bg-warning-200! border-warning-800! text-warning-800!",

      "danger-ghost": "bg-danger-200! border-danger-800! text-danger-800!",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

export type ToastVariants = VariantProps<typeof toastVariants>;

export type ToastOptions = ExternalToast & ToastVariants;

const createToastOptions = (options?: ToastOptions) => {
  const { variant, className, ...sonnerOptions } = options ?? {};

  return {
    ...sonnerOptions,
    className: cn(
      toastVariants({
        variant,
      }),
      className,
    ),
  };
};

const toast = (message: string, options?: ToastOptions) => {
  return toastSonner(message, createToastOptions(options));
};

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast: toastVariants(),
        },
      }}
      {...props}
    />
  );
};

export { toast, Toaster };
