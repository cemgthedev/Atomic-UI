import {
  Button,
  Heading,
  Label,
  Separator,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
  tableCompositionExample,
  tableExample,
  tablePropertiesExample,
} from "@/pages/Components/table/codes";
import { tableSourceCode } from "@/pages/Components/table/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  { name: "Importação", href: `/${urls.components}/${urls.table}#importacao` },
  { name: "Composição", href: `/${urls.components}/${urls.table}#composicao` },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.table}#propriedades`,
  },
];

const rows = [
  { name: "Atomic UI", status: "Publicado", updated: "Hoje" },
  { name: "Design Tokens", status: "Em revisão", updated: "Ontem" },
  { name: "Componentes", status: "Rascunho", updated: "12/08/2026" },
];

function CodePanel({ code }: { code: string }) {
  return (
    <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
      <pre className="w-full overflow-auto scrollbar-thin mr-1">
        <code>{code}</code>
      </pre>
      <Button
        startContent={<Copy size={20} className="text-zinc-600" />}
        onClick={() => copy(code)}
        className="bg-transparent border-none p-0"
      />
    </div>
  );
}

export function TableDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Table</Heading>
              <Text className="indent-8">
                Organiza dados tabulares em linhas e colunas, com elementos
                semânticos para cabeçalho, corpo, rodapé e legenda.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(tableSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="table-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="table-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="table-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="table-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Table className="min-w-140">
                  <TableCaption>Lista de projetos recentes.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Projeto</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Atualizado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell className="text-right">
                          {row.updated}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell className="text-right">
                        {rows.length} projetos
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="table-code">
              <CodePanel code={tableExample} />
            </TabsContent>
          </Tabs>
        </div>

        <div id="composicao" className="flex flex-col gap-3 py-4">
          <Heading>Composição</Heading>
          <Text className="indent-8">
            Combine os subcomponentes para definir cada parte da estrutura da
            tabela.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="composition-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="composition-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="composition-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="composition-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Componente</TableHead>
                      <TableHead>Responsabilidade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>TableHeader</TableCell>
                      <TableCell>Cabeçalho da tabela</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TableBody</TableCell>
                      <TableCell>Linhas de dados</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TableFooter</TableCell>
                      <TableCell>Resumo ou totais</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="composition-code">
              <CodePanel code={tableCompositionExample} />
            </TabsContent>
          </Tabs>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 py-4">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Todos os subcomponentes aceitam as propriedades HTML equivalentes e
            className.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Table>
                  <TableCaption>Itens disponíveis no catálogo.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Text>Produto</Text>
                      </TableHead>
                      <TableHead>
                        <Text>Categoria</Text>
                      </TableHead>
                      <TableHead>
                        <Text>Status</Text>
                      </TableHead>
                      <TableHead>
                        <Text>Quantidade</Text>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Text>Caderno</Text>
                      </TableCell>
                      <TableCell>
                        <Text>Papelaria</Text>
                      </TableCell>
                      <TableCell>
                        <Text>Disponível</Text>
                      </TableCell>
                      <TableCell>
                        <Text>24</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Text>Caneca</Text>
                      </TableCell>
                      <TableCell>
                        <Text>Acessórios</Text>
                      </TableCell>
                      <TableCell>
                        <Text>Disponível</Text>
                      </TableCell>
                      <TableCell>
                        <Text>12</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Text>Mochila</Text>
                      </TableCell>
                      <TableCell>
                        <Text>Utilidades</Text>
                      </TableCell>
                      <TableCell>
                        <Text>Baixo estoque</Text>
                      </TableCell>
                      <TableCell>
                        <Text>5</Text>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <CodePanel code={tablePropertiesExample} />
            </TabsContent>
          </Tabs>
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
                  <TableHead>
                    <Text>Valor padrão</Text>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Text>Todos</Text>
                  </TableCell>
                  <TableCell>
                    <Text>className</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Adiciona classes utilitárias.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>TableCell / TableHead</Text>
                  </TableCell>
                  <TableCell>
                    <Text>colSpan, rowSpan</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Mescla colunas ou linhas.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>TableRow</Text>
                  </TableCell>
                  <TableCell>
                    <Text>data-state</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Permite indicar estado selecionado.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <aside className="hidden lg:flex flex-col gap-2 min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] min-w-fit max-w-fit border-l border-muted-200 px-3 py-8 overflow-auto scrollbar-none">
        <Label size="sm" className="text-right px-3">
          Seções
        </Label>
        <nav>
          {sectionLinks.map((item) => {
            const href = item.href ?? "";
            const isActive = href === currentUrl;
            return (
              <Link
                key={item.name}
                to={href}
                className={cn(
                  "text-right px-3 py-1 block text-md transition-opacity border-b-2 border-transparent",
                  isActive
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
