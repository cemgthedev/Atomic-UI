import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

type SelectStoryProps = ComponentProps<typeof Select> & {
  variant?: ComponentProps<typeof SelectTrigger>["variant"];
  size?: ComponentProps<typeof SelectTrigger>["size"];
  rounded?: ComponentProps<typeof SelectTrigger>["rounded"];
  placeholder?: string;
};

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Seleciona uma opção em lista.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a variante visual do trigger.",
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

    size: {
      description: "Define o tamanho do campo.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      description: "Define o arredondamento do campo.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<SelectStoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option-1",
  },
  render: ({ defaultValue, ...args }) => (
    <Select defaultValue={defaultValue ?? "option-1"}>
      <SelectTrigger {...args} className="w-[180px]">
        <SelectValue placeholder={"Selecione..."} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Opções</SelectLabel>
          <SelectItem value="option-1">Opção 1</SelectItem>
          <SelectItem value="option-2">Opção 2</SelectItem>
          <SelectItem value="option-3">Opção 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Variants: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({}) => (
    <div className="flex flex-wrap gap-4">
      {[
        "default",
        "dark",
        "muted",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ].map((variant) => (
        <Select key={variant} defaultValue={variant}>
          <SelectTrigger variant={variant as any} className="w-[180px]">
            <SelectValue placeholder={variant} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={variant}>{variant}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({}) => (
    <div className="flex flex-wrap gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Select key={size} defaultValue="option-1">
          <SelectTrigger size={size} className="w-[180px]">
            <SelectValue placeholder={size} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="option-1">Opção 1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
};

export const Rounds: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({}) => (
    <div className="flex flex-wrap gap-4">
      {(["xs", "sm", "md", "lg", "xl", "full"] as const).map((rounded) => (
        <Select key={rounded} defaultValue="option-1">
          <SelectTrigger rounded={rounded} className="w-[180px]">
            <SelectValue placeholder={rounded} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="option-1">Opção 1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </div>
  ),
};
