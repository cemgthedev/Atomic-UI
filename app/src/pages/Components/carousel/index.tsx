import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  carouselExample,
  carouselMultipleItemsExample,
  carouselVerticalExample,
} from "@/pages/Components/carousel/codes";
import { carouselSourceCode } from "@/pages/Components/carousel/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

const slides = ["Descobrir", "Organizar", "Criar", "Compartilhar", "Evoluir"];

const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.carousel}#importacao`,
  },
  {
    name: "Múltiplos itens",
    href: `/${urls.components}/${urls.carousel}#multiplos-itens`,
  },
  {
    name: "Orientação vertical",
    href: `/${urls.components}/${urls.carousel}#orientacao-vertical`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.carousel}#propriedades`,
  },
];

function Slide({ label, index }: { label: string; index: number }) {
  return (
    <div className="flex h-40 items-center justify-center rounded-lg border border-muted-200 bg-background p-4">
      <div className="text-center">
        <Text size="sm">Slide {index + 1}</Text>
        <Label>{label}</Label>
      </div>
    </div>
  );
}

export function DetailsCarousel() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Carousel</Heading>
              <Text className="indent-8">
                Organiza conteúdos em slides navegáveis, com suporte a
                orientação horizontal e vertical, múltiplos itens por
                visualização e controles de navegação.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(carouselSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="carousel-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger value="carousel-example" className="data-active:bg-primary-100">
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger value="carousel-code" className="data-active:bg-primary-100">
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="carousel-example">
              <div className="w-full flex justify-center items-center p-6 bg-muted-100 border border-muted-200 rounded-lg">
                <Carousel className="w-full max-w-sm">
                  <CarouselContent>
                    {slides.map((slide, index) => (
                      <CarouselItem key={slide}>
                        <Slide label={slide} index={index} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
            <TabsContent value="carousel-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{carouselExample}</code>
                </pre>
                <Button startContent={<Copy size={20} className="text-zinc-600" />} onClick={() => copy(carouselExample)} className="bg-transparent border-none p-0" aria-label="Copiar código" />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="multiplos-itens" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col gap-1">
            <Heading>Múltiplos itens</Heading>
            <Text className="indent-8">
              Use a propriedade className de cada item para definir quantos
              slides ficam visíveis em cada tamanho de tela.
            </Text>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="multiple-items-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger value="multiple-items-example" className="data-active:bg-primary-100">
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger value="multiple-items-code" className="data-active:bg-primary-100">
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="multiple-items-example">
              <div className="w-full flex justify-center items-center p-6 bg-muted-100 border border-muted-200 rounded-lg">
                <Carousel className="w-full max-w-3xl">
                  <CarouselContent>
                    {slides.map((slide, index) => (
                      <CarouselItem key={slide} className="basis-1/2 md:basis-1/3">
                        <Slide label={slide} index={index} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
            <TabsContent value="multiple-items-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{carouselMultipleItemsExample}</code>
                </pre>
                <Button startContent={<Copy size={20} className="text-zinc-600" />} onClick={() => copy(carouselMultipleItemsExample)} className="bg-transparent border-none p-0" aria-label="Copiar código" />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="orientacao-vertical" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col gap-1">
            <Heading>Orientação vertical</Heading>
            <Text className="indent-8">
              Defina orientation como vertical e uma altura para o conteúdo
              quando os slides devem ser exibidos em coluna.
            </Text>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="vertical-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger value="vertical-example" className="data-active:bg-primary-100">
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger value="vertical-code" className="data-active:bg-primary-100">
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vertical-example">
              <div className="w-full flex justify-center items-center p-6 bg-muted-100 border border-muted-200 rounded-lg">
                <Carousel orientation="vertical" className="w-full max-w-xs h-fit">
                  <CarouselContent className="h-44">
                    {slides.slice(0, 3).map((slide, index) => (
                      <CarouselItem key={slide}>
                        <Slide label={slide} index={index} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
            <TabsContent value="vertical-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{carouselVerticalExample}</code>
                </pre>
                <Button startContent={<Copy size={20} className="text-zinc-600" />} onClick={() => copy(carouselVerticalExample)} className="bg-transparent border-none p-0" aria-label="Copiar código" />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <div className="flex flex-col gap-1">
            <Heading>Propriedades</Heading>
            <Text className="indent-8">
              Propriedades principais do componente Carousel.
            </Text>
          </div>
          <Separator size="xs" />
          <div className="border border-muted-200 p-3 rounded-lg overflow-auto">
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
                    <Text>orientation</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a direção dos slides.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>horizontal</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>opts</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Opções repassadas para o Embla Carousel.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>plugins</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Plugins do Embla Carousel.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>setApi</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Recebe a API após a inicialização.</Text>
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
