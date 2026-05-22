import { useImageContext } from "@/components/ui/image";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const imageSkeletonVariants = cva(
  "absolute inset-0 animate-pulse bg-linear-to-r",
  {
    variants: {
      variant: {
        default: "from-gray-200 to-gray-300",
        dark: "from-gray-600 to-gray-800",
        primary: "from-cyan-200 to-cyan-300",
        secondary: "from-violet-200 to-violet-300",
        success: "from-emerald-200 to-emerald-300",
        warning: "from-yellow-200 to-yellow-300",
        danger: "from-red-200 to-red-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ImageSkeletonProps = React.ComponentProps<"div"> &
  VariantProps<typeof imageSkeletonVariants>;

function ImageSkeleton({
  variant = "default",
  className,
  ...props
}: ImageSkeletonProps) {
  const { loaded, error } = useImageContext();

  if (loaded || error) {
    return null;
  }

  return (
    <div
      data-slot="image-skeleton"
      className={cn(imageSkeletonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { ImageSkeleton, imageSkeletonVariants };
export type { ImageSkeletonProps };
