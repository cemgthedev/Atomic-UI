import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  ImageContent,
  ImageFallback,
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
  cardExemple,
  cardPropertiesExemple,
  cardRoundsExemple,
  cardSizesExemple,
  cardVariantsExemple,
} from "@/pages/Components/card/codes";
import { cardSourceCode } from "@/pages/Components/card/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy, ExternalLinkIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.card}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.button}#variantes`,
  },
  {
    name: "Tamanhos",
    href: `/${urls.components}/${urls.card}#tamanhos`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.card}#arredondamentos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.card}#propriedades`,
  },
];

export function CardDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Card</Heading>
              <Text className="indent-8">
                {" "}
                Um componente de interface utilizado para agrupar e organizar
                informações relacionadas em uma área visual independente. É
                comum em dashboards, páginas de produtos, perfis, listas,
                artigos e seções informativas.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(cardSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="card-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="card-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="card-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="card-exemple">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Card
                  variant="primary-ghost"
                  size="md"
                  className="min-w-0 max-w-xs"
                >
                  <CardHeader>
                    <Image rounded="md" aspect="square" className="w-full h-40">
                      <ImageContent
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                        alt="Imagem"
                      />
                      <ImageFallback>Imagem</ImageFallback>
                    </Image>
                  </CardHeader>
                  <CardContent>
                    <Label>Serra da Mantiqueira</Label>
                    <Text>
                      Uma região montanhosa conhecida por suas paisagens
                      naturais, áreas de vegetação e cidades turísticas.
                    </Text>
                  </CardContent>
                  <CardFooter>
                    <Button variant="primary" size="xs">
                      <ExternalLinkIcon size={16} />
                      <Text size="sm">Saber mais</Text>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="card-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{cardExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(cardExemple)}
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
                Exemplos de variantes do componente Card.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="variants-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="variants-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="variants-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex justify-center flex-wrap gap-4">
                  {(
                    [
                      "primary",
                      "primary-bordered",
                      "primary-ghost",
                      "secondary",
                      "success",
                      "warning",
                      "danger",
                    ] as const
                  ).map((variant) => (
                    <Card
                      variant={variant}
                      size="md"
                      className="min-w-0 max-w-xs"
                    >
                      <CardHeader>
                        <Image
                          rounded="md"
                          aspect="square"
                          className="w-full h-40"
                        >
                          <ImageContent
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                            alt="Imagem"
                          />
                          <ImageFallback>Imagem</ImageFallback>
                        </Image>
                      </CardHeader>
                      <CardContent>
                        <Label>Serra da Mantiqueira</Label>
                        <Text>
                          Uma região montanhosa conhecida por suas paisagens
                          naturais, áreas de vegetação e cidades turísticas.
                        </Text>
                      </CardContent>
                      <CardFooter>
                        <Button variant={variant} size="xs">
                          <ExternalLinkIcon size={16} />
                          <Text size="sm">Saber mais</Text>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{cardVariantsExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(cardVariantsExemple)}
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
                Exemplos de tamanhos do componente Card.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="sizes-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="sizes-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="sizes-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sizes-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex justify-center flex-wrap gap-4">
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                    <Card
                      variant="dark-bordered"
                      size={size}
                      className="min-w-0"
                    >
                      <CardHeader>
                        <Image
                          rounded="md"
                          aspect="square"
                          className="w-full h-40"
                        >
                          <ImageContent
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                            alt="Imagem"
                          />
                          <ImageFallback>Imagem</ImageFallback>
                        </Image>
                      </CardHeader>
                      <CardContent>
                        <Label>Serra da Mantiqueira</Label>
                        <Text>
                          Uma região montanhosa conhecida por suas paisagens
                          naturais, áreas de vegetação e cidades turísticas.
                        </Text>
                      </CardContent>
                      <CardFooter>
                        <Button variant="dark-bordered" size="xs">
                          <ExternalLinkIcon size={16} />
                          <Text size="sm">Saber mais</Text>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{cardSizesExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(cardSizesExemple)}
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
                Exemplos de arredondamentos do componente Card.
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
                <div className="flex justify-center flex-wrap gap-4">
                  {(["xs", "sm", "md", "lg", "xl", "full"] as const).map(
                    (rounded) => (
                      <Card
                        variant="primary"
                        rounded={rounded}
                        className="min-w-0 max-w-sm"
                      >
                        <CardHeader>
                          <Image
                            rounded="md"
                            aspect="square"
                            className="w-full h-40"
                          >
                            <ImageContent
                              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                              alt="Imagem"
                            />
                            <ImageFallback>Imagem</ImageFallback>
                          </Image>
                        </CardHeader>
                        <CardContent>
                          <Label>Serra da Mantiqueira</Label>
                          <Text>
                            Uma região montanhosa conhecida por suas paisagens
                            naturais, áreas de vegetação e cidades turísticas.
                          </Text>
                        </CardContent>
                        <CardFooter>
                          <Button variant="primary" size="xs">
                            <ExternalLinkIcon size={16} />
                            <Text size="sm">Saber mais</Text>
                          </Button>
                        </CardFooter>
                      </Card>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rounds-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{cardRoundsExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(cardRoundsExemple)}
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
                Propriedades para estilização do componente Card.
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
                <Card
                  variant="default"
                  size="md"
                  rounded="md"
                  className="min-w-0 max-w-xs"
                >
                  <CardHeader>
                    <Image rounded="md" aspect="square" className="w-full h-40">
                      <ImageContent
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                        alt="Imagem"
                      />
                      <ImageFallback>Imagem</ImageFallback>
                    </Image>
                  </CardHeader>
                  <CardContent>
                    <Label>Serra da Mantiqueira</Label>
                    <Text>
                      Uma região montanhosa conhecida por suas paisagens
                      naturais, áreas de vegetação e cidades turísticas.
                    </Text>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" size="xs">
                      <ExternalLinkIcon size={16} />
                      <Text size="sm">Saber mais</Text>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{cardPropertiesExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(cardPropertiesExemple)}
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
                    <Text>Define a aparência visual do botão.</Text>
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
                    <Text>Controla o tamanho do botão.</Text>
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
                    <Text>Define o arredondamento das bordas.</Text>
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
