import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/components/ui";
import React from "react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Campo de entrada versátil com suporte a variantes, ícones, tamanho e ação de limpar.",
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
    isClearable: {
      description: "Define se o input possui ação de limpar.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
    onClear: {
      description: "Função chamada quando a ação de limpar é acionada.",
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
    isClearable: false,
  },
  render: ({ isClearable, placeholder, ...args }) => {
    const [value, setValue] = React.useState("Texto de exemplo");

    function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);
    }

    function handleClear() {
      setValue("");
    }

    return (
      <div className="w-80">
        <Input
          {...args}
          placeholder={placeholder}
          value={value}
          onChange={onChangeValue}
          isClearable={isClearable}
          onClear={handleClear}
        />
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

export const WithIcons: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div className="w-80 flex flex-col gap-3">
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" type="password" />
    </div>
  ),
};

export const Clearable: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => {
    const [value, setValue] = React.useState("Texto de exemplo");

    function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);
    }

    function handleClear() {
      setValue("");
    }

    return (
      <div className="w-80">
        <Input
          placeholder="Digite e limpe"
          value={value}
          onChange={onChangeValue}
          isClearable
          onClear={handleClear}
        />
      </div>
    );
  },
};
