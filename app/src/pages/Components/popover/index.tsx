import {
  Button,
  Heading,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
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
  popoverExample,
  popoverPropertiesExample,
  popoverTriggersExample,
} from "@/pages/Components/popover/codes";
import { popoverSourceCode } from "@/pages/Components/popover/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.popover}#importacao`,
  },
  {
    name: "Posicionamento",
    href: `/${urls.components}/${urls.popover}#posicionamento`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.popover}#propriedades`,
  },
];

export function PopoverDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Popover</Heading>
              <Text className="indent-8">
                Apresenta conteúdos contextuais próximos ao elemento acionador,
                sem interromper o fluxo principal da interface.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(popoverSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="popover-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="popover-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="popover-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="popover-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="primary">Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader>
                      <PopoverTitle>Popover simples</PopoverTitle>
                      <PopoverDescription>
                        Este conteúdo aparece sobre o trigger quando o popover é
                        aberto.
                      </PopoverDescription>
                    </PopoverHeader>
                  </PopoverContent>
                </Popover>
              </div>
            </TabsContent>
            <TabsContent value="popover-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{popoverExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(popoverExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Posicionamento */}
        <div id="posicionamento" className="flex flex-col gap-3 py-4">
          <Heading>Posicionamento</Heading>
          <Text className="indent-8">
            Exemplos de alinhamento e posicionamento do Popover.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="popover-trigger-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="popover-trigger-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="popover-trigger-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="popover-trigger-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-10">
                  {(["start", "center", "end"] as const).map((align) => (
                    <Popover defaultOpen>
                      <PopoverTrigger asChild>
                        <Button variant="primary">Align {align}</Button>
                      </PopoverTrigger>
                      <PopoverContent align={align} sideOffset={8}>
                        <PopoverHeader>
                          <PopoverTitle>Align {align}</PopoverTitle>
                        </PopoverHeader>
                      </PopoverContent>
                    </Popover>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="popover-trigger-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{popoverTriggersExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(popoverTriggersExample)}
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
            Propriedades para personalizar o Popover.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="popover-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="popover-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="popover-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="popover-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Popover defaultOpen>
                  <PopoverTrigger asChild>
                    <Button variant="default">Abrir</Button>
                  </PopoverTrigger>
                  <PopoverContent align="center" sideOffset={4}>
                    <PopoverHeader>
                      <PopoverTitle>Popover com propriedades</PopoverTitle>
                    </PopoverHeader>
                  </PopoverContent>
                </Popover>
              </div>
            </TabsContent>
            <TabsContent value="popover-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{popoverPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(popoverPropertiesExample)}
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
                    <Text>Popover</Text>
                  </TableCell>
                  <TableCell>
                    <Text>defaultOpen</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define se o popover inicia aberto.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>false</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Popover</Text>
                  </TableCell>
                  <TableCell>
                    <Text>align</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Alinha o conteúdo em relação ao trigger.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>center</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Popover</Text>
                  </TableCell>
                  <TableCell>
                    <Text>sideOffset</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Distância entre o trigger e o conteúdo.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>4</Text>
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
