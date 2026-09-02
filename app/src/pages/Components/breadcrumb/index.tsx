import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
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
  breadcrumbCustomSeparatorExample,
  breadcrumbEllipsisExample,
  breadcrumbExample,
} from "@/pages/Components/breadcrumb/codes";
import { breadcrumbSourceCode } from "@/pages/Components/breadcrumb/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.breadcrumb}#importacao`,
  },
  {
    name: "Separador",
    href: `/${urls.components}/${urls.breadcrumb}#separador`,
  },
  {
    name: "Itens ocultos",
    href: `/${urls.components}/${urls.breadcrumb}#itens-ocultos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.breadcrumb}#propriedades`,
  },
];

export function BreadcrumbDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Breadcrumb</Heading>
              <Text className="indent-8">
                Exibe o caminho percorrido dentro da aplicação, permitindo
                navegar rapidamente entre páginas e diferentes níveis da
                estrutura.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(breadcrumbSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="breadcrumb-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="breadcrumb-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="breadcrumb-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="breadcrumb-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Início</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/components">
                        Componentes
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </TabsContent>
            <TabsContent value="breadcrumb-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{breadcrumbExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(breadcrumbExample)}
                  className="bg-transparent border-none p-0"
                  aria-label="Copiar código"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Separador */}
        <div id="separador" className="flex flex-col gap-3 py-4">
          <Heading>Separador</Heading>
          <Text className="indent-8">
            Personalize o separador passando seu conteúdo como filho de{" "}
            <code>BreadcrumbSeparator</code>.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="breadcrumb-separator-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="breadcrumb-separator-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="breadcrumb-separator-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="breadcrumb-separator-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Início</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/components">
                        Componentes
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </TabsContent>
            <TabsContent value="breadcrumb-separator-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{breadcrumbCustomSeparatorExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(breadcrumbCustomSeparatorExample)}
                  className="bg-transparent border-none p-0"
                  aria-label="Copiar código"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Itens Ocultos */}
        <div id="itens-ocultos" className="flex flex-col gap-3 py-4">
          <Heading>Itens ocultos</Heading>
          <Text className="indent-8">
            Use <code>BreadcrumbEllipsis</code> para representar níveis
            intermediários omitidos.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="breadcrumb-ellipsis-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="breadcrumb-ellipsis-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="breadcrumb-ellipsis-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="breadcrumb-ellipsis-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Início</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/components">
                        Componentes
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </TabsContent>
            <TabsContent value="breadcrumb-ellipsis-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{breadcrumbEllipsisExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(breadcrumbEllipsisExample)}
                  className="bg-transparent border-none p-0"
                  aria-label="Copiar código"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Propriedades */}
        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Os elementos aceitam as propriedades nativas de seus elementos HTML
            correspondentes.
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
                  <TableHead>
                    <Text>Valor padrão</Text>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Text>Breadcrumb</Text>
                  </TableCell>
                  <TableCell>
                    <Text>props de nav</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Contêiner de navegação.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>BreadcrumbLink</Text>
                  </TableCell>
                  <TableCell>
                    <Text>asChild: false</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Link para um nível anterior.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>BreadcrumbPage</Text>
                  </TableCell>
                  <TableCell>
                    <Text>props de span</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Representa a página atual.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>BreadcrumbSeparator</Text>
                  </TableCell>
                  <TableCell>
                    <Text>children: ChevronRight</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Separa os níveis.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>BreadcrumbEllipsis</Text>
                  </TableCell>
                  <TableCell>
                    <Text>props de span</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Indica níveis omitidos.</Text>
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
