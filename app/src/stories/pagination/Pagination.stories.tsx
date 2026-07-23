import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui";

type PaginationStoryProps = ComponentProps<typeof Pagination> & {
  variant:
    | "default"
    | "dark"
    | "muted"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "dark-bordered"
    | "muted-bordered"
    | "primary-bordered"
    | "secondary-bordered"
    | "success-bordered"
    | "warning-bordered"
    | "danger-bordered"
    | "ghost"
    | "dark-ghost"
    | "muted-ghost"
    | "primary-ghost"
    | "secondary-ghost"
    | "success-ghost"
    | "warning-ghost"
    | "danger-ghost";
  size: "xl" | "lg" | "md" | "sm" | "xs";
  rounded: "full" | "xl" | "lg" | "md" | "sm" | "xs";
};

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Componente de paginação para navegar entre páginas de conteúdo.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a aparência dos botões de paginação.",
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
      description: "Define o tamanho dos botões de paginação.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
    },
    rounded: {
      description: "Define o grau de arredondamento dos botões de paginação.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"' },
      },
    },
  },
  args: {
    variant: "ghost",
    size: "md",
    rounded: "md",
  },
} satisfies Meta<PaginationStoryProps>;

export default meta;
type Story = StoryObj<PaginationStoryProps>;

export const Default: Story = {
  args: {
    variant: "ghost",
    size: "md",
    rounded: "md",
  },
  render: ({ variant, size, rounded }) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            variant={variant}
            size={size}
            rounded={rounded}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          >
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Simple: Story = {
  args: {
    variant: "ghost",
    size: "md",
    rounded: "md",
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({ variant, size, rounded }) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            variant={variant}
            size={size}
            rounded={rounded}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          >
            3
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithButtons: Story = {
  args: {
    variant: "ghost",
    size: "md",
    rounded: "md",
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({ variant, size, rounded }) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            text="Voltar"
            variant={variant}
            size={size}
            rounded={rounded}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            variant={variant}
            size={size}
            rounded={rounded}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            variant={variant}
            size={size}
            rounded={rounded}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            text="Próximo"
            variant={variant}
            size={size}
            rounded={rounded}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const Variants: Story = {
  args: {
    variant: "ghost",
    size: "md",
    rounded: "md",
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({ size, rounded }) => {
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
      "muted-ghost",
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ] as const;

    return (
      <div className="flex flex-col gap-3">
        {variants.map((variant) => (
          <Pagination key={variant}>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  text="Voltar"
                  variant={variant}
                  size={size}
                  rounded={rounded}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  variant={variant}
                  size={size}
                  rounded={rounded}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  text="Próximo"
                  variant={variant}
                  size={size}
                  rounded={rounded}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ))}
      </div>
    );
  },
};
