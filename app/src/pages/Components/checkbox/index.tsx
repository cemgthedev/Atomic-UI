import {
  Button,
  Checkbox,
  Divider,
  Heading,
  Label,
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
  checkboxExample,
  checkboxPropertiesExample,
  checkboxStatesExample,
  checkboxVariantsExample,
} from "@/pages/Components/checkbox/codes";
import { checkboxSourceCode } from "@/pages/Components/checkbox/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.checkbox}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.checkbox}#variantes`,
  },
  {
    name: "Estados",
    href: `/${urls.components}/${urls.checkbox}#estados`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.checkbox}#propriedades`,
  },
];

export function CheckboxDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Checkbox</Heading>
              <Text className="indent-8">
                Componente de seleção binária com suporte a variantes, estados e
                ícone.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(checkboxSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Divider size="xs" />

          <Tabs defaultValue="checkbox-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="checkbox-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="checkbox-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="checkbox-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked id="checkbox-example" />
                  <label
                    htmlFor="checkbox-example"
                    className="text-sm font-medium"
                  >
                    Aceitar termos
                  </label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="checkbox-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{checkboxExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(checkboxExample)}
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
                Exemplos de variantes do componente Checkbox.
              </Text>
            </div>
          </div>

          <Divider size="xs" />

          <Tabs defaultValue="checkbox-variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="checkbox-variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="checkbox-variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="checkbox-variants-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      defaultChecked
                      variant="default"
                      id="checkbox-variant-default"
                    />
                    <label
                      htmlFor="checkbox-variant-default"
                      className="text-sm"
                    >
                      default
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      defaultChecked
                      variant="primary"
                      id="checkbox-variant-primary"
                    />
                    <label
                      htmlFor="checkbox-variant-primary"
                      className="text-sm"
                    >
                      primary
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      defaultChecked
                      variant="success"
                      id="checkbox-variant-success"
                    />
                    <label
                      htmlFor="checkbox-variant-success"
                      className="text-sm"
                    >
                      success
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      defaultChecked
                      variant="warning"
                      id="checkbox-variant-warning"
                    />
                    <label
                      htmlFor="checkbox-variant-warning"
                      className="text-sm"
                    >
                      warning
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      defaultChecked
                      variant="danger"
                      id="checkbox-variant-danger"
                    />
                    <label
                      htmlFor="checkbox-variant-danger"
                      className="text-sm"
                    >
                      danger
                    </label>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="checkbox-variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{checkboxVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(checkboxVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Estados */}
        <div id="estados" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Estados</Heading>
              <Text className="indent-8">
                Exemplos de estados desabilitado e inválido.
              </Text>
            </div>
          </div>

          <Divider size="xs" />

          <Tabs defaultValue="checkbox-states-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="checkbox-states-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="checkbox-states-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="checkbox-states-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked id="checkbox-state-default" />
                    <label htmlFor="checkbox-state-default" className="text-sm">
                      Padrão
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox disabled id="checkbox-state-disabled" />
                    <label
                      htmlFor="checkbox-state-disabled"
                      className="text-sm"
                    >
                      Desabilitado
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      aria-invalid
                      defaultChecked
                      id="checkbox-state-invalid"
                    />
                    <label htmlFor="checkbox-state-invalid" className="text-sm">
                      Inválido
                    </label>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="checkbox-states-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{checkboxStatesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(checkboxStatesExample)}
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
                Propriedades para personalizar o Checkbox.
              </Text>
            </div>
          </div>

          <Divider size="xs" />

          <Tabs defaultValue="checkbox-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="checkbox-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="checkbox-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="checkbox-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Checkbox
                    defaultChecked
                    variant="primary"
                    rounded="lg"
                    id="checkbox-properties"
                  />
                  <label
                    htmlFor="checkbox-properties"
                    className="text-sm font-medium"
                  >
                    Aprovar
                  </label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="checkbox-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{checkboxPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(checkboxPropertiesExample)}
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
                    <Text>Define a aparência visual do checkbox.</Text>
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
                    <Text>Define o tamanho do checkbox.</Text>
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
                    <Text>Define o arredondamento do checkbox.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>defaultChecked</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o estado inicial marcado.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>false</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>icon</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Exibe um ícone personalizado no checkbox.</Text>
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

      <aside className="min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] min-w-fit max-w-fit border-l border-muted-200 px-3 py-8 flex flex-col gap-2 overflow-auto scrollbar-none">
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
