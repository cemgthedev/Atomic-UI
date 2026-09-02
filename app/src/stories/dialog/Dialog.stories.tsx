import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Heading,
  Text,
} from "@/components/ui";

type DialogStoryProps = ComponentProps<typeof Dialog>;

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: { description: { component: "Exibe conteúdo em uma janela modal." } },
  },
} satisfies Meta<DialogStoryProps>;

export default meta;
type Story = StoryObj<DialogStoryProps>;

export const Default: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Abrir Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Heading size="sm">Excluir projeto?</Heading>
          <Text size="sm">Esta ação não poderá ser desfeita.</Text>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="dark-ghost">Cancelar</Button>
          </DialogClose>
          <Button variant="primary">Excluir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomCloseButton: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Abrir Dialog personalizado</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <Heading size="sm">Fechamento personalizado</Heading>
          <Text size="sm">O botão de fechar padrão foi desabilitado.</Text>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button variant="primary">Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
