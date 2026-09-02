import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "@/components/ui";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";

type CheckboxStoryProps = Omit<ComponentProps<typeof Checkbox>, "icon"> & {
  label?: string;
  icon?: boolean;
};

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Seleciona uma ou mais opções disponíveis.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "boolean",
      description: "Exibe um ícone personalizado no checkbox.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    variant: {
      description: "Define a aparência visual do checkbox.",
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
        "muted-ghost",
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
      description: "Define o tamanho do checkbox.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    rounded: {
      description: "Define o arredondamento do checkbox.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    defaultChecked: {
      control: "boolean",
      description: "Define o estado inicial marcado.",
    },
  },
} satisfies Meta<CheckboxStoryProps>;

export default meta;
type Story = StoryObj<CheckboxStoryProps>;

const CheckboxField = ({
  label = "Aceitar termos",
  icon = false,
  ...props
}: CheckboxStoryProps) => {
  const id = props.id ?? "checkbox-story";

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        {...props}
        icon={icon ? <Plus size={16} /> : undefined}
      />
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
    </div>
  );
};

export const Default: Story = {
  args: {
    defaultChecked: true,
    variant: "default",
    size: "md",
    rounded: "md",
    icon: false,
  },
  render: (args) => <CheckboxField {...args} />,
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
      "muted-ghost",
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ] as const;

    return (
      <div className="flex flex-wrap items-center gap-4">
        {variants.map((variant) => (
          <CheckboxField
            key={variant}
            label={variant}
            variant={variant}
            defaultChecked
          />
        ))}
      </div>
    );
  },
};

export const States: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckboxField label="Padrão" defaultChecked />
      <CheckboxField label="Desabilitado" disabled />
      <CheckboxField label="Inválido" aria-invalid defaultChecked />
    </div>
  ),
};
