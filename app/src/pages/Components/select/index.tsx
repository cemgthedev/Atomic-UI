import {
  Button,
  Heading,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
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
  selectExample,
  selectPropertiesExample,
  selectRoundedExample,
  selectSizesExample,
  selectVariantsExample,
} from "@/pages/Components/select/codes";
import { selectSourceCode } from "@/pages/Components/select/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.select}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.select}#variantes`,
  },
  {
    name: "Tamanhos",
    href: `/${urls.components}/${urls.select}#tamanhos`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.select}#arredondamentos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.select}#propriedades`,
  },
];

export function SelectDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Select</Heading>
              <Text className="indent-8">
                Exibe uma lista suspensa de opções para selecionar um único
                valor de forma compacta e organizada.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(selectSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="select-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="select-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="select-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="select-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Select defaultValue="option-1">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Opções</SelectLabel>
                      <SelectItem value="option-1">Opção 1</SelectItem>
                      <SelectItem value="option-2">Opção 2</SelectItem>
                      <SelectItem value="option-3">Opção 3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
            <TabsContent value="select-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{selectExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(selectExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="variantes" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Variantes</Heading>
              <Text className="indent-8">
                Exemplos de variantes do componente Select.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="variants-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap justify-center gap-4">
                  {(
                    [
                      "default",
                      "dark",
                      "muted",
                      "primary",
                      "secondary",
                      "success",
                      "warning",
                      "danger",
                    ] as const
                  ).map((variant) => (
                    <Select key={variant} defaultValue={variant}>
                      <SelectTrigger variant={variant} className="w-[180px]">
                        <SelectValue placeholder={variant} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={variant}>{variant}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{selectVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(selectVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="tamanhos" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Tamanhos</Heading>
              <Text className="indent-8">
                Exemplos de tamanhos do componente Select.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="sizes-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="sizes-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="sizes-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sizes-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap justify-center gap-4">
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                    <Select key={size} defaultValue="option-1">
                      <SelectTrigger size={size} className="w-[180px]">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="option-1">Opção 1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{selectSizesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(selectSizesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="arredondamentos" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Arredondamentos</Heading>
              <Text className="indent-8">
                Exemplos de arredondamento do componente Select.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="rounded-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="rounded-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="rounded-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rounded-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap justify-center gap-4">
                  {(["xs", "sm", "md", "lg", "xl", "full"] as const).map(
                    (rounded) => (
                      <Select key={rounded} defaultValue="option-1">
                        <SelectTrigger rounded={rounded} className="w-[180px]">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="option-1">Opção 1</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rounded-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{selectRoundedExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(selectRoundedExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Propriedades</Heading>
              <Text className="indent-8">
                Configurações fundamentais do componente Select.
              </Text>
            </div>
          </div>

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
                <Select defaultValue="option-1">
                  <SelectTrigger
                    variant="primary"
                    size="md"
                    rounded="md"
                    className="w-[180px]"
                  >
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="option-1">Opção 1</SelectItem>
                      <SelectItem value="option-2">Opção 2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{selectPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(selectPropertiesExample)}
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
                    <Text>SelectTrigger</Text>
                  </TableCell>
                  <TableCell>
                    <Text>variant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a variação visual do trigger.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>SelectTrigger</Text>
                  </TableCell>
                  <TableCell>
                    <Text>size</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Altera a altura e o espaçamento do campo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>SelectTrigger</Text>
                  </TableCell>
                  <TableCell>
                    <Text>rounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Controla o arredondamento das bordas.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>SelectTrigger</Text>
                  </TableCell>
                  <TableCell>
                    <Text>placeholder</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Texto exibido quando nenhum valor está selecionado.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>SelectTrigger</Text>
                  </TableCell>
                  <TableCell>
                    <Text>disabled</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Desativa a seleção do componente.</Text>
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
