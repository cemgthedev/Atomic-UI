export const carouselExample = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

<Carousel className="w-full max-w-sm">
  <CarouselContent>
    {slides.map((slide, index) => (
      <CarouselItem key={slide}>
        <Slide label={slide} index={index} />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

export const carouselMultipleItemsExample = `<Carousel className="w-full max-w-3xl">
  <CarouselContent>
    {slides.map((slide, index) => (
      <CarouselItem key={slide} className="basis-1/2 md:basis-1/3">
        <Slide label={slide} index={index} />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

export const carouselVerticalExample = `<Carousel orientation="vertical" className="w-full max-w-xs h-fit">
  <CarouselContent className="h-44">
    {slides.slice(0, 3).map((slide, index) => (
      <CarouselItem key={slide}>
        <Slide label={slide} index={index} />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;
