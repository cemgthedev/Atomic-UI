import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Alterna entre diferentes conteúdos relacionados.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description: "Define a aba selecionada inicialmente.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Define a orientação das abas.",
    },
    activationMode: {
      control: "select",
      options: ["automatic", "manual"],
      description: "Define como as abas são ativadas.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "Define a direção de leitura das abas.",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

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
  "dark-ghost",
  "primary-ghost",
  "secondary-ghost",
  "success-ghost",
  "warning-ghost",
  "danger-ghost",
] as const;

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="overview" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="analytics">Análises</TabsTrigger>
        <TabsTrigger value="reports">Relatórios</TabsTrigger>
        <TabsTrigger value="settings">Configurações</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        Visualize suas principais métricas e atividades recentes.
      </TabsContent>

      <TabsContent value="analytics">
        Acompanhe métricas de desempenho e engajamento.
      </TabsContent>

      <TabsContent value="reports">
        Gere e visualize seus relatórios.
      </TabsContent>

      <TabsContent value="settings">Gerencie suas configurações.</TabsContent>
    </Tabs>
  ),
  args: {
    orientation: "horizontal",
    activationMode: "automatic",
  },
};

export const Variants: Story = {
  render: ({}) => (
    <Tabs defaultValue="primary" className="w-[700px]">
      <TabsList className="flex flex-wrap">
        {variants.map((variant) => (
          <TabsTrigger
            key={variant}
            value={variant}
            variant={variant}
            className="flex-none"
          >
            {variant}
          </TabsTrigger>
        ))}
      </TabsList>

      {variants.map((variant) => (
        <TabsContent key={variant} value={variant}>
          {variant}
        </TabsContent>
      ))}
    </Tabs>
  ),
};

export const Sizes: Story = {
  render: ({}) => (
    <Tabs defaultValue="md" className="w-[500px]">
      <TabsList className="flex flex-wrap">
        {sizes.map((size) => (
          <TabsTrigger key={size} value={size} size={size}>
            {size.toUpperCase()}
          </TabsTrigger>
        ))}
      </TabsList>

      {sizes.map((size) => (
        <TabsContent key={size} value={size}>
          Tamanho {size.toUpperCase()}
        </TabsContent>
      ))}
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: ({}) => (
    <Tabs defaultValue="profile" orientation="vertical" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="profile">Perfil</TabsTrigger>

        <TabsTrigger value="account">Conta</TabsTrigger>

        <TabsTrigger value="notifications">Notificações</TabsTrigger>

        <TabsTrigger value="security">Segurança</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">Informações do perfil.</TabsContent>

      <TabsContent value="account">Configurações da conta.</TabsContent>

      <TabsContent value="notifications">
        Preferências de notificações.
      </TabsContent>

      <TabsContent value="security">Configurações de segurança.</TabsContent>
    </Tabs>
  ),
};

export const Line: Story = {
  render: ({}) => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>

        <TabsTrigger value="analytics">Análises</TabsTrigger>

        <TabsTrigger value="reports">Relatórios</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">Conteúdo da visão geral.</TabsContent>

      <TabsContent value="analytics">Conteúdo das análises.</TabsContent>

      <TabsContent value="reports">Conteúdo dos relatórios.</TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: ({}) => (
    <Tabs defaultValue="available" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="available">Disponível</TabsTrigger>

        <TabsTrigger value="disabled" disabled>
          Desabilitada
        </TabsTrigger>

        <TabsTrigger value="another">Outra</TabsTrigger>
      </TabsList>

      <TabsContent value="available">Aba disponível.</TabsContent>

      <TabsContent value="disabled">Aba desabilitada.</TabsContent>

      <TabsContent value="another">Outra aba.</TabsContent>
    </Tabs>
  ),
};
