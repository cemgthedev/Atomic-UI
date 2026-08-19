import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "@/components/ui";
import type { ComponentProps } from "react";

type SeparatorStoryProps = ComponentProps<typeof Separator>;

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Linha divisória para separar conteúdos em blocos visuais.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência do divisor.",
      control: { type: "select" },
      options: [
        "default",
        "dark",
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
      description: "Define a espessura do divisor.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: `"xs" | "sm" | "md" | "lg" | "xl"`,
        },
      },
    },
  },
} satisfies Meta<SeparatorStoryProps>;

export default meta;
type Story = StoryObj<SeparatorStoryProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
  },
  render: (args) => (
    <div className="w-full space-y-3">
      <p className="text-sm text-muted-foreground">Conteúdo acima</p>
      <Separator {...args} />
      <p className="text-sm text-muted-foreground">Conteúdo abaixo</p>
    </div>
  ),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="w-full space-y-4">
      {(
        [
          "default",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
        ] as const
      ).map((variant) => (
        <div key={variant} className="space-y-2">
          <p className="text-sm capitalize">{variant}</p>
          <Separator variant={variant} />
        </div>
      ))}
    </div>
  ),
};
