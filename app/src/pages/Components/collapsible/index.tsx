import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Heading,
  Label,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import {
  collapsibleDefaultOpenExample,
  collapsibleExample,
} from "@/pages/Components/collapsible/codes";
import { collapsibleSourceCode } from "@/pages/Components/collapsible/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

const sectionLinks: UrlProps[] = [
  {
    name: "Importacao",
    href: `/${urls.components}/${urls.collapsible}#importacao`,
  },
  {
    name: "Estado inicial",
    href: `/${urls.components}/${urls.collapsible}#estado-inicial`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.collapsible}#propriedades`,
  },
];

type ExampleTabsProps = {
  code: string;
  example: React.ReactNode;
  name: string;
};

function ExampleTabs({ code, example, name }: ExampleTabsProps) {
  return (
    <Tabs defaultValue={`${name}-example`} className="w-full">
      <TabsList className="bg-background border border-muted-200">
        <TabsTrigger
          value={`${name}-example`}
          className="data-active:bg-primary-100"
        >
          <Text size="sm">Exemplo</Text>
        </TabsTrigger>
        <TabsTrigger
          value={`${name}-code`}
          className="data-active:bg-primary-100"
        >
          <Text size="sm">Codigo</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value={`${name}-example`}>
        <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
          {example}
        </div>
      </TabsContent>
      <TabsContent value={`${name}-code`}>
        <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
          <pre className="w-full overflow-auto scrollbar-thin mr-1">
            <code>{code}</code>
          </pre>
          <Button
            startContent={<Copy size={20} className="text-zinc-600" />}
            onClick={() => copy(code)}
            className="bg-transparent border-none p-0"
            aria-label="Copiar codigo"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}

function CollapsibleExample({
  defaultOpen = false,
}: {
  defaultOpen?: boolean;
}) {
  return (
    <Collapsible defaultOpen={defaultOpen} className="w-full max-w-md">
      <CollapsibleTrigger asChild>
        <Button variant="secondary">
          {defaultOpen ? "Ocultar detalhes" : "Mostrar detalhes"}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 rounded-lg border border-muted-200 p-3">
        <Text>
          {defaultOpen
            ? "Este conteudo e exibido inicialmente."
            : "Conteudo complementar exibido ao abrir o componente."}
        </Text>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function CollapsibleDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;
  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Collapsible</Heading>
              <Text className="indent-8">
                Permite expandir ou recolher uma seção de conteúdo, economizando
                espaço e melhorando a organização da interface.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(collapsibleSourceCode)}
              className="min-w-fit"
            >
              Copiar codigo fonte
            </Button>
          </div>
          <Separator size="xs" />
          <ExampleTabs
            name="collapsible"
            code={collapsibleExample}
            example={<CollapsibleExample />}
          />
        </div>

        {/* Estado Inicial */}
        <div id="estado-inicial" className="flex flex-col gap-3 py-4">
          <Heading>Estado inicial</Heading>
          <Text className="indent-8">
            Use <code>defaultOpen</code> para exibir o conteudo quando o
            componente for montado.
          </Text>
          <Separator size="xs" />
          <ExampleTabs
            name="collapsible-default-open"
            code={collapsibleDefaultOpenExample}
            example={<CollapsibleExample defaultOpen />}
          />
        </div>

        {/* Propriedades */}
        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Controle o estado do componente e personalize seus elementos
            internos.
          </Text>
          <Separator size="xs" />
          <div className="border border-muted-200 p-3 rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Text>Componente</Text>
                  </TableHead>
                  <TableHead>
                    <Text>Propriedade</Text>
                  </TableHead>
                  <TableHead>
                    <Text>Descrição</Text>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Text>Collapsible</Text>
                  </TableCell>
                  <TableCell>
                    <Text>defaultOpen</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define se o conteudo inicia aberto.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Collapsible</Text>
                  </TableCell>
                  <TableCell>
                    <Text>open</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Controla o estado aberto do componente.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Collapsible</Text>
                  </TableCell>
                  <TableCell>
                    <Text>onOpenChange</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Chamado quando o estado aberto e alterado.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>CollapsibleTrigger</Text>
                  </TableCell>
                  <TableCell>
                    <Text>asChild</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Combina o acionador com o elemento filho.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>CollapsibleContent</Text>
                  </TableCell>
                  <TableCell>
                    <Text>forceMount</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Mantem o conteudo montado mesmo quando fechado.</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
      <aside className="hidden lg:flex flex-col gap-2 min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] min-w-fit max-w-fit border-l border-muted-200 px-3 py-8 overflow-auto scrollbar-none">
        <Label size="sm" className="text-right px-3">
          Secoes
        </Label>
        <nav>
          {sectionLinks.map((item) => {
            const href = item.href ?? "";
            return (
              <Link
                key={item.name}
                to={href}
                className={cn(
                  "text-right px-3 py-1 block text-md transition-opacity border-b-2 border-transparent",
                  href === currentUrl
                    ? "border-b-primary text-primary"
                    : "text-foreground hover:opacity-80",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
