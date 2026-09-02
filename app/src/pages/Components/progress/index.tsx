import {
  Button,
  Heading,
  Label,
  Progress,
  ProgressValue,
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
  progressAnimatedExample,
  progressExample,
  progressPropertiesExample,
  progressRoundsExample,
  progressSizesExample,
  progressStripedExample,
  progressVariantsExample,
} from "@/pages/Components/progress/codes";
import { progressSourceCode } from "@/pages/Components/progress/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.progress}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.progress}#variantes`,
  },
  {
    name: "Tamanhos",
    href: `/${urls.components}/${urls.progress}#tamanhos`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.progress}#arredondamentos`,
  },
  {
    name: "Listras",
    href: `/${urls.components}/${urls.progress}#listras`,
  },
  {
    name: "Animação",
    href: `/${urls.components}/${urls.progress}#animacao`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.progress}#propriedades`,
  },
];

export function ProgressDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Progress</Heading>
              <Text className="indent-8">
                Representa o progresso de uma tarefa ou processo por meio de uma
                barra visual simples e atualizável.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(progressSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="progress-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="progress-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="progress-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="progress-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-md">
                  <Progress value={60}>
                    <ProgressValue value={60} />
                  </Progress>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="progress-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{progressExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(progressExample)}
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
                Exemplos de variantes do componente Progress.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="variants-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-4 w-full">
                  <Progress value={40} variant="primary">
                    <ProgressValue value={40} variant="primary" />
                  </Progress>
                  <Progress value={40} variant="secondary">
                    <ProgressValue value={40} variant="secondary" />
                  </Progress>
                  <Progress value={70} variant="success">
                    <ProgressValue value={70} variant="success" />
                  </Progress>
                  <Progress value={70} variant="warning">
                    <ProgressValue value={70} variant="warning" />
                  </Progress>
                  <Progress value={70} variant="danger">
                    <ProgressValue value={70} variant="danger" />
                  </Progress>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{progressVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(progressVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Tamanhos */}
        <div id="tamanhos" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Tamanhos</Heading>
              <Text className="indent-8">
                Exemplos de tamanhos do componente Progress.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="sizes-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="sizes-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="sizes-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sizes-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-4 w-full">
                  <div className="space-y-1">
                    <Progress value={40} size="xs">
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>xs</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress value={40} size="sm">
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>sm</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress value={40}>
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>md</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress value={40} size="lg">
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>lg</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress value={40} size="xl">
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>xl</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{progressSizesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(progressSizesExample)}
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
              <Heading>Arrendondamentos</Heading>
              <Text className="indent-8">
                Exemplos de arredondamentos do componente Badge.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="rounds-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="rounds-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="rounds-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rounds-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-4 w-full">
                  <div className="space-y-1">
                    <Progress
                      value={40}
                      variant="primary"
                      rounded="xs"
                      className="h-8"
                    >
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>xs</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress
                      value={40}
                      variant="primary"
                      rounded="sm"
                      className="h-8"
                    >
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>sm</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress
                      value={40}
                      variant="primary"
                      rounded="md"
                      className="h-8"
                    >
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>md</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress
                      value={40}
                      variant="primary"
                      rounded="lg"
                      className="h-8"
                    >
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>lg</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress
                      value={40}
                      variant="primary"
                      rounded="xl"
                      className="h-8"
                    >
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>xl</Text>
                  </div>
                  <div className="space-y-1">
                    <Progress value={40} variant="primary" className="h-8">
                      <ProgressValue value={40} variant="primary" />
                    </Progress>
                    <Text>full</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rounds-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{progressRoundsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(progressRoundsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Listras */}
        <div id="listras" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Listras</Heading>
              <Text className="indent-8">
                Exemplos de barras com efeito de listras no componente Progress.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="stripes-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="stripes-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="stripes-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="stripes-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-4 w-full">
                  <Progress value={40} variant="primary">
                    <ProgressValue value={40} variant="primary" striped />
                  </Progress>
                  <Progress value={60} variant="success">
                    <ProgressValue value={60} variant="success" striped />
                  </Progress>
                  <Progress value={80} variant="warning">
                    <ProgressValue value={80} variant="warning" striped />
                  </Progress>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="stripes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{progressStripedExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(progressStripedExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Animação */}
        <div id="animacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Animação</Heading>
              <Text className="indent-8">
                Exemplos de barras com animação no componente Progress.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="animation-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="animation-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="animation-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="animation-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-col gap-4 w-full">
                  <Progress value={40} variant="primary">
                    <ProgressValue
                      value={40}
                      variant="primary"
                      striped
                      animated
                    />
                  </Progress>
                  <Progress value={60} variant="secondary">
                    <ProgressValue
                      value={60}
                      variant="secondary"
                      striped
                      animated
                    />
                  </Progress>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="animation-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{progressAnimatedExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(progressAnimatedExample)}
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
                Propriedades para estilização do componente Progress.
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
                <Progress
                  value={70}
                  variant="default"
                  size={"md"}
                  rounded={"md"}
                >
                  <ProgressValue value={70} variant="default" />
                </Progress>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{progressPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(progressPropertiesExample)}
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
                    <Text>Progress</Text>
                  </TableCell>
                  <TableCell>
                    <Text>variant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a aparência visual do progress.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Progress</Text>
                  </TableCell>
                  <TableCell>
                    <Text>size</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Controla o tamanho do progress.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Progress</Text>
                  </TableCell>
                  <TableCell>
                    <Text>rounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o arredondamento das bordas.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>full</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Progress</Text>
                  </TableCell>
                  <TableCell>
                    <Text>striped</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Aplica um efeito de listras decorativas à barra.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>false</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Progress</Text>
                  </TableCell>
                  <TableCell>
                    <Text>animated</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Ativa uma animação visual na barra de progresso.
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
