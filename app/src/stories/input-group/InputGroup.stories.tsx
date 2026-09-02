import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui";

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Agrupa entrada com elementos auxiliares.",
      },
    },
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    variant: {
      description: "Define a variante visual do grupo.",
      control: { type: "inline-radio" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    rounded: {
      description: "Define o arredondamento do grupo.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    variant: "default",
    rounded: "md",
  },
  render: (args) => (
    <div className="w-96">
      <InputGroup {...args}>
        <InputGroupAddon>@</InputGroupAddon>
        <InputGroupInput placeholder="usuario" />
        <InputGroupButton variant="primary">Acessar</InputGroupButton>
      </InputGroup>
    </div>
  ),
};

export const WithTextAndButton: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      <InputGroup>
        <InputGroupAddon>R$</InputGroupAddon>
        <InputGroupInput placeholder="0,00" />
        <InputGroupText>BRL</InputGroupText>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>Buscar</InputGroupAddon>
        <InputGroupInput placeholder="Pesquisar" />
        <InputGroupButton variant="secondary">Ir</InputGroupButton>
      </InputGroup>
    </div>
  ),
};

export const TextareaGroup: Story = {
  render: () => (
    <div className="w-[28rem]">
      <InputGroup>
        <InputGroupAddon align="block-start">Descrição</InputGroupAddon>
        <InputGroupTextarea rows={4} placeholder="Escreva sua mensagem" />
      </InputGroup>
    </div>
  ),
};
