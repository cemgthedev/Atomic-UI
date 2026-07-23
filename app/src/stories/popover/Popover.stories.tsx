import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui";

type PopoverStoryProps = ComponentProps<typeof Popover>;

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de popover para exibir conteúdo complementar em contexto.",
      },
    },
  },
} satisfies Meta<PopoverStoryProps>;

export default meta;
type Story = StoryObj<PopoverStoryProps>;

export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({}) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">Abrir popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover simples</PopoverTitle>
          <PopoverDescription>
            Este conteúdo aparece sobre o trigger quando o popover é aberto.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};

export const Align: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({}) => (
    <div className="flex flex-wrap items-center gap-4">
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <Button variant="secondary">Align start</Button>
        </PopoverTrigger>
        <PopoverContent align="start" sideOffset={8}>
          <PopoverHeader>
            <PopoverTitle>Align start</PopoverTitle>
            <PopoverDescription>
              O conteúdo é posicionado ao início do trigger.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <Button variant="secondary">Align center</Button>
        </PopoverTrigger>
        <PopoverContent align="center" sideOffset={8}>
          <PopoverHeader>
            <PopoverTitle>Align center</PopoverTitle>
            <PopoverDescription>
              O conteúdo é centralizado em relação ao trigger.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <Button variant="secondary">Align end</Button>
        </PopoverTrigger>
        <PopoverContent align="end" sideOffset={8}>
          <PopoverHeader>
            <PopoverTitle>Align end</PopoverTitle>
            <PopoverDescription>
              O conteúdo é posicionado ao final do trigger.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
