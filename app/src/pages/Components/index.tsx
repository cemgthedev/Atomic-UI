import { Divider, Heading, Label, Text } from "@/components/ui";
import { urls } from "@/constants/urls";
import { SquareArrowOutUpRight } from "lucide-react";

type ComponentProps = {
  name: string;
  description: string;
  href: string;
};

const components: ComponentProps[] = [
  {
    name: "Avatar",
    description: "Exibe a imagem ou as iniciais de um usuário ou entidade.",
    href: `/${urls.components}/avatar`,
  },
  {
    name: "Badge",
    description: "Destaca informações com rótulos compactos e personalizáveis.",
    href: `/${urls.components}/badge`,
  },
  {
    name: "Button",
    description: "Aciona ações por meio de botões com variantes e estados.",
    href: `/${urls.components}/button`,
  },
  {
    name: "Calendar",
    description: "Exibe um calendário para navegação e seleção de datas.",
    href: `/${urls.components}/calendar`,
  },
  {
    name: "Checkbox",
    description: "Permite selecionar ou desmarcar opções independentes.",
    href: `/${urls.components}/checkbox`,
  },
  {
    name: "Datepicker",
    description: "Combina calendário e campo para seleção de datas.",
    href: `/${urls.components}/datepicker`,
  },
  {
    name: "Divider",
    description: "Separa visualmente seções e grupos de conteúdo.",
    href: `/${urls.components}/divider`,
  },
  {
    name: "Heading",
    description: "Renderiza títulos semânticos com estilos padronizados.",
    href: `/${urls.components}/heading`,
  },
  {
    name: "Image",
    description: "Exibe imagens com suporte a personalização e responsividade.",
    href: `/${urls.components}/image`,
  },
  {
    name: "Input",
    description: "Campo de entrada para textos e outros valores.",
    href: `/${urls.components}/input`,
  },
  {
    name: "Label",
    description:
      "Identifica e descreve campos de formulário de forma acessível.",
    href: `/${urls.components}/label`,
  },
  {
    name: "Loader",
    description: "Indica carregamento ou processamento de informações.",
    href: `/${urls.components}/loader`,
  },
  {
    name: "Message",
    description: "Exibe mensagens informativas, de sucesso, aviso ou erro.",
    href: `/${urls.components}/message`,
  },
  {
    name: "Pagination",
    description: "Navega entre páginas de grandes conjuntos de dados.",
    href: `/${urls.components}/pagination`,
  },
  {
    name: "Popover",
    description: "Exibe conteúdo contextual sobreposto ao elemento acionador.",
    href: `/${urls.components}/popover`,
  },
  {
    name: "Progress",
    description: "Representa visualmente o progresso de uma tarefa.",
    href: `/${urls.components}/progress`,
  },
  {
    name: "Quote",
    description: "Destaca citações com formatação semântica e estilizada.",
    href: `/${urls.components}/quote`,
  },
  {
    name: "Skeleton",
    description: "Exibe um placeholder durante o carregamento do conteúdo.",
    href: `/${urls.components}/skeleton`,
  },
  {
    name: "Switch",
    description: "Alterna entre estados ligado e desligado.",
    href: `/${urls.components}/switch`,
  },
  {
    name: "Text",
    description: "Renderiza textos com estilos tipográficos consistentes.",
    href: `/${urls.components}/text`,
  },
  {
    name: "Textarea",
    description: "Campo para entrada de textos com múltiplas linhas.",
    href: `/${urls.components}/textarea`,
  },
];

export function Components() {
  return (
    <section className="min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
      {/* Todos */}
      <div id="todos" className="flex flex-col gap-3 pt-8 pb-16">
        <div className="flex flex-col gap-1">
          <Heading>Componentes</Heading>
          <Text className="indent-8">
            {" "}
            Explore todos os componentes disponíveis no AtomicUI, desenvolvidos
            para oferecer consistência, personalização e reutilização na
            construção de interfaces modernas.
          </Text>
        </div>

        <Divider size="xs" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {components?.map((component) => (
            <div className="flex flex-col gap-1 p-3 rounded-lg border border-muted-200">
              <Label size="xs">{component.name}</Label>
              <Text>{component.description}</Text>
              <a
                href={component.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center hover:underline"
              >
                <SquareArrowOutUpRight size={16} />
                <Text size="sm">ver detalhes</Text>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
