import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
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
  dropdownMenuCheckboxExample,
  dropdownMenuExample,
  dropdownMenuItemsExample,
  dropdownMenuPropertiesExample,
  dropdownMenuRadioExample,
  dropdownMenuSubExample,
} from "@/pages/Components/dropdown-menu/codes";
import { dropdownMenuSourceCode } from "@/pages/Components/dropdown-menu/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.dropdown_menu}#importacao`,
  },
  {
    name: "Items",
    href: `/${urls.components}/${urls.dropdown_menu}#items`,
  },
  {
    name: "Checkbox",
    href: `/${urls.components}/${urls.dropdown_menu}#checkbox`,
  },
  {
    name: "Radio",
    href: `/${urls.components}/${urls.dropdown_menu}#radio`,
  },
  {
    name: "Sub Menu",
    href: `/${urls.components}/${urls.dropdown_menu}#sub_menu`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.dropdown_menu}#propriedades`,
  },
];

export function DropdownMenuDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>DropdownMenu</Heading>
              <Text className="indent-8">
                {" "}
                Apresenta uma lista de ações ou opções em um menu contextual
                compacto, acessível a partir de um gatilho.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(dropdownMenuSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="dropdown-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="dropdown-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="dropdown-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dropdown-exemple">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem variant={"primary-ghost"}>
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>
                      Keyboard shortcuts
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            <TabsContent value="dropdown-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dropdownMenuExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dropdownMenuExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Items */}
        <div id="items" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Items</Heading>
              <Text className="indent-8">
                Exemplos de items no DropdownMenu.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="items-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="items-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="items-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="items-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Text>My Account</Text>
                    <Separator className="mt-2" />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <Separator className="mb-2" />
                    <DropdownMenuItem variant={"danger"}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            <TabsContent value="items-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dropdownMenuItemsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dropdownMenuItemsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Checkbox */}
        <div id="checkbox" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Checkbox</Heading>
              <Text className="indent-8">
                Exemplos de checkbox no DropdownMenu.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="checkbox-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="checkbox-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="checkbox-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="checkbox-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>Checkbox items</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked={true}>
                      Show status bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem disabled>
                      Show disabled bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Show panel
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            <TabsContent value="checkbox-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dropdownMenuCheckboxExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dropdownMenuCheckboxExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Radio */}
        <div id="radio" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Radio</Heading>
              <Text className="indent-8">
                Exemplos de radio no DropdownMenu.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="radio-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="radio-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="radio-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="radio-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>Radio items</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Text>Panel position</Text>
                    <Separator className="mt-1" />
                    <DropdownMenuRadioGroup value="bottom">
                      <DropdownMenuRadioItem value="top">
                        Top
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="bottom">
                        Bottom
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="right">
                        Right
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            <TabsContent value="radio-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dropdownMenuRadioExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dropdownMenuRadioExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sub Menu */}
        <div id="sub_menu" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Sub Menu</Heading>
              <Text className="indent-8">
                Exemplos de sub menu no DropdownMenu.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="sub-menu-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="sub-menu-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="sub-menu-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sub-menu-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>Submenu</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>New tab</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            <TabsContent value="sub-menu-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dropdownMenuSubExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dropdownMenuSubExample)}
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
                {" "}
                Propriedades para estilização do componente DropdownMenu.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="properties-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="properties-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="properties-exemple">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <DropdownMenu>
                  <DropdownMenuTrigger>Menu properties</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem inset variant="default" size="sm">
                      Small item
                    </DropdownMenuItem>
                    <DropdownMenuItem inset variant="default" size="md">
                      Medium item
                    </DropdownMenuItem>
                    <DropdownMenuItem inset variant="default" size="lg">
                      Large item
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger inset size="md">
                        More options
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Option one</DropdownMenuItem>
                          <DropdownMenuItem>Option two</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{dropdownMenuPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(dropdownMenuPropertiesExample)}
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
                    <Text>DropdownMenu</Text>
                  </TableCell>
                  <TableCell>
                    <Text>open</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Controla o estado aberto ou fechado do menu.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>DropdownMenu</Text>
                  </TableCell>
                  <TableCell>
                    <Text>defaultOpen</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define o estado inicial do menu quando usado de forma não
                      controlada.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>false</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>DropdownMenu</Text>
                  </TableCell>
                  <TableCell>
                    <Text>onOpenChange</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Callback executado sempre que o estado de abertura do menu
                      é alterado.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>DropdownMenu</Text>
                  </TableCell>
                  <TableCell>
                    <Text>modal</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define se o menu deve ser modal, bloqueando interação com
                      o restante da interface enquanto estiver aberto.
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
