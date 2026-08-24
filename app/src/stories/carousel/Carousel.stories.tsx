import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

type CarouselStoryProps = ComponentProps<typeof Carousel>;

const slides = ["Descobrir", "Organizar", "Criar", "Compartilhar", "Evoluir"];

function Slide({ label, index }: { label: string; index: number }) {
  return (
    <div className="flex h-48 items-center justify-center rounded-lg border border-muted bg-muted/30 p-6">
      <div className="text-center">
        <span className="text-sm text-muted-foreground">Slide {index + 1}</span>
        <p className="mt-2 text-xl font-semibold">{label}</p>
      </div>
    </div>
  );
}

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de navegação por slides baseado em Embla Carousel, com suporte a orientação horizontal e vertical.",
      },
    },
  },
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      description: "Define a direção de navegação dos slides.",
      control: { type: "inline-radio" },
      options: ["horizontal", "vertical"],
    },
    opts: { control: false, table: { disable: true } },
    plugins: { control: false, table: { disable: true } },
    setApi: { control: false, table: { disable: true } },
  },
} satisfies Meta<CarouselStoryProps>;

export default meta;
type Story = StoryObj<CarouselStoryProps>;

export const Default: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-auto w-full max-w-sm">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide}>
            <Slide label={slide} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleItems: Story = {
  name: "Múltiplos itens",
  parameters: {
    controls: { disable: true },
  },
  render: ({}) => (
    <Carousel className="mx-auto w-full max-w-3xl">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide} className="basis-1/2 md:basis-1/3">
            <Slide label={slide} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: ({}) => (
    <Carousel orientation="vertical" className="mx-auto w-full max-w-xs">
      <CarouselContent className="h-52">
        {slides.slice(0, 3).map((slide, index) => (
          <CarouselItem key={slide}>
            <Slide label={slide} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
