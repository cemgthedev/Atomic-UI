import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Divider,
  Image,
  ImageContent,
  Label,
  Text,
} from "@/components/ui";
import { SquareArrowOutUpRight } from "lucide-react";

type TechnologyProps = {
  name: string;
  description: string;
  icon: string;
  href: string;
};

const technologies: TechnologyProps[] = [
  {
    name: "React",
    description:
      "Biblioteca para criação de interfaces de usuário baseadas em componentes reutilizáveis e reativos.",
    icon: "/react-icon.svg",
    href: "https://react.dev/",
  },
  {
    name: "TypeScript",
    description:
      "Superset do JavaScript que adiciona tipagem estática para maior segurança e produtividade.",
    icon: "/typescript-icon.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    description:
      "Framework CSS utilitário para criar interfaces modernas com classes altamente reutilizáveis.",
    icon: "/tailwindcss-icon.svg",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Tailwind Variants",
    description:
      "Biblioteca para gerenciar variantes e estados de componentes utilizando Tailwind CSS.",
    icon: "/tailwind-variants-icon.svg",
    href: "https://www.tailwind-variants.org/",
  },
  {
    name: "Shadcn/ui",
    description:
      "Coleção de componentes reutilizáveis construída sobre Radix UI e Tailwind CSS.",
    icon: "/shadcnui-icon.svg",
    href: "https://ui.shadcn.com/",
  },
];

export function Documentation() {
  return (
    <section className="min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
      {/* Introdução */}
      <div id="introducao" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Label>Introdução</Label>
          <Text className="indent-8">
            {" "}
            O AtomicUI é um Design System desenvolvido com componentes
            personalizados baseados em shadcn/ui, oferecendo acessibilidade,
            flexibilidade e uma excelente experiência para desenvolvedores.
          </Text>
        </div>

        <Divider size="xs" />

        <Image className="w-full h-90">
          <ImageContent
            src="/introduction-banner.svg"
            className="object-cover"
          />
        </Image>
      </div>

      {/* Proposta */}
      <div id="proposta" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Label>Proposta do AtomicUI</Label>
          <Text className="indent-8">
            {" "}
            O AtomicUI centraliza a estilização dos componentes do shadcn/ui por
            meio de Design Tokens, permitindo personalização consistente e
            reutilização em toda a aplicação.
          </Text>
        </div>

        <Divider size="xs" />

        <div className="flex flex-col gap-2">
          <Label size="sm">Propostas</Label>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Disponibilizar componentes prontos baseados em shadcn/ui.</li>
            <li>Centralizar a estilização com Design Tokens.</li>
            <li>Facilitar a personalização de temas e componentes.</li>
            <li>Aproveitar os recursos nativos do shadcn/ui.</li>
            <li>Garantir consistência visual entre aplicações.</li>
            <li>Reduzir o tempo de desenvolvimento.</li>
          </ul>
        </div>
      </div>

      {/* Ecossistema */}
      <div id="ecossistema" className="flex flex-col gap-3 pt-4 pb-16">
        <div className="flex flex-col gap-1">
          <Label>Ecossistema AtomicUI</Label>
          <Text className="indent-8">
            {" "}
            O AtomicUI reúne tecnologias do ecossistema React para fornecer uma
            base moderna, consistente e escalável para o desenvolvimento de
            interfaces.
          </Text>
          <Text className="indent-8">
            {" "}
            Cada tecnologia desempenha um papel específico no design system,
            contribuindo para a criação de componentes reutilizáveis,
            customizáveis e de fácil manutenção.
          </Text>
        </div>

        <Divider size="xs" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {technologies.map((tech) => (
            <div className="flex items-center gap-3 p-3 border border-muted-200 rounded-lg">
              <Avatar size="xl" rounded="xs">
                <AvatarImage
                  src={tech.icon}
                  alt={tech.name}
                  className="object-contain"
                />
                <AvatarFallback variant="dark">
                  {tech.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <Label size="xs">{tech.name}</Label>
                <Text>{tech.description}</Text>
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 items-center hover:underline"
                >
                  <SquareArrowOutUpRight size={16} />
                  <Text size="sm">Saiba mais</Text>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
