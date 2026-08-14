import { urls } from "@/constants/urls";
import type { UrlProps } from "@/types/urls";
import { BookOpen, Component, Download } from "lucide-react";

export const webUrls: UrlProps[] = [
  {
    name: "Documentação",
    icon: <BookOpen size={20} />,
    href: `/${urls.documentation}#introducao`,
    sub: [
      {
        name: "Introdução",
        href: `/${urls.documentation}#introducao`,
      },
      {
        name: "Proposta",
        href: `/${urls.documentation}#proposta`,
      },
      {
        name: "Ecossistema",
        href: `/${urls.documentation}#ecossistema`,
      },
    ],
  },
  {
    name: "Instalação",
    icon: <Download size={20} />,
    href: `/${urls.documentation}/${urls.installation}#instalacao`,
    sub: [
      {
        name: "Instalação",
        href: `/${urls.documentation}/${urls.installation}#instalacao`,
      },
      {
        name: "Pré-requisitos",
        href: `/${urls.documentation}/${urls.installation}#pre-requisitos`,
      },
      {
        name: "Criando projeto",
        href: `/${urls.documentation}/${urls.installation}#criando-projeto`,
      },
      {
        name: "Dependências",
        href: `/${urls.documentation}/${urls.installation}#dependencias`,
      },
      {
        name: "Tailwind CSS",
        href: `/${urls.documentation}/${urls.installation}#tailwindcss`,
      },
      {
        name: "Aliases",
        href: `/${urls.documentation}/${urls.installation}#aliases`,
      },
    ],
  },
  {
    name: "Componentes",
    icon: <Component size={20} />,
    href: `/${urls.components}#todos`,
    sub: [
      {
        name: "Todos",
        href: `/${urls.components}#todos`,
      },
      {
        name: "Avatar",
        href: `/${urls.components}/${urls.avatar}`,
      },
      {
        name: "Button",
        href: `/${urls.components}/${urls.button}`,
      },
      {
        name: "Calendar",
        href: `/${urls.components}/${urls.calendar}`,
      },
      {
        name: "Checkbox",
        href: `/${urls.components}/${urls.checkbox}`,
      },
      {
        name: "Datepicker",
        href: `/${urls.components}/${urls.datepicker}`,
      },
      {
        name: "Badge",
        href: `/${urls.components}/${urls.badge}`,
      },
      {
        name: "Divider",
        href: `/${urls.components}/${urls.divider}`,
      },
      {
        name: "Heading",
        href: `/${urls.components}/${urls.heading}`,
      },
      {
        name: "Image",
        href: `/${urls.components}/${urls.image}`,
      },
      {
        name: "Input",
        href: `/${urls.components}/${urls.input}`,
      },
      {
        name: "Label",
        href: `/${urls.components}/${urls.label}`,
      },
      {
        name: "Loader",
        href: `/${urls.components}/${urls.loader}`,
      },
      {
        name: "Message",
        href: `/${urls.components}/${urls.message}`,
      },
      {
        name: "Pagination",
        href: `/${urls.components}/${urls.pagination}`,
      },
      {
        name: "Popover",
        href: `/${urls.components}/${urls.popover}`,
      },
      {
        name: "Progress",
        href: `/${urls.components}/${urls.progress}`,
      },
      {
        name: "Skeleton",
        href: `/${urls.components}/${urls.skeleton}`,
      },
      {
        name: "Switch",
        href: `/${urls.components}/${urls.switch}`,
      },
      {
        name: "Text",
        href: `/${urls.components}/${urls.text}`,
      },
      {
        name: "Textarea",
        href: `/${urls.components}/${urls.textarea}`,
      },
    ],
  },
];
