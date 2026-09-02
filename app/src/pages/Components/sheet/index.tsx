import {
  Button,
  Heading,
  Label,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
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
  sheetExample,
  sheetPropertiesExample,
  sheetSidesExample,
} from "@/pages/Components/sheet/codes";
import { codeSourceSheet } from "@/pages/Components/sheet/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.sheet}#importacao`,
  },
  {
    name: "Posicionamento",
    href: `/${urls.components}/${urls.sheet}#posicionamento`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.sheet}#propriedades`,
  },
];

export function SheetDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Sheet</Heading>
              <Text className="indent-8">
                Exibe um painel sobreposto que desliza pela interface para
                apresentar conteúdos, ações ou formulários temporários.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(codeSourceSheet)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="sheet-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="sheet-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="sheet-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sheet-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="primary">Abrir Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <Heading size="sm">Sheet simples</Heading>
                      <Text size="sm">
                        Este conteúdo é exibido em um painel lateral.
                      </Text>
                    </SheetHeader>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button variant="dark-ghost">Fechar</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </TabsContent>
            <TabsContent value="sheet-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sheetExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sheetExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="posicionamento" className="flex flex-col gap-3 py-4">
          <Heading>Posicionamento</Heading>
          <Text className="indent-8">
            Defina o lado em que o painel deve ser exibido.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="sheet-sides-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="sheet-sides-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="sheet-sides-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sheet-sides-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap justify-center gap-3">
                  {(["top", "right", "bottom", "left"] as const).map((side) => (
                    <Sheet key={side}>
                      <SheetTrigger asChild>
                        <Button variant="primary">{side}</Button>
                      </SheetTrigger>
                      <SheetContent side={side}>
                        <SheetHeader>
                          <Heading size="sm">Sheet {side}</Heading>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sheet-sides-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sheetSidesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sheetSidesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Propriedades para personalizar o componente Sheet.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="sheet-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="sheet-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="sheet-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sheet-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="primary">Abrir sem botão de fechar</Button>
                  </SheetTrigger>
                  <SheetContent side="left" showCloseButton={false}>
                    <SheetHeader>
                      <Heading size="sm">Sheet personalizado</Heading>
                      <Text size="sm">
                        Use side e showCloseButton para personalizar.
                      </Text>
                    </SheetHeader>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button variant="dark-ghost">Fechar</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </TabsContent>
            <TabsContent value="sheet-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sheetPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sheetPropertiesExample)}
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
                    <Text>Sheet</Text>
                  </TableCell>
                  <TableCell>
                    <Text>side</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o lado em que o painel é exibido.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>right</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Sheet</Text>
                  </TableCell>
                  <TableCell>
                    <Text>showCloseButton</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define se o botão de fechar é exibido.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>true</Text>
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
