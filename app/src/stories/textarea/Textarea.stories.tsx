import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import * as React from "react";

import { Textarea } from "@/components/ui";
import { Plus } from "lucide-react";

type TextareaStoryProps = Omit<ComponentProps<typeof Textarea>, "onClear"> & {
  startContent?: boolean;
  endContent?: boolean;
};

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
    startContent: {
      description: "Exibe um ícone ou conteúdo no início da textarea.",
      control: "boolean",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    endContent: {
      description: "Exibe um ícone ou conteúdo ao final da textarea.",
      control: "boolean",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    isClearable: {
      description: "Permite limpar o conteúdo digitado.",
      control: "boolean",
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
    size: {
      description: "Define o tamanho da textarea.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
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
  },
} satisfies Meta<TextareaStoryProps>;

export default meta;
type Story = StoryObj<TextareaStoryProps>;

const TextareaWrapper = ({
  startContent,
  endContent,
  isClearable,
  placeholder,
  ...props
}: TextareaStoryProps) => {
  const [value, setValue] = React.useState(
    "Escreva aqui um texto de exemplo para testar o textarea.",
  );

  return (
    <div className="w-full max-w-2xl">
      <Textarea
        {...props}
        value={value}
        placeholder={placeholder}
        startContent={startContent ? <Plus className="h-4 w-4" /> : null}
        endContent={endContent ? <Plus className="h-4 w-4" /> : null}
        isClearable={isClearable}
        onClear={() => setValue("")}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    placeholder: "Digite sua mensagem...",
    variant: "default",
    size: "md",
    rounded: "md",
    startContent: false,
    endContent: false,
    isClearable: false,
  },
  render: ({
    placeholder,
    startContent,
    endContent,
    isClearable,
    ...props
  }) => {
    const [value, setValue] = React.useState(
      "Escreva aqui um texto de exemplo para testar o textarea.",
    );

    return (
      <div className="w-full max-w-2xl">
        <Textarea
          {...props}
          value={value}
          placeholder={placeholder}
          startContent={startContent ? <Plus className="h-4 w-4" /> : null}
          endContent={endContent ? <Plus className="h-4 w-4" /> : null}
          isClearable={isClearable}
          onClear={() => setValue("")}
          onChange={(event) => setValue(event.target.value)}
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
      <div className="flex flex-col gap-4 w-full max-w-xl">
        {variants.map((variant) => (
          <TextareaWrapper
            key={variant}
            variant={variant}
            placeholder={`Textarea ${variant}`}
          />
        ))}
      </div>
    );
  },
};

export const Clearable: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <TextareaWrapper isClearable placeholder="Digite e use o botão Limpar" />
  ),
};
