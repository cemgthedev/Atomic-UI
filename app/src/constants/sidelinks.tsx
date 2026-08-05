import { urls } from "@/constants/urls";
import type { UrlProps } from "@/types/urls";
import { BookOpen, Download } from "lucide-react";

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
];
