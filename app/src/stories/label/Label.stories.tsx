import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "@/components/ui";
import type { ComponentProps } from "react";

type LabelStoryProps = ComponentProps<typeof Label>;

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Identifica campos e controles da interface.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência da label.",
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
      description: "Define o tamanho da label.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: `"xs" | "sm" | "md" | "lg" | "xl"`,
        },
      },
    },
  },
} satisfies Meta<LabelStoryProps>;

export default meta;
type Story = StoryObj<LabelStoryProps>;

export const Default: Story = {
  args: {
    children: "Nome completo",
    variant: "default",
    size: "md",
  },
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Label key={size} size={size}>
          Label {size.toUpperCase()}
        </Label>
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
        <Label key={variant} variant={variant}>
          {variant}
        </Label>
      ))}
    </div>
  ),
};
