import {
  Button,
  Heading,
  Label,
  Separator,
  Slider,
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
  sliderExample,
  sliderOrientationExample,
  sliderPropertiesExample,
  sliderRangeExample,
  sliderStatesExample,
  sliderVariantsExample,
} from "@/pages/Components/slider/codes";
import { sliderSourceCode } from "@/pages/Components/slider/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  { name: "Importação", href: `/${urls.components}/${urls.slider}#importacao` },
  { name: "Intervalo", href: `/${urls.components}/${urls.slider}#intervalo` },
  { name: "Orientação", href: `/${urls.components}/${urls.slider}#orientacao` },
  { name: "Estados", href: `/${urls.components}/${urls.slider}#estados` },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.slider}#propriedades`,
  },
];

export function SliderDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Slider</Heading>
              <Text className="indent-8">
                Permite selecionar e ajustar valores dentro de um intervalo
                definido utilizando um controle deslizante interativo.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(sliderSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="slider-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="slider-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="slider-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="slider-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-md">
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="slider-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sliderExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sliderExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="variants" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col gap-1">
            <Heading>Variants</Heading>
            <Text className="indent-8">
              O Slider possui variantes de cores para representar diferentes
              contextos visuais.
            </Text>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="slider-variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="slider-variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>

              <TabsTrigger
                value="slider-variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="slider-variants-example">
              <div className="w-full flex justify-center items-center p-4 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-2xl flex flex-col gap-6">
                  {(
                    [
                      "default",
                      "dark",
                      "muted",
                      "primary",
                      "secondary",
                      "success",
                      "warning",
                      "danger",
                    ] as const
                  ).map((variant) => (
                    <div key={variant} className="flex flex-col gap-2">
                      <Label className="capitalize">{variant}</Label>
                      <Slider variant={variant} defaultValue={[60]} />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="slider-variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sliderVariantsExample}</code>
                </pre>

                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sliderVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="intervalo" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col gap-1">
            <Heading>Intervalo</Heading>
            <Text className="indent-8">
              Use dois valores para permitir a seleção de um intervalo.
            </Text>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="slider-range-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="slider-range-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="slider-range-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="slider-range-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-md">
                  <Slider defaultValue={[25, 75]} max={100} step={1} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="slider-range-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sliderRangeExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sliderRangeExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="orientacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col gap-1">
            <Heading>Orientação</Heading>
            <Text className="indent-8">
              O slider também pode ser exibido verticalmente.
            </Text>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="slider-orientation-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="slider-orientation-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="slider-orientation-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="slider-orientation-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex h-48 justify-center">
                  <Slider
                    defaultValue={[40]}
                    max={100}
                    step={1}
                    orientation="vertical"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="slider-orientation-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sliderOrientationExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sliderOrientationExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="estados" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col gap-1">
            <Heading>Estados</Heading>
            <Text className="indent-8">
              Compare o estado padrão com o estado desabilitado.
            </Text>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="slider-states-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="slider-states-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="slider-states-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="slider-states-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex w-full max-w-md flex-col gap-6">
                  <Slider defaultValue={[70]} max={100} step={1} />
                  <Slider defaultValue={[40]} disabled max={100} step={1} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="slider-states-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sliderStatesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sliderStatesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <div className="flex flex-col gap-1">
            <Heading>Propriedades</Heading>
            <Text className="indent-8">
              Propriedades para configurar o intervalo e o comportamento do
              Slider.
            </Text>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="slider-properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="slider-properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="slider-properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="slider-properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-md">
                  <Slider
                    defaultValue={[20, 80]}
                    min={0}
                    max={100}
                    step={5}
                    minStepsBetweenThumbs={2}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="slider-properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{sliderPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(sliderPropertiesExample)}
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
                    <Text>defaultValue</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define os valores iniciais do slider.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>[min, max]</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>min</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o menor valor permitido.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>0</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>max</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o maior valor permitido.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>100</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>step</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o incremento entre valores.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>1</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>orientation</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a orientação do slider.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>horizontal</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>disabled</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Desabilita a interação.</Text>
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
