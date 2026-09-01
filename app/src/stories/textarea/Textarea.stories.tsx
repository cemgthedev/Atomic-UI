import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "@/components/ui";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Área de texto multilinha com suporte a variantes, tamanhos, conteúdo auxiliar e ação de limpar.",
      },
    },
  },
  argTypes: {
    placeholder: {
      description: "Texto exibido quando não houver valor.",
      control: "text",
    },
    variant: {
      description: "Define a aparência visual da textarea.",
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
    rounded: {
      description: "Define o arredondamento das bordas.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    rows: {
      description: "Define o número de linhas visíveis na textarea.",
      control: { type: "number" },
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Digite sua mensagem...",
    variant: "default",
    rounded: "md",
    rows: 3,
  },
  render: ({ placeholder, ...props }) => {
    return (
      <div className="w-full max-w-2xl">
        <Textarea {...props} placeholder={placeholder} />
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
      <div className="flex flex-col gap-4 w-full max-w-xl">
        {variants.map((variant) => (
          <Textarea
            key={variant}
            variant={variant}
            placeholder={`Textarea ${variant}`}
          />
        ))}
      </div>
    );
  },
};
