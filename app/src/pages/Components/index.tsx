import { Heading, Label, Separator, Text } from "@/components/ui";
import { urls } from "@/constants/urls";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";

type ComponentProps = {
  name: string;
  description: string;
  href: string;
};

const components: ComponentProps[] = [
  {
    name: "Avatar",
    description: "Exibe a imagem ou as iniciais de um usuário ou entidade.",
    href: `/${urls.components}/${urls.avatar}`,
  },
  {
    name: "Breadcrumb",
    description: "Indica a hierarquia e a localização atual na navegação.",
    href: `/${urls.components}/${urls.breadcrumb}`,
  },
  {
    name: "Badge",
    description: "Destaca informações com rótulos compactos e personalizáveis.",
    href: `/${urls.components}/${urls.badge}`,
  },
  {
    name: "Button",
    description: "Aciona ações por meio de botões com variantes e estados.",
    href: `/${urls.components}/${urls.button}`,
  },
  {
    name: "Calendar",
    description: "Exibe um calendário para navegação e seleção de datas.",
    href: `/${urls.components}/${urls.calendar}`,
  },
  {
    name: "Card",
    description: "Exibe um card para agrupamento de informações.",
    href: `/${urls.components}/${urls.card}`,
  },
  {
    name: "Checkbox",
    description: "Permite selecionar ou desmarcar opções independentes.",
    href: `/${urls.components}/${urls.checkbox}`,
  },
  {
    name: "Datepicker",
    description: "Combina calendário e campo para seleção de datas.",
    href: `/${urls.components}/${urls.datepicker}`,
  },
  {
    name: "Drawer",
    description: "Exibe conteúdo em um painel deslizante que pode ser arrastado.",
    href: `/${urls.components}/${urls.drawer}`,
  },
  {
    name: "Dialog",
    description: "Exibe conteúdo sobreposto que requer a atenção do usuário.",
    href: `/${urls.components}/${urls.dialog}`,
  },
  {
    name: "Separator",
    description: "Separa visualmente seções e grupos de conteúdo.",
    href: `/${urls.components}/${urls.separator}`,
  },
  {
    name: "Heading",
    description: "Renderiza títulos semânticos com estilos padronizados.",
    href: `/${urls.components}/${urls.heading}`,
  },
  {
    name: "Image",
    description: "Exibe imagens com suporte a personalização e responsividade.",
    href: `/${urls.components}/${urls.image}`,
  },
  {
    name: "Input",
    description: "Campo de entrada para textos e outros valores.",
    href: `/${urls.components}/${urls.input}`,
  },
  {
    name: "Label",
    description:
      "Identifica e descreve campos de formulário de forma acessível.",
    href: `/${urls.components}/${urls.label}`,
  },
  {
    name: "Loader",
    description: "Indica carregamento ou processamento de informações.",
    href: `/${urls.components}/${urls.loader}`,
  },
  {
    name: "Message",
    description: "Exibe mensagens informativas, de sucesso, aviso ou erro.",
    href: `/${urls.components}/${urls.message}`,
  },
  {
    name: "Pagination",
    description: "Navega entre páginas de grandes conjuntos de dados.",
    href: `/${urls.components}/${urls.pagination}`,
  },
  {
    name: "Popover",
    description: "Exibe conteúdo contextual sobreposto ao elemento acionador.",
    href: `/${urls.components}/${urls.popover}`,
  },
  {
    name: "Sheet",
    description: "Exibe conteúdo em um painel deslizante sobre a interface.",
    href: `/${urls.components}/${urls.sheet}`,
  },
  {
    name: "Progress",
    description: "Representa visualmente o progresso de uma tarefa.",
    href: `/${urls.components}/${urls.progress}`,
  },
  {
    name: "Skeleton",
    description: "Exibe um placeholder durante o carregamento do conteúdo.",
    href: `/${urls.components}/${urls.skeleton}`,
  },
  {
    name: "Switch",
    description: "Alterna entre estados ligado e desligado.",
    href: `/${urls.components}/${urls.switch}`,
  },
  {
    name: "Text",
    description: "Renderiza textos com estilos tipográficos consistentes.",
    href: `/${urls.components}/${urls.text}`,
  },
  {
    name: "Textarea",
    description: "Campo para entrada de textos com múltiplas linhas.",
    href: `/${urls.components}/${urls.textarea}`,
  },
];

export function Components() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {components?.map((component) => (
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
