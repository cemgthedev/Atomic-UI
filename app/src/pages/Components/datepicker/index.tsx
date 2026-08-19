import {
  Button,
  DatePickerMultiple,
  DatePickerRange,
  DatePickerSimple,
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
  datePickerExample,
  datePickerModesExample,
  datePickerPropertiesExample,
  datePickerVariantsExample,
} from "@/pages/Components/datepicker/codes";
import { datePickerSourceCode } from "@/pages/Components/datepicker/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.datepicker}#importacao`,
  },
  {
    name: "Modos",
    href: `/${urls.components}/${urls.datepicker}#modos`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.datepicker}#variantes`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.datepicker}#propriedades`,
  },
];

export function DatepickerDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Datepicker</Heading>
              <Text className="indent-8">
                Componentes para seleção de datas nos modos simples, intervalo e
                múltiplo.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(datePickerSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="datepicker-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="datepicker-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="datepicker-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="datepicker-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap items-center gap-4">
                  <DatePickerSimple placeholder="Padrão" />
                  <DatePickerRange placeholder="Selecione um período" />
                  <DatePickerMultiple placeholder="Selecione datas" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="datepicker-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{datePickerExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(datePickerExample)}
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
                Exemplos de variantes de input e calendário.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="datepicker-variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="datepicker-variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="datepicker-variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="datepicker-variants-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap items-center gap-4">
                  <DatePickerSimple
                    placeholder="Padrão"
                    inputVariant="default"
                    calendarVariant="default"
                  />
                  <DatePickerSimple
                    placeholder="Primary"
                    inputVariant="primary"
                    calendarVariant="primary"
                  />
                  <DatePickerSimple
                    placeholder="Secondary"
                    inputVariant="secondary"
                    calendarVariant="secondary"
                  />
                  <DatePickerSimple
                    placeholder="Success"
                    inputVariant="success"
                    calendarVariant="success"
                  />
                  <DatePickerSimple
                    placeholder="Warning"
                    inputVariant="warning"
                    calendarVariant="warning"
                  />
                  <DatePickerSimple
                    placeholder="Danger"
                    inputVariant="danger"
                    calendarVariant="danger"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="datepicker-variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{datePickerVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(datePickerVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Modos */}
        <div id="modos" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Modos</Heading>
              <Text className="indent-8">
                Exemplos dos três modos de seleção de data.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="datepicker-modes-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="datepicker-modes-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="datepicker-modes-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="datepicker-modes-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap items-center gap-4">
                  <DatePickerSimple placeholder="Padrão" />
                  <DatePickerRange placeholder="Selecione um período" />
                  <DatePickerMultiple placeholder="Selecione datas" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="datepicker-modes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{datePickerModesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(datePickerModesExample)}
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
                Propriedades para personalizar os componentes DatePicker.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="datepicker-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="datepicker-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="datepicker-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="datepicker-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <DatePickerSimple
                  placeholder="Selecione uma data"
                  inputVariant="default"
                  inputRounded="md"
                  calendarVariant="default"
                  calendarRounded="md"
                />
              </div>
            </TabsContent>
            <TabsContent value="datepicker-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{datePickerPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(datePickerPropertiesExample)}
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
                    <Text>placeholder</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Texto exibido quando não há valor selecionado.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>"Selecione uma data"</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>inputVariant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a aparência do campo de texto.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>inputRounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o arredondamento do campo de texto.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>calendarVariant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a aparência do calendário.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>calendarRounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define o arredondamento dos botões do calendário.
                    </Text>
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
