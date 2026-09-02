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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import {
  tooltipExample,
  tooltipPositionsExample,
  tooltipPropertiesExample,
  tooltipVariantsExample,
} from "@/pages/Components/tooltip/codes";
import { tooltipSourceCode } from "@/pages/Components/tooltip/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.tooltip}#importacao`,
  },
  {
    name: "Posicionamento",
    href: `/${urls.components}/${urls.tooltip}#posicionamento`,
  },
  { name: "Variantes", href: `/${urls.components}/${urls.tooltip}#variantes` },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.tooltip}#propriedades`,
  },
];

export function TooltipDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Tooltip</Heading>
              <Text className="indent-8">
                Apresenta informações curtas e contextuais relacionadas a um
                elemento, auxiliando compreensão sem ocupar espaço permanente.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(tooltipSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <TooltipProvider>
            <Tabs defaultValue="tooltip-example" className="w-full">
              <TabsList className="bg-background border border-muted-200">
                <TabsTrigger
                  value="tooltip-example"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Exemplo</Text>
                </TabsTrigger>
                <TabsTrigger
                  value="tooltip-code"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Código</Text>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tooltip-example">
                <div className="w-full flex justify-center items-center p-6 bg-muted-100 border border-muted-200 rounded-lg">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="primary">Passe o cursor</Button>
                    </TooltipTrigger>
                    <TooltipContent>Informação complementar</TooltipContent>
                  </Tooltip>
                </div>
              </TabsContent>
              <TabsContent value="tooltip-code">
                <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <pre className="w-full overflow-auto scrollbar-thin mr-1">
                    <code>{tooltipExample}</code>
                  </pre>
                  <Button
                    startContent={<Copy size={20} className="text-zinc-600" />}
                    onClick={() => copy(tooltipExample)}
                    className="bg-transparent border-none p-0"
                    aria-label="Copiar código"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TooltipProvider>
        </div>

        <div id="posicionamento" className="flex flex-col gap-3 py-4">
          <Heading>Posicionamento</Heading>
          <Text className="indent-8">
            Defina em qual lado do elemento acionador a dica será exibida.
          </Text>
          <Separator size="xs" />
          <TooltipProvider>
            <Tabs defaultValue="tooltip-positions-example" className="w-full">
              <TabsList className="bg-background border border-muted-200">
                <TabsTrigger
                  value="tooltip-positions-example"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Exemplo</Text>
                </TabsTrigger>
                <TabsTrigger
                  value="tooltip-positions-code"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Código</Text>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tooltip-positions-example">
                <div className="w-full flex justify-center items-center p-6 bg-muted-100 border border-muted-200 rounded-lg">
                  <div className="grid grid-cols-2 gap-12 p-12">
                    {(["top", "right", "bottom", "left"] as const).map(
                      (side) => (
                        <Tooltip key={side} defaultOpen>
                          <TooltipTrigger asChild>
                            <Button variant="secondary">{side}</Button>
                          </TooltipTrigger>
                          <TooltipContent side={side} sideOffset={8}>
                            Tooltip à {side}
                          </TooltipContent>
                        </Tooltip>
                      ),
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tooltip-positions-code">
                <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <pre className="w-full overflow-auto scrollbar-thin mr-1">
                    <code>{tooltipPositionsExample}</code>
                  </pre>
                  <Button
                    startContent={<Copy size={20} className="text-zinc-600" />}
                    onClick={() => copy(tooltipPositionsExample)}
                    className="bg-transparent border-none p-0"
                    aria-label="Copiar código"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TooltipProvider>
        </div>

        <div id="variantes" className="flex flex-col gap-3 py-4">
          <Heading>Variantes</Heading>
          <Text className="indent-8">
            Escolha uma variante visual para destacar a informação conforme o
            contexto.
          </Text>
          <Separator size="xs" />
          <TooltipProvider>
            <Tabs defaultValue="tooltip-variants-example" className="w-full">
              <TabsList className="bg-background border border-muted-200">
                <TabsTrigger
                  value="tooltip-variants-example"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Exemplo</Text>
                </TabsTrigger>
                <TabsTrigger
                  value="tooltip-variants-code"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Código</Text>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tooltip-variants-example">
                <div className="w-full flex justify-center items-center p-6 bg-muted-100 border border-muted-200 rounded-lg">
                  <div className="grid grid-cols-2 gap-12 p-12">
                    {(
                      [
                        "default",
                        "dark",
                        "primary",
                        "primary-bordered",
                        "primary-ghost",
                        "secondary",
                        "success",
                        "warning",
                        "danger",
                      ] as const
                    ).map((variant) => (
                      <Tooltip key={variant} defaultOpen>
                        <TooltipTrigger asChild>
                          <Button variant={variant}>{variant}</Button>
                        </TooltipTrigger>
                        <TooltipContent
                          variant={variant}
                          side="top"
                          sideOffset={8}
                        >
                          Tooltip {variant}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="tooltip-variants-code">
                <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <pre className="w-full overflow-auto scrollbar-thin mr-1">
                    <code>{tooltipVariantsExample}</code>
                  </pre>
                  <Button
                    startContent={<Copy size={20} className="text-zinc-600" />}
                    onClick={() => copy(tooltipVariantsExample)}
                    className="bg-transparent border-none p-0"
                    aria-label="Copiar código"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TooltipProvider>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Personalize o atraso e a distância entre o acionador e o conteúdo.
          </Text>
          <Separator size="xs" />
          <TooltipProvider delayDuration={300}>
            <Tabs defaultValue="tooltip-properties-example" className="w-full">
              <TabsList className="bg-background border border-muted-200">
                <TabsTrigger
                  value="tooltip-properties-example"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Exemplo</Text>
                </TabsTrigger>
                <TabsTrigger
                  value="tooltip-properties-code"
                  className="data-active:bg-primary-100"
                >
                  <Text size="sm">Código</Text>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tooltip-properties-example">
                <div className="w-full flex justify-center items-center p-6 bg-muted-100 border border-muted-200 rounded-lg">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="default">Com atraso</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={8}>
                      Aparece após 300 ms
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TabsContent>
              <TabsContent value="tooltip-properties-code">
                <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <pre className="w-full overflow-auto scrollbar-thin mr-1">
                    <code>{tooltipPropertiesExample}</code>
                  </pre>
                  <Button
                    startContent={<Copy size={20} className="text-zinc-600" />}
                    onClick={() => copy(tooltipPropertiesExample)}
                    className="bg-transparent border-none p-0"
                    aria-label="Copiar código"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TooltipProvider>
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
                    <Text>Define o estilo visual do conteúdo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>delayDuration</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Tempo de espera antes de abrir a dica.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>0</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>side</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Lado preferencial para exibir o conteúdo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>top</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>sideOffset</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Distância entre o acionador e o conteúdo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>0</Text>
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
