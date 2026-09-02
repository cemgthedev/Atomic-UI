import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Button,
  Heading,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  Text,
} from "@/components/ui";

type SheetStoryProps = ComponentProps<typeof Sheet>;

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Exibe painel deslizante sobre a interface.",
      },
    },
  },
} satisfies Meta<SheetStoryProps>;

export default meta;
type Story = StoryObj<SheetStoryProps>;

export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="primary">Abrir Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Heading size="sm">Sheet simples</Heading>
          <Text size="sm">Este conteúdo é exibido em um painel lateral.</Text>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="dark-ghost">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Sides: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div className="flex flex-wrap justify-center gap-3">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="secondary">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <Heading size="sm">Sheet {side}</Heading>
              <Text size="sm">Painel aberto pelo lado {side}.</Text>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};

export const WithoutCloseButton: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="primary">Abrir Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false}>
        <SheetHeader>
          <Heading size="sm">Fechamento personalizado</Heading>
          <Text size="sm">
            O botão de fechar padrão foi desabilitado neste exemplo.
          </Text>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="dark-ghost">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
