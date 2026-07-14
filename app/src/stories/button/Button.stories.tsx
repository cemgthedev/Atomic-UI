import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { buttonVariantsCode } from "@/stories/button/Button.examples";

type ButtonStoryProps = Omit<
  ComponentProps<typeof Button>,
  "startContent" | "endContent"
> & {
  startContent?: boolean;
  endContent?: boolean;
};

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: ["theme", "asChild", "startIcon", "endIcon"],
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    startContent: {
      control: "boolean",
    },
    endContent: {
      control: "boolean",
    },
    variant: {
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
        "dark-bordered",
        "muted-bordered",
        "primary-bordered",
        "secondary-bordered",
        "success-bordered",
        "warning-bordered",
        "danger-bordered",
        "ghost",
        "muted-ghost",
        "primary-ghost",
        "secondary-ghost",
        "success-ghost",
        "warning-ghost",
        "danger-ghost",
      ],
    },

    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<ButtonStoryProps>;

export default meta;
type Story = StoryObj<ButtonStoryProps>;

export const Default: Story = {
  args: {
    children: "Button",
    startContent: false,
    endContent: false,
  },
  parameters: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
  render: ({ startContent, endContent, ...args }) => (
    <Button
      {...args}
      startContent={startContent ? <Plus size={16} /> : undefined}
      endContent={endContent ? <Plus size={16} /> : undefined}
    />
  ),
};

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      source: {
        code: buttonVariantsCode,
      },
    },
  },

  render: () => {
    const variants = [
      "default",
      "dark",
      "muted",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "dark-bordered",
      "muted-bordered",
      "primary-bordered",
      "secondary-bordered",
      "success-bordered",
      "warning-bordered",
      "danger-bordered",
      "ghost",
      "muted-ghost",
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ] as const;

    return (
      <div className="flex flex-wrap items-center gap-4">
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </div>
    );
  },
};
