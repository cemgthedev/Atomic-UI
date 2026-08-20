import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
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
  drawerDirectionsExample,
  drawerExample,
  drawerPropertiesExample,
} from "@/pages/Components/drawer/codes";
import { drawerSourceCode } from "@/pages/Components/drawer/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";

const sectionLinks: UrlProps[] = [
  { name: "Importação", href: `/${urls.components}/${urls.drawer}#importacao` },
  {
    name: "Direcionamento",
    href: `/${urls.components}/${urls.drawer}#direcionamento`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.drawer}#propriedades`,
  },
];

type ExampleProps = { value: string; example: string; children: ReactNode };

function Example({ value, example, children }: ExampleProps) {
  return (
    <Tabs defaultValue={`${value}-example`} className="w-full">
      <TabsList className="bg-background border border-muted-200">
        <TabsTrigger
          value={`${value}-example`}
          className="data-active:bg-primary-100"
        >
          <Text size="sm">Exemplo</Text>
        </TabsTrigger>
        <TabsTrigger
          value={`${value}-code`}
          className="data-active:bg-primary-100"
        >
          <Text size="sm">Código</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value={`${value}-example`}>
        <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
          {children}
        </div>
      </TabsContent>
      <TabsContent value={`${value}-code`}>
        <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
          <pre className="w-full overflow-auto scrollbar-thin mr-1">
            <code>{example}</code>
          </pre>
          <Button
            startContent={<Copy size={20} className="text-zinc-600" />}
            onClick={() => copy(example)}
            className="bg-transparent border-none p-0"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}

export function DrawerDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Drawer</Heading>
              <Text className="indent-8">
                Componente para exibir conteúdo em um painel deslizante que pode
                ser arrastado para fechar.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(drawerSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Example value="drawer" example={drawerExample}>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="primary">Abrir Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <Heading size="sm">Drawer simples</Heading>
                  <Text size="sm">
                    Deslize o painel para baixo para fechá-lo.
                  </Text>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="dark-ghost">Fechar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Example>
        </div>

        {/* Direcionamento */}
        <div id="direcionamento" className="flex flex-col gap-3 py-4">
          <Heading>Direcionamento</Heading>
          <Text className="indent-8">
            Defina a direção de abertura do painel.
          </Text>
          <Separator size="xs" />
          <Example value="drawer-directions" example={drawerDirectionsExample}>
            <div className="flex flex-wrap justify-center gap-3">
              {(["top", "right", "bottom", "left"] as const).map(
                (direction) => (
                  <Drawer key={direction} direction={direction}>
                    <DrawerTrigger asChild>
                      <Button variant="primary">{direction}</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <Heading size="sm">Drawer {direction}</Heading>
                      </DrawerHeader>
                    </DrawerContent>
                  </Drawer>
                ),
              )}
            </div>
          </Example>
        </div>

        {/* Propriedades */}
        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Propriedades para personalizar o componente Drawer.
          </Text>
          <Separator size="xs" />
          <Example value="drawer-properties" example={drawerPropertiesExample}>
            <Drawer direction="right" modal={false}>
              <DrawerTrigger asChild>
                <Button variant="primary">Abrir Drawer não modal</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <Heading size="sm">Drawer personalizado</Heading>
                  <Text size="sm">
                    O conteúdo ao fundo permanece interativo.
                  </Text>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="dark-ghost">Fechar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Example>
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
                    <Text>direction</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a direção em que o painel é exibido.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>bottom</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>modal</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define se o Drawer bloqueia a interação com o conteúdo ao
                      fundo.
                    </Text>
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
