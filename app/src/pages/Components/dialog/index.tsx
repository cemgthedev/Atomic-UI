import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
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
  dialogExample,
  dialogPropertiesExample,
} from "@/pages/Components/dialog/codes";
import { dialogSourceCode } from "@/pages/Components/dialog/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

const sectionLinks: UrlProps[] = [
  { name: "Importação", href: `/${urls.components}/${urls.dialog}#importacao` },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.dialog}#propriedades`,
  },
];

export function DialogDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Dialog</Heading>
              <Text className="indent-8">
                Exibe conteúdos, formulários ou confirmações em uma janela modal
                que exige atenção antes de retornar à interface principal.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(dialogSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="dialog-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="dialog-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="dialog-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dialog-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="primary">Abrir Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <Heading size="sm">Excluir projeto?</Heading>
                      <Text size="sm">Esta ação não poderá ser desfeita.</Text>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="dark-ghost">Cancelar</Button>
                      </DialogClose>
                      <Button variant="primary">Excluir</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
            <TabsContent value="dialog-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dialogExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dialogExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Propriedades para personalizar o componente Dialog.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="dialog-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="dialog-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="dialog-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dialog-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="primary">
                      Abrir Dialog personalizado
                    </Button>
                  </DialogTrigger>
                  <DialogContent showCloseButton={false}>
                    <DialogHeader>
                      <Heading size="sm">Fechamento personalizado</Heading>
                      <Text size="sm">
                        O botão de fechar padrão foi desabilitado.
                      </Text>
                    </DialogHeader>
                    <DialogFooter showCloseButton>
                      <Button variant="primary">Confirmar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
            <TabsContent value="dialog-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dialogPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dialogPropertiesExample)}
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
                    <Text>showCloseButton (DialogContent)</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define se o botão de fechar no canto do conteúdo é
                      exibido.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>true</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>showCloseButton (DialogFooter)</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define se um botão de fechar é adicionado ao rodapé.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>false</Text>
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
