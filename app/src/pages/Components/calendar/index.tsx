import {
  Button,
  Calendar,
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
  calendarExample,
  calendarModeExample,
  calendarPropertiesExample,
  calendarRoundsExample,
  calendarVariantsExample,
} from "@/pages/Components/calendar/codes";
import { calendarSourceCode } from "@/pages/Components/calendar/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.calendar}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.calendar}#variantes`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.calendar}#arredondamentos`,
  },
  {
    name: "Modos",
    href: `/${urls.components}/${urls.calendar}#modos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.calendar}#propriedades`,
  },
];

export function CalendarDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Calendar</Heading>
              <Text className="indent-8">
                Exibe um calendário para navegação e seleção de datas com opções
                de estilo do botão.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(calendarSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="calendar-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="calendar-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="calendar-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="calendar-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Calendar mode="single" showOutsideDays />
              </div>
            </TabsContent>
            <TabsContent value="calendar-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{calendarExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(calendarExample)}
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
                Exemplos de variantes de botões usados pelo componente Calendar.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="calendar-variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="calendar-variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="calendar-variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="calendar-variants-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <Calendar calendarButtonVariant="default" mode="single" />
                  <Calendar calendarButtonVariant="primary" mode="single" />
                  <Calendar
                    calendarButtonVariant="primary-bordered"
                    mode="single"
                  />
                  <Calendar
                    calendarButtonVariant="primary-ghost"
                    mode="single"
                  />
                  <Calendar calendarButtonVariant="secondary" mode="single" />
                  <Calendar calendarButtonVariant="success" mode="single" />
                  <Calendar calendarButtonVariant="warning" mode="single" />
                  <Calendar calendarButtonVariant="danger" mode="single" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="calendar-variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{calendarVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(calendarVariantsExample)}
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
                Exemplos de arredondamento dos botões do calendário.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="calendar-rounds-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="calendar-rounds-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="calendar-rounds-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="calendar-rounds-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-1">
                    <Calendar calendarButtonRounded="xs" mode="single" />
                    <Text>xs</Text>
                  </div>
                  <div className="space-y-1">
                    <Calendar calendarButtonRounded="sm" mode="single" />
                    <Text>sm</Text>
                  </div>
                  <div className="space-y-1">
                    <Calendar mode="single" />
                    <Text>md</Text>
                  </div>
                  <div className="space-y-1">
                    <Calendar calendarButtonRounded="lg" mode="single" />
                    <Text>lg</Text>
                  </div>
                  <div className="space-y-1">
                    <Calendar calendarButtonRounded="xl" mode="single" />
                    <Text>xl</Text>
                  </div>
                  <div className="space-y-1">
                    <Calendar calendarButtonRounded="full" mode="single" />
                    <Text>full</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="calendar-rounds-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{calendarRoundsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(calendarRoundsExample)}
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
                Exemplos de modos de seleção suportados pelo Calendar.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="calendar-modes-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="calendar-modes-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="calendar-modes-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="calendar-modes-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-1">
                    <Calendar mode="single" />
                    <Text>single</Text>
                  </div>
                  <div className="space-y-1">
                    <Calendar mode="range" />
                    <Text>range</Text>
                  </div>
                  <div className="space-y-1">
                    <Calendar mode="multiple" />
                    <Text>multiple</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="calendar-modes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{calendarModeExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(calendarModeExample)}
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
                Propriedades para personalizar o funcionamento e a aparência do
                Calendar.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="calendar-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="calendar-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="calendar-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="calendar-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Calendar
                  mode="single"
                  calendarButtonVariant="default"
                  calendarButtonRounded="md"
                />
              </div>
            </TabsContent>
            <TabsContent value="calendar-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{calendarPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(calendarPropertiesExample)}
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
                    <Text>calendarButtonVariant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o estilo dos botões de navegação.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>calendarButtonRounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define o arredondamento dos botões de navegação.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>showOutsideDays</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Controla se dias fora do mês atual são exibidos.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>true</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>mode</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o modo de seleção de datas.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>single</Text>
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
