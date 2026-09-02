import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/components/ui";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Recebe informações digitadas pelo usuário.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a variante visual do input.",
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
      description: "Define o tamanho do input.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    rounded: {
      description: "Define o grau de arredondamento das bordas do input.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"' },
      },
    },
    placeholder: {
      description: "Define o texto de placeholder do input.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Digite aqui",
    variant: "default",
    size: "md",
    rounded: "md",
  },
  render: ({ placeholder, ...args }) => {
    return (
      <div className="w-80">
        <Input {...args} placeholder={placeholder} />
      </div>
    );
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
      "dark",
      "muted",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const;

    return (
      <div className="flex flex-col gap-3 w-80">
        {variants.map((variant) => (
          <Input key={variant} variant={variant} placeholder={variant} />
        ))}
      </div>
    );
  },
};
