import {
  Button,
  Heading,
  Label,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
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
  paginationExample,
  paginationPropertiesExample,
  paginationRoundedExample,
  paginationSizesExample,
  paginationVariantsExample,
} from "@/pages/Components/pagination/codes";
import { paginationSourceCode } from "@/pages/Components/pagination/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.pagination}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.pagination}#variantes`,
  },
  { name: "Tamanhos", href: `/${urls.components}/${urls.pagination}#tamanhos` },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.pagination}#arredondamentos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.pagination}#propriedades`,
  },
];

export function PaginationDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Pagination</Heading>
              <Text className="indent-8">
                Componente de paginação para navegação entre páginas de
                conteúdo.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(paginationSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="pagination-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="pagination-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="pagination-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pagination-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious variant="primary" href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="primary" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="primary">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" variant="primary" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TabsContent>
            <TabsContent value="pagination-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{paginationExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(paginationExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Variantes */}
        <div id="variantes" className="flex flex-col gap-3 py-4">
          <Heading>Variantes</Heading>
          <Text className="indent-8">
            Exemplos de variantes do componente Pagination.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="pagination-variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="pagination-variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="pagination-variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pagination-variants-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-3">
                  {(
                    [
                      "primary",
                      "primary-bordered",
                      "primary-ghost",
                      "secondary",
                      "success",
                      "warning",
                      "danger",
                    ] as const
                  ).map((variant) => (
                    <Pagination key={variant}>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious variant={variant} href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" variant={variant} isActive>
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" variant={variant}>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" variant={variant} />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pagination-variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{paginationVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(paginationVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Tamanhos */}
        <div id="tamanhos" className="flex flex-col gap-3 py-4">
          <Heading>Tamanhos</Heading>
          <Text className="indent-8">
            Exemplos de tamanhos do componente Pagination.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="pagination-sizes-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="pagination-sizes-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="pagination-sizes-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pagination-sizes-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-3">
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                    <Pagination key={size}>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            size={size}
                            variant="dark-ghost"
                            href="#"
                          />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            size={size}
                            variant="dark-ghost"
                            href="#"
                            isActive
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            size={size}
                            variant="dark-ghost"
                            href="#"
                          >
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext
                            size={size}
                            variant="dark-ghost"
                            href="#"
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pagination-sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{paginationSizesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(paginationSizesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Arredondamentos */}
        <div id="arredondamentos" className="flex flex-col gap-3 py-4">
          <Heading>Arredondamentos</Heading>
          <Text className="indent-8">
            Exemplos de arredondamentos do componente Pagination.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="pagination-rounded-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="pagination-rounded-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="pagination-rounded-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pagination-rounded-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-3">
                  {(["xs", "sm", "md", "lg", "xl", "full"] as const).map(
                    (rounded) => (
                      <Pagination key={rounded}>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              rounded={rounded}
                              variant="primary"
                              href="#"
                            />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              rounded={rounded}
                              variant="primary"
                              href="#"
                              isActive
                            >
                              1
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              rounded={rounded}
                              variant="primary"
                              href="#"
                            >
                              2
                            </PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationNext
                              rounded={rounded}
                              variant="primary"
                              href="#"
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pagination-rounded-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{paginationRoundedExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(paginationRoundedExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Propriedades */}
        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Propriedades para personalizar o Pagination.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="pagination-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="pagination-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="pagination-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pagination-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        variant="default"
                        size="md"
                        rounded="md"
                        href="#"
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        variant="default"
                        size="md"
                        rounded="md"
                        href="#"
                        isActive
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        variant="default"
                        size="md"
                        rounded="md"
                        href="#"
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        variant="default"
                        size="md"
                        rounded="md"
                        href="#"
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TabsContent>
            <TabsContent value="pagination-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{paginationPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(paginationPropertiesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
          <div className="border border-muted-200 p-3 rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Text>Nome</Text>
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
                    <Text>variant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o estilo visual dos botões.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>size</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o tamanho dos botões.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>rounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o arredondamento dos botões.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
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
            const href = item?.href ?? "";
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
