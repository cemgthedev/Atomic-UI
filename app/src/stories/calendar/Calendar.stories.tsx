import type { Meta, StoryObj } from "@storybook/react-vite";

import { Calendar } from "@/components/ui";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: ["theme", "captionLayout", "locale"],
      },
      description: {
        component:
          "Calendário utilizado para selecionar datas. Suporta múltiplas variantes, tamanhos e bordas.",
      },
    },
  },
  argTypes: {
    captionLayout: {
      table: {
        disable: true,
      },
    },
    locale: {
      table: {
        disable: true,
      },
    },
    calendarButtonVariant: {
      description: "Define a aparência do calendário.",
      table: {
        type: {
          summary: "string",
        },
      },
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
        "ghost",
        "muted-ghost",
        "primary-ghost",
        "secondary-ghost",
        "success-ghost",
        "warning-ghost",
        "danger-ghost",
      ],
    },

    calendarButtonRounded: {
      description: "Define o arredondamento dos botões.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },

    showOutsideDays: {
      description: "Define se os dias fora do mês atual devem ser exibidos.",
      control: "boolean",
      table: {
        type: {
          summary: "Boolean",
        },
      },
    },

    mode: {
      description: "Define o modo de exibição do calendário.",
      table: {
        type: {
          summary: '"single" | "multiple" | "range"',
        },
      },
      control: { type: "inline-radio" },
      options: ["single", "multiple", "range"],
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: "single",
    showOutsideDays: true,
    calendarButtonRounded: "md",
    calendarButtonVariant: "default",
  },
  parameters: {
    calendarButtonRounded: {
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
  render: ({ ...args }) => <Calendar {...args} />,
};

export const Variants: Story = {
  args: {
    mode: "single",
    showOutsideDays: true,
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({ ...props }) => {
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
      "muted-ghost",
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ] as const;

    return (
      <div className="flex flex-wrap items-center gap-4">
        {variants.map((calendarButtonVariant) => (
          <Calendar
            key={calendarButtonVariant}
            calendarButtonVariant={calendarButtonVariant}
            {...props}
          />
        ))}
      </div>
    );
  },
};
