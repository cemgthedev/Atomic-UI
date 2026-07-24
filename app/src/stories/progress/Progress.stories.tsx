import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import { Progress, ProgressValue } from "@/components/ui";

type ProgressStoryProps = ComponentProps<typeof Progress> & {
  valueVariant:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "dark";
};

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de barra de progresso para indicar status ou evolução de uma tarefa.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência de background da barra de progresso.",
      control: { type: "select" },
      options: ["default", "secondary", "success", "warning", "danger"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    valueVariant: {
      description: "Define a aparência da barra de progresso.",
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "dark",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Define a espessura da barra de progresso.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    rounded: {
      description: "Define o grau de arredondamento da barra de progresso.",
      control: { type: "inline-radio" },
      options: ["none", "xs", "sm", "md", "lg", "xl", "full"],
      table: {
        type: {
          summary: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
    },
    value: {
      description: "Define o grau de progresso em porcentagem (0% a 100%).",
      control: { type: "range", min: 0, max: 100, step: 1 },
      table: {
        type: {
          summary: "number",
        },
      },
    },
  },
  args: {
    value: 60,
    variant: "default",
    valueVariant: "primary",
    size: "md",
    rounded: "full",
  },
} satisfies Meta<ProgressStoryProps>;

export default meta;
type Story = StoryObj<ProgressStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <Progress {...args}>
        <ProgressValue value={args.value ?? 60} variant={args.valueVariant} />
      </Progress>
    </div>
  ),
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
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const;
    const valueVariants = [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const;

    return (
      <div className="flex w-80 flex-col gap-3">
        {variants.map((variant, index) => (
          <Progress key={variant} value={70} variant={variant}>
            <ProgressValue value={70} variant={valueVariants[index]} />
          </Progress>
        ))}
      </div>
    );
  },
};

export const Striped: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div className="w-80">
      <Progress value={70}>
        <ProgressValue value={70} variant="primary" striped animated />
      </Progress>
    </div>
  ),
};
