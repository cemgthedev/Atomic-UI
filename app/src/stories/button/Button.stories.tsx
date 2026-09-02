import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/ui";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";

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
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: ["theme", "asChild"],
      },
      description: {
        component:
          "Executa ações principais da interface.",
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
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    endContent: {
      control: "boolean",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    variant: {
      description: "Define a aparência do botão.",
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
      description: "Define o tamanho do botão.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      description: "Define o arredondamento do botão.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
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
    variant: "default",
    size: "md",
    rounded: "md",
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
  },

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
      "dark-bordered",
      "muted-bordered",
      "primary-bordered",
      "secondary-bordered",
      "success-bordered",
      "warning-bordered",
      "danger-bordered",
      "ghost",
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ] as const;

    return (
      <div className="flex flex-wrap items-center gap-4">
        {variants.map((variant) => (
          <Button key={variant} variant={variant} {...props}>
            {variant}
          </Button>
        ))}
      </div>
    );
  },
};
