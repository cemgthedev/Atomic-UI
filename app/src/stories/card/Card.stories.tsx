import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Image,
  ImageContent,
  ImageFallback,
  Label,
  Text,
} from "@/components/ui";
import { ExternalLinkIcon } from "lucide-react";
import type { ComponentProps } from "react";

type CardStoryProps = ComponentProps<typeof Card>;

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      controls: {
        exclude: ["theme", "asChild"],
      },
      description: {
        component: "Componente para agrupamento de informações.",
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      description: "Define a aparência do card.",
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
        "primary-ghost",
        "secondary-ghost",
        "success-ghost",
        "warning-ghost",
        "danger-ghost",
      ],
    },
    size: {
      description: "Define o tamanho do card.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      description: "Define o arredondamento do card.",
      table: {
        type: {
          summary: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
        },
      },
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<CardStoryProps>;

export default meta;
type Story = StoryObj<CardStoryProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
    rounded: "md",
  },
  parameters: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
  },
  render: ({ ...args }) => (
    <Card className="min-w-0" {...args}>
      <CardHeader>
        <Image rounded="md" aspect="square" className="w-full h-40">
          <ImageContent
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Imagem"
          />
          <ImageFallback>Imagem</ImageFallback>
        </Image>
      </CardHeader>
      <CardContent>
        <Label>Serra da Mantiqueira</Label>
        <Text>
          Uma região montanhosa conhecida por suas paisagens naturais, áreas de
          vegetação e cidades turísticas.
        </Text>
      </CardContent>
      <CardFooter>
        <Button variant="default" size="xs">
          <ExternalLinkIcon size={16} />
          <Text size="sm">Saber mais</Text>
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
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
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ] as const;

    return (
      <div className="flex flex-wrap items-center gap-4">
        {variants.map((variant) => (
          <Card variant={variant} className="min-w-0 max-w-xs" {...props}>
            <CardHeader>
              <Image rounded="md" aspect="square" className="w-full h-40">
                <ImageContent
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt="Imagem"
                />
                <ImageFallback>Imagem</ImageFallback>
              </Image>
            </CardHeader>
            <CardContent>
              <Label>Serra da Mantiqueira</Label>
              <Text>
                Uma região montanhosa conhecida por suas paisagens naturais,
                áreas de vegetação e cidades turísticas.
              </Text>
            </CardContent>
            <CardFooter>
              <Button variant={variant} size="xs">
                <ExternalLinkIcon size={16} />
                <Text size="sm">Saber mais</Text>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  },
};
