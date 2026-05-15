import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

type ImageContextValue = {
  loaded: boolean;
  error: boolean;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageContext = React.createContext<ImageContextValue | null>(null);

function useImageContext() {
  const context = React.useContext(ImageContext);

  if (!context) {
    throw new Error("Image components must be used inside <Image />");
  }

  return context;
}

const imageVariants = cva(
  "relative overflow-hidden select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
  {
    variants: {
      size: {
        "5xl": "w-44 h-44",
        "4xl": "w-40 h-40",
        "3xl": "w-36 h-36",
        "2xl": "w-32 h-32",
        xl: "w-28 h-28",
        lg: "w-24 h-24",
        md: "w-20 h-20",
        sm: "w-16 h-16",
        xs: "w-12 h-12",
      },
      rounded: {
        full: "rounded-full after:rounded-full",
        xl: "rounded-xl after:rounded-xl",
        lg: "rounded-lg after:rounded-lg",
        md: "rounded-md after:rounded-md",
        sm: "rounded-sm after:rounded-sm",
        xs: "rounded-xs after:rounded-xs",
        none: "rounded-none after:rounded-none",
      },
      aspect: {
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-3/4",
        auto: "",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "md",
      aspect: "square",
    },
  },
);

type ImageProps = React.ComponentProps<"div"> &
  VariantProps<typeof imageVariants>;

function Image({
  className,
  rounded = "md",
  size = "md",
  aspect = "square",
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <ImageContext.Provider
      value={{
        loaded,
        error,
        setLoaded,
        setError,
      }}
    >
      <div
        data-slot="image"
        data-loaded={loaded}
        data-error={error}
        className={cn(
          imageVariants({
            rounded,
            size,
            aspect,
            className,
          }),
        )}
        {...props}
      />
    </ImageContext.Provider>
  );
}

const imageContentVariants = cva(
  "size-full object-cover transition-opacity duration-300",
);

type ImageContentProps = React.ComponentProps<"img"> &
  VariantProps<typeof imageContentVariants>;

const ImageContent = React.forwardRef<HTMLImageElement, ImageContentProps>(
  ({ className, onLoad, onError, alt, ...props }, ref) => {
    const { loaded, error, setLoaded, setError } = useImageContext();

    return (
      <img
        ref={ref}
        data-slot="image-content"
        className={cn(
          !loaded && "opacity-0",
          loaded && "opacity-100",
          error && "hidden",
          imageContentVariants({
            className,
          }),
        )}
        onLoad={(event) => {
          setLoaded(true);

          onLoad?.(event);
        }}
        onError={(event) => {
          setError(true);

          onError?.(event);
        }}
        {...props}
      />
    );
  },
);

ImageContent.displayName = "ImageContent";

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

const imageFallbackVariants = cva(
  "flex size-full items-center justify-center bg-muted text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        dark: "bg-dark text-dark-foreground",
        muted: "bg-muted text-muted-foreground",
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

type ImageFallbackProps = React.ComponentProps<"div"> &
  VariantProps<typeof imageFallbackVariants>;

function ImageFallback({
  className,
  variant = "default",
  ...props
}: ImageFallbackProps) {
  const { error } = useImageContext();

  if (!error) {
    return null;
  }

  return (
    <div
      data-slot="image-fallback"
      className={cn(imageFallbackVariants({ variant, className }))}
      {...props}
    />
  );
}

const imageOverlayVariants = cva(
  "absolute inset-0 bg-linear-to-t to-transparent p-2 text-white",
  {
    variants: {
      variant: {
        default: "from-transparent via-transparent",
        dark: "from-dark/60 via-dark/20 text-dark-foreground",
        muted: "from-muted/60 via-muted/20 text-muted-foreground",
        primary: "from-primary/60 via-primary/20 text-primary-foreground",
        secondary:
          "from-secondary/60 via-secondary/20 text-secondary-foreground",
        success: "from-success/60 via-success/20 text-success-foreground",
        warning: "from-warning/60 via-warning/20 text-warning-foreground",
        danger: "from-danger/60 via-danger/20 text-danger-foreground",
      },
      position: {
        "top-left": "flex items-start justify-start",
        "top-right": "flex items-start justify-end",
        "bottom-left": "flex items-end justify-start",
        "bottom-right": "flex items-end justify-end",
      },
    },
  },
);

type ImageOverlayProps = React.ComponentProps<"div"> &
  VariantProps<typeof imageOverlayVariants>;

function ImageOverlay({
  position = "bottom-right",
  variant = "default",
  className,
  ...props
}: ImageOverlayProps) {
  return (
    <div
      data-slot="image-overlay"
      className={cn(imageOverlayVariants({ variant, position, className }))}
      {...props}
    />
  );
}

export {
  Image,
  ImageContent,
  imageContentVariants,
  ImageFallback,
  imageFallbackVariants,
  ImageOverlay,
  imageOverlayVariants,
  ImageSkeleton,
  imageSkeletonVariants,
  imageVariants,
};
