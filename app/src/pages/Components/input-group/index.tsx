import {
  Button,
  Heading,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
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
  inputGroupExample,
  inputGroupExamplesExample,
  inputGroupPropertiesExample,
  inputGroupVariantsExample,
} from "@/pages/Components/input-group/codes";
import { inputGroupSourceCode } from "@/pages/Components/input-group/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy, DollarSign, Mail, Search, Send } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.input_group}#importacao`,
  },
  {
    name: "Exemplos",
    href: `/${urls.components}/${urls.input_group}#exemplos`,
  },
  {
    name: "Variante e tamanho",
    href: `/${urls.components}/${urls.input_group}#variantes`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.input_group}#propriedades`,
  },
];

export function InputGroupDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>InputGroup</Heading>
              <Text className="indent-8">
                Organiza um campo de entrada junto a elementos auxiliares, como
                ícones, botões, prefixos ou sufixos relacionados.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(inputGroupSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="input-group-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="input-group-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="input-group-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="input-group-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-xl">
                  <InputGroup>
                    <InputGroupAddon>
                      <Mail size={16} />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Digite seu e-mail" />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton variant="primary">
                        Enviar
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="input-group-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{inputGroupExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(inputGroupExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="exemplos" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Exemplos</Heading>
              <Text className="indent-8">
                Combinações com texto, botão, moeda e área de descrição.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="examples-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="examples-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="examples-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="examples-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-xl flex flex-col gap-4">
                  <InputGroup>
                    <InputGroupAddon>
                      <DollarSign size={16} />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="0,00" />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText variant="primary" size="sm">
                        BRL
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon>
                      <Search size={16} />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Pesquisar componentes" />

                    <InputGroupAddon align="inline-end">
                      <InputGroupButton variant="secondary">
                        Buscar
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>

                  <InputGroup>
                    <InputGroupAddon align="block-start">
                      <InputGroupText size="sm">Mensagem</InputGroupText>
                      <InputGroupButton variant="secondary" className="ml-auto">
                        <Send size={16} />
                        Enviar
                      </InputGroupButton>
                    </InputGroupAddon>
                    <InputGroupTextarea
                      placeholder="Escreva sua sugestão..."
                      rows={4}
                    />
                  </InputGroup>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="examples-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{inputGroupExamplesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(inputGroupExamplesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="variantes" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Variante</Heading>
              <Text className="indent-8">
                Ajuste a aparência do campo com variantes.
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
                <div className="w-full max-w-xl flex flex-col gap-3">
                  {(
                    [
                      "default",
                      "primary",
                      "secondary",
                      "success",
                      "warning",
                      "danger",
                    ] as const
                  ).map((variant) => (
                    <InputGroup key={variant} variant={variant}>
                      <InputGroupAddon>{variant}</InputGroupAddon>
                      <InputGroupInput placeholder={variant} />
                    </InputGroup>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{inputGroupVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(inputGroupVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Propriedades</Heading>
              <Text className="indent-8">
                Principais propriedades disponíveis para composição do
                InputGroup.
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
                <div className="w-full max-w-xl">
                  <InputGroup>
                    <InputGroupAddon>
                      <Search size={16} />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Pesquisar" />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton variant="primary">
                        Buscar
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{inputGroupPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(inputGroupPropertiesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="border border-muted-200 rounded-lg overflow-hidden">
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
                    <Text>InputGroup</Text>
                  </TableCell>
                  <TableCell>
                    <Text>variant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a cor da entrada temática do grupo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>InputGroup</Text>
                  </TableCell>
                  <TableCell>
                    <Text>size</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Controla a altura e espaçamento do input.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>InputGroup</Text>
                  </TableCell>
                  <TableCell>
                    <Text>rounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o nível de arredondamento do grupo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>InputGroup</Text>
                  </TableCell>
                  <TableCell>
                    <Text>align</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Posiciona o addon no começo ou final do grupo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>inline-start</Text>
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
