import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Skeleton } from "@/components/ui";

type SkeletonStoryProps = ComponentProps<typeof Skeleton>;

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Placeholder animado utilizado para indicar carregamento de conteúdo em interfaces.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define o esquema de cores do skeleton.",
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
      description: "Define a altura do placeholder.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    rounded: {
      description: "Define o arredondamento dos cantos.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
    },
  },
} satisfies Meta<SkeletonStoryProps>;

export default meta;
type Story = StoryObj<SkeletonStoryProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
    rounded: "md",
  },
  render: (args) => (
    <div className="w-80">
      <Skeleton {...args} />
    </div>
  ),
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
      <div className="flex flex-wrap gap-3 items-end">
        {variants.map((variant) => (
          <div className="space-y-1">
            <p className="text-sm">{variant}</p>
            <Skeleton
              key={variant}
              variant={variant}
              rounded="md"
              className="w-40"
            />
          </div>
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
    const sizes = ["xl", "lg", "md", "sm", "xs"] as const;

    return (
      <div className="flex flex-col gap-3 w-80">
        {sizes.map((size) => (
          <div className="space-y-1">
            <p className="text-sm">{size}</p>
            <Skeleton key={size} size={size} rounded="md" className="w-full" />
          </div>
        ))}
      </div>
    );
  },
};
