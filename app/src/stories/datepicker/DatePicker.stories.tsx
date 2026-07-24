import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  DatePickerMultiple,
  DatePickerRange,
  DatePickerSimple,
} from "@/components/ui";
import type { ComponentProps } from "react";

const meta = {
  title: "Components/DatePicker",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Seletores de data com modos simples, intervalo e múltiplo, com personalização de entrada e calendário.",
      },
    },
  },
  argTypes: {
    inputVariant: {
      description: "Define a aparência do input.",
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
      ],
    },
    calendarVariant: {
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
    inputRounded: {
      description: "Define o arredondamento do input.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
    calendarRounded: {
      description: "Define o arredondamento do calendário.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta;

export default meta;

type SimpleStory = StoryObj<ComponentProps<typeof DatePickerSimple>>;
type RangeStory = StoryObj<ComponentProps<typeof DatePickerRange>>;
type MultipleStory = StoryObj<ComponentProps<typeof DatePickerMultiple>>;

export const DatePickerSimpleStory: SimpleStory = {
  name: "DatePickerSimple",
  args: {
    placeholder: "Selecione uma data",
    inputVariant: "default",
    inputRounded: "md",
    calendarVariant: "default",
    calendarRounded: "md",
  },
  render: (args) => <DatePickerSimple {...args} />,
};

export const DatePickerRangeStory: RangeStory = {
  name: "DatePickerRange",
  args: {
    placeholder: "Selecione um período",
    inputVariant: "default",
    inputRounded: "md",
    calendarVariant: "default",
    calendarRounded: "md",
  },
  render: (args) => <DatePickerRange {...args} />,
};

export const DatePickerMultipleStory: MultipleStory = {
  name: "DatePickerMultiple",
  args: {
    placeholder: "Selecione datas",
    inputVariant: "default",
    inputRounded: "md",
    calendarVariant: "default",
    calendarRounded: "md",
  },
  render: (args) => <DatePickerMultiple {...args} />,
};

export const Variants: StoryObj = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <DatePickerSimple
        inputVariant="default"
        calendarVariant={"default"}
        placeholder="Padrão"
      />
      <DatePickerSimple
        inputVariant="primary"
        calendarVariant="primary"
        placeholder="Primary"
      />
      <DatePickerSimple
        inputVariant="secondary"
        calendarVariant="secondary"
        placeholder="Secondary"
      />
      <DatePickerSimple
        inputVariant="success"
        calendarVariant="success"
        placeholder="Success"
      />
      <DatePickerSimple
        inputVariant="warning"
        calendarVariant="warning"
        placeholder="Warning"
      />
      <DatePickerSimple
        inputVariant="danger"
        calendarVariant="danger"
        placeholder="Danger"
      />
    </div>
  ),
};
