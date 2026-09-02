import type { Meta, StoryObj } from "@storybook/react-vite";

import { Loader } from "@/components/ui";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";

type LoaderStoryProps = Omit<ComponentProps<typeof Loader>, "icon"> & {
  icon?: boolean;
};

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Indica carregamento de conteúdos ou ações.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência do loader.",
      control: { type: "select" },
      options: [
        "default",
        "muted",
        "dark",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    size: {
      description: "Define o tamanho do loader.",
      control: { type: "inline-radio" },
      options: ["default", "xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: `"default" | "xs" | "sm" | "md" | "lg" | "xl"`,
        },
      },
    },
    icon: {
      description: "Exibe um ícone personalizado no loader.",
      control: "boolean",
      table: {
        type: {
          detail:
            'O ícone deve ter className="w-full h-full" para se ajustar corretamente ao tamanho do loader.',
          summary: "ReactNode",
        },
      },
    },
  },
} satisfies Meta<LoaderStoryProps>;

export default meta;
type Story = StoryObj<LoaderStoryProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    icon: false,
  },
  render: ({ icon, ...args }) => (
    <Loader
      icon={icon ? <Plus className="w-full h-full" /> : undefined}
      {...args}
    />
  ),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {(
        [
          "default",
          "muted",
          "dark",
          "primary",
          "secondary",
          "success",
          "warning",
          "danger",
        ] as const
      ).map((variant) => (
        <Loader key={variant} variant={variant} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Loader key={size} size={size} />
      ))}
    </div>
  ),
};
