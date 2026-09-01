import { urls } from "@/constants/urls";
import type { UrlProps } from "@/types/urls";
import { BookOpen, Component, Download } from "lucide-react";

export const webUrls: UrlProps[] = [
  {
    name: "Documentação",
    icon: <BookOpen size={20} />,
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
        name: "Badge",
        href: `/${urls.components}/${urls.badge}`,
      },
      {
        name: "Breadcrumb",
        href: `/${urls.components}/${urls.breadcrumb}`,
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
        name: "Card",
        href: `/${urls.components}/${urls.card}`,
      },
      {
        name: "Carousel",
        href: `/${urls.components}/${urls.carousel}`,
      },
      {
        name: "Checkbox",
        href: `/${urls.components}/${urls.checkbox}`,
      },
      {
        name: "Collapsible",
        href: `/${urls.components}/${urls.collapsible}`,
      },
      {
        name: "Datepicker",
        href: `/${urls.components}/${urls.datepicker}`,
      },
      {
        name: "Dialog",
        href: `/${urls.components}/${urls.dialog}`,
      },
      {
        name: "Drawer",
        href: `/${urls.components}/${urls.drawer}`,
      },
      {
        name: "DropdownMenu",
        href: `/${urls.components}/${urls.dropdown_menu}`,
      },
      {
        name: "Field",
        href: `/${urls.components}/${urls.field}`,
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
        name: "Radio Group",
        href: `/${urls.components}/${urls.radio_group}`,
      },
      {
        name: "Select",
        href: `/${urls.components}/${urls.select}`,
      },
      {
        name: "Separator",
        href: `/${urls.components}/${urls.separator}`,
      },
      {
        name: "Sheet",
        href: `/${urls.components}/${urls.sheet}`,
      },
      {
        name: "Skeleton",
        href: `/${urls.components}/${urls.skeleton}`,
      },
      {
        name: "Slider",
        href: `/${urls.components}/${urls.slider}`,
      },
      {
        name: "Switch",
        href: `/${urls.components}/${urls.switch}`,
      },
      {
        name: "Tabs",
        href: `/${urls.components}/${urls.tabs}`,
      },
      {
        name: "Text",
        href: `/${urls.components}/${urls.text}`,
      },
      {
        name: "Textarea",
        href: `/${urls.components}/${urls.textarea}`,
      },
      {
        name: "Toast",
        href: `/${urls.components}/${urls.toast}`,
      },
      {
        name: "Tooltip",
        href: `/${urls.components}/${urls.tooltip}`,
      },
    ],
  },
];
