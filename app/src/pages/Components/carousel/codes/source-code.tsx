export const carouselSourceCode = `import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type EmbraCarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselProps = React.ComponentProps<"div"> & EmbraCarouselProps;

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => api.off("select", onSelect);
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

type CarouselContentProps = React.ComponentProps<"div">;

function CarouselContent({ className, ...props }: CarouselContentProps) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

type CarouselItemProps = React.ComponentProps<"div">;

function CarouselItem({ className, ...props }: CarouselItemProps) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

const carouselButtonVariants = cva(
  "w-fit h-fit flex justify-center items-center gap-2 transition-all cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground hover:opacity-80",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-foreground opacity-60 hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        "dark-bordered":
          "border border-dark text-dark hover:bg-dark hover:text-dark-foreground",
        "muted-bordered":
          "border border-muted text-muted opacity-60 hover:bg-muted hover:text-muted-foreground",
        "primary-bordered":
          "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        "secondary-bordered":
          "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "success-bordered":
          "border border-success text-success hover:bg-success hover:text-success-foreground",
        "warning-bordered":
          "border border-warning text-warning hover:bg-warning hover:text-warning-foreground",
        "danger-bordered":
          "border border-danger text-danger hover:bg-danger hover:text-danger-foreground",
        ghost: "bg-transparent border-transparent hover:bg-muted",
        "dark-ghost": "bg-muted border-dark text-dark hover:opacity-80",
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
        xl: "text-lg leading-lg p-3",
        lg: "text-md leading-md p-3",
        md: "text-md leading-md p-2",
        sm: "text-sm leading-sm p-2",
        xs: "text-sm leading-xs p-2",
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

type CarouselButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof carouselButtonVariants> & {
    asChild?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
  };

function CarouselButton({
  className,
  variant = "default",
  size = "md",
  rounded = "md",
  asChild = false,
  startContent = null,
  endContent = null,
  children,
  ...props
}: CarouselButtonProps) {
  if (asChild) {
    return (
      <div className={cn(carouselButtonVariants({ variant, size, rounded, className }))}>
        {startContent}
        <Slot.Root
          data-slot="button"
          data-variant={variant}
          data-size={size}
          {...props}
        >
          {children}
        </Slot.Root>
        {endContent}
      </div>
    );
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(carouselButtonVariants({ variant, size, rounded, className }))}
      {...props}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  );
}

type CarouselPreviousProps = React.ComponentProps<typeof CarouselButton>;

function CarouselPrevious({
  className,
  variant = "dark-bordered",
  size = "sm",
  ...props
}: CarouselPreviousProps) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <CarouselButton
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 -left-12 my-auto"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </CarouselButton>
  );
}

type CarouselNextProps = React.ComponentProps<typeof CarouselButton>;

function CarouselNext({
  className,
  variant = "dark-bordered",
  size = "sm",
  ...props
}: CarouselNextProps) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <CarouselButton
      data-slot="carousel-next"
      variant={variant}
      size={size}
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 -right-12 my-auto"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </CarouselButton>
  );
}

export {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
  carouselButtonVariants,
};

export type {
  CarouselApi,
  CarouselProps,
  CarouselButtonProps,
  CarouselContentProps,
  CarouselItemProps,
  CarouselNextProps,
  CarouselPreviousProps,
};`;
