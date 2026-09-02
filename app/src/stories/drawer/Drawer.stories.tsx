import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Heading,
  Text,
} from "@/components/ui";

type DrawerStoryProps = ComponentProps<typeof Drawer>;

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Exibe painel deslizante lateral ou inferior.",
      },
    },
  },
} satisfies Meta<DrawerStoryProps>;

export default meta;
type Story = StoryObj<DrawerStoryProps>;

export const Default: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="primary">Abrir Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Heading size="sm">Drawer simples</Heading>
          <Text size="sm">Deslize o painel para baixo para fechá-lo.</Text>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="dark-ghost">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Directions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap justify-center gap-3">
      {(["top", "right", "bottom", "left"] as const).map((direction) => (
        <Drawer key={direction} direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="secondary">{direction}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <Heading size="sm">Drawer {direction}</Heading>
              <Text size="sm">Painel aberto pela direção {direction}.</Text>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
};

export const NonModal: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Drawer direction="right" modal={false}>
      <DrawerTrigger asChild>
        <Button variant="primary">Abrir Drawer não modal</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Heading size="sm">Drawer não modal</Heading>
          <Text size="sm">O conteúdo ao fundo permanece interativo.</Text>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="dark-ghost">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
