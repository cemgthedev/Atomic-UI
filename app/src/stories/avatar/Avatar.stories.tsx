import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: ["theme", "asChild"],
      },
      description: {
        component:
          "Avatar utilizado para exibir imagens ou ícones de perfil. Suporta múltiplas variantes, tamanhos e bordas.",
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    size: {
      description: "Define o tamanho do avatar.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      description: "Define o arredondamento do avatar.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "md",
    rounded: "full",
  },
  parameters: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
  render: ({ size, rounded, ...props }) => (
    <Avatar size={size} rounded={rounded} {...props}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  args: {
    size: "md",
    rounded: "full",
  },
  parameters: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
  render: ({ size, rounded, ...props }) => (
    <Avatar size={size} rounded={rounded} {...props}>
      <AvatarImage src="https://github.com/fallback" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithBadge: Story = {
  args: {
    size: "md",
    rounded: "full",
  },
  parameters: {
    parameters: {
      size: {
        options: ["xs", "sm", "md", "lg", "xl"],
      },
      rounded: {
        options: ["xs", "sm", "md", "lg", "xl", "full"],
      },
    },
  },
  render: ({ size, rounded, ...props }) => (
    <Avatar size={size} rounded={rounded} {...props}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>

      <AvatarBadge />
    </Avatar>
  ),
};

export const Group: Story = {
  args: {
    size: "md",
    rounded: "full",
  },
  parameters: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
  render: ({ size, rounded, ...props }) => (
    <AvatarGroup>
      <Avatar size={size} rounded={rounded} {...props}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Avatar size={size} rounded={rounded} {...props}>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>

      <Avatar size={size} rounded={rounded} {...props}>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>

      <AvatarGroupCount size={size} rounded={rounded}>
        +3
      </AvatarGroupCount>
    </AvatarGroup>
  ),
};
