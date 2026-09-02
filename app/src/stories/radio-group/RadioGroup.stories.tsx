import {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupItemProps,
} from "@/components/ui";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroupItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Seleciona apenas uma opção disponível.",
      },
    },
  },
  args: {
    value: "option-1",
    variant: "default",
    size: "md",
    rounded: "full",
    disabled: false,
  },

  argTypes: {
    value: {
      control: false,
      table: { disable: true },
    },

    variant: {
      control: "select",
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
    },

    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },

    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof RadioGroupItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args: RadioGroupItemProps) => (
    <RadioGroup defaultValue="option-1" className="gap-4">
      <div className="flex items-center gap-3">
        <RadioGroupItem {...args} value="option-1" />
        <Label>Primeira opção</Label>
      </div>

      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="option-2"
          variant={args.variant}
          size={args.size}
          rounded={args.rounded}
          disabled={args.disabled}
        />
        <Label>Segunda opção</Label>
      </div>

      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="option-3"
          variant={args.variant}
          size={args.size}
          rounded={args.rounded}
          disabled={args.disabled}
        />
        <Label>Terceira opção</Label>
      </div>
    </RadioGroup>
  ),
};

export const Variants: Story = {
  render: ({}) => {
    const variants: NonNullable<RadioGroupItemProps["variant"]>[] = [
      "default",
      "primary",
      "primary-bordered",
      "primary-ghost",
      "secondary",
      "secondary-bordered",
      "secondary-ghost",
      "success",
      "success-bordered",
      "success-ghost",
      "warning",
      "warning-bordered",
      "warning-ghost",
      "danger",
      "danger-bordered",
      "danger-ghost",
      "dark",
      "dark-bordered",
      "dark-ghost",
      "muted",
      "muted-bordered",
      "muted-ghost",
    ];

    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {variants.map((variant) => (
          <RadioGroup key={variant} defaultValue="selected">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="selected" variant={variant} />
              <Label>{variant}</Label>
            </div>
          </RadioGroup>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: ({}) => {
    const sizes: NonNullable<RadioGroupItemProps["size"]>[] = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
    ];

    return (
      <div className="flex flex-col gap-4">
        {sizes.map((size) => (
          <RadioGroup key={size} defaultValue={size}>
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value={size}
                size={size}
                variant="primary-bordered"
              />
              <Label>{size}</Label>
            </div>
          </RadioGroup>
        ))}
      </div>
    );
  },
};

export const Rounded: Story = {
  render: ({}) => {
    const rounds: NonNullable<RadioGroupItemProps["rounded"]>[] = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "full",
    ];

    return (
      <div className="flex flex-col gap-4">
        {rounds.map((rounded) => (
          <RadioGroup key={rounded} defaultValue={rounded}>
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value={rounded}
                rounded={rounded}
                size="lg"
                variant="primary"
              />
              <Label>{rounded}</Label>
            </div>
          </RadioGroup>
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: ({}) => (
    <RadioGroup defaultValue="option-2" className="gap-4">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" disabled />
        <Label>Desabilitado</Label>
      </div>

      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" disabled variant="primary" />
        <Label>Selecionado desabilitado</Label>
      </div>

      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-3" variant="primary" />
        <Label>Disponível</Label>
      </div>
    </RadioGroup>
  ),
};

export const FormExample: Story = {
  render: ({}) => (
    <RadioGroup defaultValue="react" className="gap-4">
      {["React", "Vue", "Angular", "Svelte"].map((framework) => (
        <div key={framework} className="flex items-center gap-3">
          <RadioGroupItem value={framework.toLowerCase()} variant="primary" />
          <Label>{framework}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};
