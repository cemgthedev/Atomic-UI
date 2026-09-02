import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "@/components/ui";
import type { ComponentProps } from "react";

type TextStoryProps = ComponentProps<typeof Text>;

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Exibe textos e conteúdos escritos.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência do texto.",
      control: { type: "select" },
      options: [
        "default",
        "muted",
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
      description: "Define o tamanho do texto.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: `"xs" | "sm" | "md" | "lg" | "xl"`,
        },
      },
    },
  },
} satisfies Meta<TextStoryProps>;

export default meta;
type Story = StoryObj<TextStoryProps>;

export const Default: Story = {
  args: {
    children: "Este é um texto de exemplo para demonstrar o componente.",
    variant: "default",
    size: "md",
  },
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Text key={size} size={size}>
          Texto {size.toUpperCase()}
        </Text>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(
        [
          "default",
          "muted",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
        ] as const
      ).map((variant) => (
        <Text key={variant} variant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
};
