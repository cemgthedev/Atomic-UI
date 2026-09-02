import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

type TooltipStoryProps = ComponentProps<typeof TooltipContent>;

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

const meta = {
  title: "Components/Tooltip",
  component: TooltipContent,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Exibe informações adicionais ao interagir.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define o estilo visual do conteúdo.",
      control: { type: "select" },
      options: variants,
    },
  },
} satisfies Meta<TooltipStoryProps>;

export default meta;
type Story = StoryObj<TooltipStoryProps>;

export const Default: Story = {
  args: { variant: "default" },
  render: ({ variant }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary">Passe o cursor</Button>
        </TooltipTrigger>
        <TooltipContent variant={variant}>
          Informação complementar
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: ({}) => (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-12 p-12">
        {variants.map((variant) => (
          <Tooltip key={variant} defaultOpen>
            <TooltipTrigger asChild>
              <Button variant={variant}>{variant}</Button>
            </TooltipTrigger>
            <TooltipContent variant={variant} side="top" sideOffset={8}>
              Tooltip {variant}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  ),
};

export const Positions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <TooltipProvider>
      <div className="grid grid-cols-2 gap-12 p-12">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side} defaultOpen>
            <TooltipTrigger asChild>
              <Button variant="secondary">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side} sideOffset={8}>
              Tooltip à {side}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  ),
};

export const WithDelay: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default">Com atraso</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={8}>
          Aparece após 300 ms
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
