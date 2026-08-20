import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui";

type CollapsibleStoryProps = ComponentProps<typeof Collapsible>;

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Exibe ou oculta conteúdo complementar a partir de um acionador.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Define se o conteúdo inicia aberto.",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita a interação com o componente.",
    },
  },
} satisfies Meta<CollapsibleStoryProps>;

export default meta;
type Story = StoryObj<CollapsibleStoryProps>;

export const Default: Story = {
  args: { defaultOpen: false },
  render: (args) => (
    <Collapsible {...args} className="w-80">
      <CollapsibleTrigger asChild>
        <Button variant="secondary">Mostrar detalhes</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 rounded-lg border border-muted-200 p-3">
        Conteudo complementar exibido ao abrir o componente.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  render: (args) => (
    <Collapsible {...args} className="w-80">
      <CollapsibleTrigger asChild>
        <Button variant="secondary">Ocultar detalhes</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 rounded-lg border border-muted-200 p-3">
        Este conteúdo e exibido inicialmente.
      </CollapsibleContent>
    </Collapsible>
  ),
};
