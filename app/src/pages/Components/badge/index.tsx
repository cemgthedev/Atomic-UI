import {
  Badge,
  Button,
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
  badgeExample,
  badgePropertiesExemple,
  badgeRoundsExemple,
  badgeSizesExample,
  badgeVariantsExample,
} from "@/pages/Components/badge/codes";
import { badgeSourceCode } from "@/pages/Components/badge/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.badge}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.badge}#variantes`,
  },
  {
    name: "Tamanhos",
    href: `/${urls.components}/${urls.badge}#tamanhos`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.badge}#arredondamentos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.badge}#propriedades`,
  },
];

export function BadgeDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Badge</Heading>
              <Text className="indent-8">
                Apresenta informações curtas e destacadas, como status,
                categorias ou etiquetas, de forma visualmente simples e fácil de
                identificar.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(badgeSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="badge-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="badge-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="badge-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="badge-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Badge variant="primary">Badge</Badge>
              </div>
            </TabsContent>
            <TabsContent value="badge-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{badgeExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(badgeExample)}
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
                Exemplos de variantes do componente Badge.
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
                <div className="flex justify-center flex-wrap gap-4">
                  <div className="space-y-1">
                    <Badge variant={"primary"} className="w-full">
                      Badge
                    </Badge>
                    <Text>primary</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"primary-bordered"} className="w-full">
                      Badge
                    </Badge>
                    <Text>primary-bordered</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"primary-ghost"} className="w-full">
                      Badge
                    </Badge>
                    <Text>primary-ghost</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"secondary"} className="w-full">
                      Badge
                    </Badge>
                    <Text>secondary</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"dark"} className="w-full">
                      Badge
                    </Badge>
                    <Text>dark</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"success"} className="w-full">
                      Badge
                    </Badge>
                    <Text>success</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"warning"} className="w-full">
                      Badge
                    </Badge>
                    <Text>warning</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"danger"} className="w-full">
                      Badge
                    </Badge>
                    <Text>danger</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"muted"} className="w-full">
                      Badge
                    </Badge>
                    <Text>muted</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{badgeVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(badgeVariantsExample)}
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
                Exemplos de tamanhos do componente Badge.
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
                  <div className="space-y-1">
                    <Badge
                      variant={"dark-bordered"}
                      size={"xs"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>xs</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge
                      variant={"dark-bordered"}
                      size={"sm"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>sm</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"dark-bordered"} className="w-full">
                      Badge
                    </Badge>
                    <Text>md</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge
                      variant={"dark-bordered"}
                      size={"lg"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>lg</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge
                      variant={"dark-bordered"}
                      size={"xl"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>xl</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{badgeSizesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(badgeSizesExample)}
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
                <div className="flex justify-center flex-wrap gap-4">
                  <div className="space-y-1">
                    <Badge
                      variant={"primary"}
                      rounded={"xs"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>xs</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge
                      variant={"primary"}
                      rounded={"sm"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>sm</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge variant={"primary"} className="w-full">
                      Badge
                    </Badge>
                    <Text>md</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge
                      variant={"primary"}
                      rounded={"lg"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>lg</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge
                      variant={"primary"}
                      rounded={"xl"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>xl</Text>
                  </div>
                  <div className="space-y-1">
                    <Badge
                      variant={"primary"}
                      rounded={"full"}
                      className="w-full"
                    >
                      Badge
                    </Badge>
                    <Text>full</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rounds-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{badgeRoundsExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(badgeRoundsExemple)}
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
                Propriedades para estilização do componente Badge.
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
                <Badge variant={"default"} size={"md"} rounded={"md"}>
                  Badge
                </Badge>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{badgePropertiesExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(badgePropertiesExemple)}
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
                    <Text>Badge</Text>
                  </TableCell>
                  <TableCell>
                    <Text>startContent</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Conteúdo exibido antes do texto.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Badge</Text>
                  </TableCell>
                  <TableCell>
                    <Text>endContent</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Conteúdo exibido depois do texto.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Badge</Text>
                  </TableCell>
                  <TableCell>
                    <Text>variant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a aparência visual do badge.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Badge</Text>
                  </TableCell>
                  <TableCell>
                    <Text>size</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Controla o tamanho do badge.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Badge</Text>
                  </TableCell>
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
