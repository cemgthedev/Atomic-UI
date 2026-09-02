import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@/components/ui";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";

type BadgeStoryProps = Omit<
  ComponentProps<typeof Badge>,
  "startContent" | "endContent"
> & {
  startContent?: boolean;
  endContent?: boolean;
};

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: ["theme", "asChild", "startIcon", "endIcon"],
      },
      description: {
        component:
          "Destaca status, categorias ou informações curtas.",
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
      description: "Define a aparência do badge.",
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
      description: "Define o tamanho do badge.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      description: "Define o arredondamento do badge.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<BadgeStoryProps>;

export default meta;
type Story = StoryObj<BadgeStoryProps>;

export const Default: Story = {
  args: {
    children: "Badge",
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
    <Badge
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
          <Badge key={variant} variant={variant} {...props}>
            {variant}
          </Badge>
        ))}
      </div>
    );
  },
};
