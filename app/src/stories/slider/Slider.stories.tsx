import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Slider } from "@/components/ui";

type SliderStoryProps = ComponentProps<typeof Slider>;

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente para selecionar um ou mais valores dentro de um intervalo.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      description: "Define os valores iniciais.",
      control: { type: "object" },
    },
    min: {
      description: "Define o menor valor permitido.",
      control: { type: "number" },
    },
    max: {
      description: "Define o maior valor permitido.",
      control: { type: "number" },
    },
    step: {
      description: "Define o incremento entre valores.",
      control: { type: "number" },
    },
    orientation: {
      description: "Define a orientação do slider.",
      control: { type: "inline-radio" },
      options: ["horizontal", "vertical"],
    },
    disabled: { description: "Desabilita a interação.", control: "boolean" },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    disabled: false,
  },
} satisfies Meta<SliderStoryProps>;

export default meta;
type Story = StoryObj<SliderStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
};

export const Variants: Story = {
  render: ({ ...props }) => {
    const variants = [
      "default",
      "dark",
      "muted",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const;

    return (
      <div className="flex flex-col items-center gap-4 min-w-xl">
        {variants.map((variant) => (
          <Slider key={variant} variant={variant} {...props}>
            {variant}
          </Slider>
        ))}
      </div>
    );
  },
};

export const Range: Story = {
  args: { defaultValue: [25, 75] },
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: { defaultValue: [40], orientation: "vertical" },
  render: (args) => (
    <div className="h-48">
      <Slider {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { defaultValue: [40], disabled: true },
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
};
