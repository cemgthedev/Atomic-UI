import {
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
  Textarea,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import {
  textareaExample,
  textareaPropertiesExample,
  textareaRoundsExample,
  textareaVariantsExample,
} from "@/pages/Components/textarea/codes";
import { textareaSourceCode } from "@/pages/Components/textarea/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.textarea}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.textarea}#variantes`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.textarea}#arredondamentos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.textarea}#propriedades`,
  },
];

export function TextareaDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Textarea</Heading>
              <Text className="indent-8">
                Campo de entrada de texto multilinha com suporte a variantes,
                tamanhos e arredondamento.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(textareaSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="textarea-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="textarea-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="textarea-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="textarea-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-md">
                  <Textarea placeholder="Digite sua mensagem" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="textarea-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{textareaExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(textareaExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Variantes */}
        <div id="variantes" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Variantes</Heading>
              <Text className="indent-8">
                Exemplos de variantes do componente Textarea.
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
                <div className="w-full max-w-md flex flex-col gap-3">
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
                    <Textarea
                      key={variant}
                      variant={variant}
                      placeholder={variant}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{textareaVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(textareaVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Arredondamentos */}
        <div id="arredondamentos" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Arredondamentos</Heading>
              <Text className="indent-8">
                Exemplos de arredondamentos do componente Textarea.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="rounds-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="rounds-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="rounds-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rounds-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-md flex flex-col gap-3">
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((rounded) => (
                    <Textarea
                      key={rounded}
                      rounded={rounded}
                      placeholder={rounded}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rounds-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{textareaRoundsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(textareaRoundsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Propriedades */}
        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Propriedades</Heading>
              <Text className="indent-8">
                Propriedades para estilização do componente Textarea.
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
                <div className="w-full max-w-md">
                  <Textarea
                    variant="default"
                    rounded="md"
                    placeholder="Exemplo"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{textareaPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(textareaPropertiesExample)}
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
                    <Text>Define a aparência visual do textarea.</Text>
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
                    <Text>Controla o tamanho do textarea.</Text>
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
                    <Text>Define o arredondamento das bordas.</Text>
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
