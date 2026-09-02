import { Heading, Input, Label, Separator, Text } from "@/components/ui";
import { urls } from "@/constants/urls";
import { Search, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type ComponentProps = {
  name: string;
  description: string;
  href: string;
};

const components: ComponentProps[] = [
  {
    name: "Avatar",
    description: "Exibe imagem ou identidade visual de um usuário.",
    href: `/${urls.components}/${urls.avatar}`,
  },
  {
    name: "Badge",
    description: "Destaca status, categorias ou informações curtas.",
    href: `/${urls.components}/${urls.badge}`,
  },
  {
    name: "Breadcrumb",
    description: "Exibe o caminho de navegação atual.",
    href: `/${urls.components}/${urls.breadcrumb}`,
  },
  {
    name: "Button",
    description: "Executa ações principais da interface.",
    href: `/${urls.components}/${urls.button}`,
  },
  {
    name: "Calendar",
    description: "Exibe datas em formato de calendário.",
    href: `/${urls.components}/${urls.calendar}`,
  },
  {
    name: "Card",
    description: "Agrupa conteúdos relacionados em um bloco.",
    href: `/${urls.components}/${urls.card}`,
  },
  {
    name: "Carousel",
    description: "Exibe conteúdo em sequência deslizável.",
    href: `/${urls.components}/${urls.carousel}`,
  },
  {
    name: "Checkbox",
    description: "Seleciona uma ou mais opções disponíveis.",
    href: `/${urls.components}/${urls.checkbox}`,
  },
  {
    name: "Collapsible",
    description: "Expande ou recolhe uma seção.",
    href: `/${urls.components}/${urls.collapsible}`,
  },
  {
    name: "Datepicker",
    description: "Seleciona datas em um campo interativo.",
    href: `/${urls.components}/${urls.datepicker}`,
  },
  {
    name: "Dialog",
    description: "Exibe conteúdo em uma janela modal.",
    href: `/${urls.components}/${urls.dialog}`,
  },
  {
    name: "Drawer",
    description: "Exibe painel deslizante lateral ou inferior.",
    href: `/${urls.components}/${urls.drawer}`,
  },
  {
    name: "DropdownMenu",
    description: "Exibe lista de ações ou opções.",
    href: `/${urls.components}/${urls.dropdown_menu}`,
  },
  {
    name: "Field",
    description: "Agrupa elementos de um campo de formulário.",
    href: `/${urls.components}/${urls.field}`,
  },
  {
    name: "Heading",
    description: "Exibe títulos e hierarquias de conteúdo.",
    href: `/${urls.components}/${urls.heading}`,
  },
  {
    name: "Image",
    description: "Exibe imagens responsivas na interface.",
    href: `/${urls.components}/${urls.image}`,
  },
  {
    name: "Input",
    description: "Recebe informações digitadas pelo usuário.",
    href: `/${urls.components}/${urls.input}`,
  },
  {
    name: "Input Group",
    description: "Agrupa entrada com elementos auxiliares.",
    href: `/${urls.components}/${urls.input_group}`,
  },
  {
    name: "Label",
    description: "Identifica campos e controles da interface.",
    href: `/${urls.components}/${urls.label}`,
  },
  {
    name: "Loader",
    description: "Indica carregamento de conteúdos ou ações.",
    href: `/${urls.components}/${urls.loader}`,
  },
  {
    name: "Message",
    description: "Exibe mensagens informativas ao usuário.",
    href: `/${urls.components}/${urls.message}`,
  },
  {
    name: "Pagination",
    description: "Navega entre páginas de conteúdo.",
    href: `/${urls.components}/${urls.pagination}`,
  },
  {
    name: "Popover",
    description: "Exibe conteúdo contextual em sobreposição.",
    href: `/${urls.components}/${urls.popover}`,
  },
  {
    name: "Progress",
    description: "Indica progresso de uma tarefa.",
    href: `/${urls.components}/${urls.progress}`,
  },
  {
    name: "Radio Group",
    description: "Seleciona apenas uma opção disponível.",
    href: `/${urls.components}/${urls.radio_group}`,
  },
  {
    name: "Select",
    description: "Seleciona uma opção em lista.",
    href: `/${urls.components}/${urls.select}`,
  },
  {
    name: "Separator",
    description: "Separa conteúdos em diferentes seções.",
    href: `/${urls.components}/${urls.separator}`,
  },
  {
    name: "Sheet",
    description: "Exibe painel deslizante sobre a interface.",
    href: `/${urls.components}/${urls.sheet}`,
  },
  {
    name: "Skeleton",
    description: "Exibe estrutura temporária durante carregamento.",
    href: `/${urls.components}/${urls.skeleton}`,
  },
  {
    name: "Slider",
    description: "Seleciona valores dentro de um intervalo.",
    href: `/${urls.components}/${urls.slider}`,
  },
  {
    name: "Switch",
    description: "Ativa ou desativa uma configuração.",
    href: `/${urls.components}/${urls.switch}`,
  },
  {
    name: "Table",
    description: "Organiza dados em linhas e colunas.",
    href: `/${urls.components}/${urls.table}`,
  },
  {
    name: "Tabs",
    description: "Alterna entre diferentes conteúdos relacionados.",
    href: `/${urls.components}/${urls.tabs}`,
  },
  {
    name: "Text",
    description: "Exibe textos e conteúdos escritos.",
    href: `/${urls.components}/${urls.text}`,
  },
  {
    name: "Textarea",
    description: "Recebe textos longos em formulários.",
    href: `/${urls.components}/${urls.textarea}`,
  },
  {
    name: "Toast",
    description: "Exibe notificações temporárias na interface.",
    href: `/${urls.components}/${urls.toast}`,
  },
  {
    name: "Tooltip",
    description: "Exibe informações adicionais ao interagir.",
    href: `/${urls.components}/${urls.tooltip}`,
  },
];

export function Components() {
  const [search, setSearch] = useState("");

  const filteredComponents = components.filter((component) => {
    const searchTerm = search.toLowerCase().trim();
    return (
      component.name.toLowerCase().includes(searchTerm) ||
      component.description.toLowerCase().includes(searchTerm)
    );
  });

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
      {/* Todos */}
      <div id="todos" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Heading>Componentes</Heading>
          <Text className="indent-8">
            {" "}
            Explore todos os componentes disponíveis no AtomicUI, desenvolvidos
            para oferecer consistência, personalização e reutilização na
            construção de interfaces modernas.
          </Text>
        </div>

        <Separator size="xs" />

        <div className="relative w-full md:w-4/5 lg:w-2/3">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-80"
            size={18}
          />
          <Input
            value={search}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Filtrar componentes..."
            aria-label="Filtrar componentes"
            variant="primary"
            className="w-full pl-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredComponents?.map((component) => (
            <div className="flex flex-col gap-1 p-3 rounded-lg border border-muted-200">
              <Label size="xs">{component.name}</Label>
              <Text>{component.description}</Text>
              <Link
                to={component.href}
                className="flex gap-1 items-center hover:underline"
              >
                <SquareArrowOutUpRight size={16} />
                <Text size="sm">ver detalhes</Text>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
