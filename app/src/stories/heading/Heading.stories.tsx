import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "@/components/ui";
import type { ComponentProps } from "react";

type HeadingStoryProps = ComponentProps<typeof Heading>;

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Exibe títulos e hierarquias de conteúdo.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência do título.",
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
      description: "Define o tamanho do título.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: `"xs" | "sm" | "md" | "lg" | "xl"`,
        },
      },
    },
  },
} satisfies Meta<HeadingStoryProps>;

export default meta;
type Story = StoryObj<HeadingStoryProps>;

export const Default: Story = {
  args: {
    children: "Heading principal",
    variant: "default",
    size: "md",
  },
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Heading key={size} size={size}>
          Heading {size.toUpperCase()}
        </Heading>
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
        <Heading key={variant} variant={variant}>
          {variant}
        </Heading>
      ))}
    </div>
  ),
};
