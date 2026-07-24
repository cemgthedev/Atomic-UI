import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import * as React from "react";

import { Switch } from "@/components/ui";

type SwitchStoryProps = ComponentProps<typeof Switch>;

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de alternância para ligar e desligar opções com suporte a variantes, tamanhos e estados.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define o estilo visual do switch.",
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
        "dark-bordered",
        "muted-bordered",
        "primary-bordered",
        "secondary-bordered",
        "success-bordered",
        "warning-bordered",
        "danger-bordered",
        "dark-ghost",
        "primary-ghost",
        "secondary-ghost",
        "success-ghost",
        "warning-ghost",
        "danger-ghost",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Define o tamanho do switch.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    disabled: {
      description: "Define se o switch está desabilitado.",
      control: "boolean",
    },
    defaultChecked: {
      description: "Define o estado inicial do switch.",
      control: "boolean",
    },
  },
} satisfies Meta<SwitchStoryProps>;

export default meta;
type Story = StoryObj<SwitchStoryProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
    defaultChecked: false,
    disabled: false,
  },
  render: ({ defaultChecked, ...args }) => {
    const [checked, setChecked] = React.useState(Boolean(defaultChecked));

    return (
      <div className="flex items-center gap-3">
        <Switch {...args} checked={checked} onCheckedChange={setChecked} />
        <span>{checked ? "Ativo" : "Inativo"}</span>
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
      "dark-bordered",
      "muted-bordered",
      "primary-bordered",
      "secondary-bordered",
      "success-bordered",
      "warning-bordered",
      "danger-bordered",
      "dark-ghost",
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ] as const;

    return (
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <div key={variant} className="flex items-center gap-2">
            <Switch variant={variant} />
            <span className="text-sm">{variant}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => {
    const sizes = ["xl", "lg", "md", "sm", "xs"] as const;

    return (
      <div className="flex flex-col gap-4">
        {sizes.map((size) => (
          <div key={size} className="flex items-center gap-3">
            <Switch size={size} defaultChecked />
            <span className="text-sm">{size}</span>
          </div>
        ))}
      </div>
    );
  },
};
