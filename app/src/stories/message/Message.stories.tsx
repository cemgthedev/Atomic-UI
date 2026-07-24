import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Message } from "@/components/ui";

type MessageStoryProps = ComponentProps<typeof Message>;

const meta = {
  title: "Components/Message",
  component: Message,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de texto para mensagens curtas, avisos e conteúdo informativo.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência da mensagem.",
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
      description: "Define o tamanho da mensagem.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    children: {
      description: "Define o conteúdo da mensagem.",
      control: "text",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} satisfies Meta<MessageStoryProps>;

export default meta;
type Story = StoryObj<MessageStoryProps>;

export const Default: Story = {
  args: {
    children: "Esta é uma mensagem de exemplo.",
    variant: "default",
    size: "md",
  },
};

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => {
    const variants = [
      "default",
      "muted",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const;

    return (
      <div className="flex flex-col gap-3">
        {variants.map((variant) => (
          <Message key={variant} variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} message
          </Message>
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
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <div className="flex flex-col gap-2">
        {sizes.map((size) => (
          <Message key={size} size={size}>
            Mensagem com tamanho {size}
          </Message>
        ))}
      </div>
    );
  },
};
