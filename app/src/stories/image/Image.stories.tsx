import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import {
  Image,
  ImageContent,
  ImageFallback,
  ImageOverlay,
  ImageSkeleton,
} from "@/components/ui";

type ImageStoryProps = ComponentProps<typeof Image> & {
  src?: string;
  alt?: string;
};

const meta = {
  title: "Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente para exibir imagens com suporte a skeleton, fallback e sobreposição visual.",
      },
    },
  },
  argTypes: {
    size: {
      description: "Define o tamanho da imagem.",
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      table: {
        type: {
          summary:
            '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"',
        },
      },
    },
    rounded: {
      description: "Define o grau de arredondamento das bordas da imagem.",
      control: { type: "inline-radio" },
      options: ["none", "xs", "sm", "md", "lg", "xl", "full"],
      table: {
        type: { summary: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "full"' },
      },
    },
    aspect: {
      description: "Define a proporção da imagem.",
      control: { type: "inline-radio" },
      options: ["square", "video", "portrait", "auto"],
      table: {
        type: { summary: '"square" | "video" | "portrait" | "auto"' },
      },
    },
    src: {
      description: "URL da imagem a ser exibida.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      description: "Texto alternativo para a imagem.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<ImageStoryProps>;

export default meta;
type Story = StoryObj<ImageStoryProps>;

const sampleImage =
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80";

export const Default: Story = {
  args: {
    size: "md",
    rounded: "md",
    aspect: "square",
    src: sampleImage,
    alt: "Paisagem com montanhas e céu ao amanhecer",
  },
  render: ({ src, alt, ...args }) => (
    <Image {...args}>
      <ImageSkeleton />
      <ImageContent src={src} alt={alt} />
      <ImageFallback>Imagem indisponível</ImageFallback>
    </Image>
  ),
};

export const WithOverlay: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <Image rounded="lg" aspect="video">
      <ImageSkeleton variant="primary" />
      <ImageContent src={sampleImage} alt="Paisagem com céu azul e nuvens" />
      <ImageOverlay position="bottom-left" variant="dark">
        <span className="text-sm font-semibold">Por do sol</span>
      </ImageOverlay>
    </Image>
  ),
};

export const Fallback: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: () => (
    <Image rounded="lg">
      <ImageSkeleton variant="primary" />
      <ImageContent
        src="https://example.invalid/image.jpg"
        alt="Imagem com erro de carregamento"
      />
      <ImageFallback variant="primary">
        {/**
         * Só pode haver um ImageContent, mas ImageFallback pode ser uma imagem por meio da tag <img>
         */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
          alt="Imagem com erro de carregamento"
          className="size-full object-cover"
        />
      </ImageFallback>
    </Image>
  ),
};
