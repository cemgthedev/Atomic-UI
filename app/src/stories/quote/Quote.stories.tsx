import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Quote } from "@/components/ui";

type QuoteStoryProps = ComponentProps<typeof Quote>;

const meta = {
  title: "Components/Quote",
  component: Quote,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Bloco de citação para exibir trechos de texto com estilo, variantes e tamanhos.",
      },
    },
  },
  argTypes: {
    children: {
      description: "Texto exibido dentro do bloco de citação.",
      control: "text",
    },
    variant: {
      description: "Define o esquema de cores do componente.",
      control: { type: "select" },
      options: [
        "default",
        "dark",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Define o tamanho do texto na citação.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    rounded: {
      description: "Define o arredondamento das bordas.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
    },
  },
} satisfies Meta<QuoteStoryProps>;

export default meta;
type Story = StoryObj<QuoteStoryProps>;

export const Default: Story = {
  args: {
    children: "“A simplicidade é o último grau de sofisticação.”",
    variant: "default",
    size: "md",
    rounded: "md",
  },
};

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({}) => {
    const variants = [
      "default",
      "dark",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const;

    return (
      <div className="flex flex-col gap-3 max-w-xl">
        {variants.map((variant) => (
          <Quote key={variant} variant={variant} rounded="md">
            Exemplo de citação em <strong>{variant}</strong>.
          </Quote>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({}) => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <div className="flex flex-col gap-3 max-w-xl">
        {sizes.map((size) => (
          <Quote key={size} size={size} rounded="md">
            Citação de tamanho <strong>{size}</strong>.
          </Quote>
        ))}
      </div>
    );
  },
};
