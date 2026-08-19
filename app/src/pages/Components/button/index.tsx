import {
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
  buttonExemple,
  buttonPropertiesExemple,
  buttonRoundsExemple,
  buttonSizesExemple,
  buttonVariantsExemple,
} from "@/pages/Components/button/codes";
import { sourceCodeButton } from "@/pages/Components/button/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.button}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.button}#variantes`,
  },
  {
    name: "Tamanhos",
    href: `/${urls.components}/${urls.button}#tamanhos`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.button}#arredondamentos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.button}#propriedades`,
  },
];

export function ButtonDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Button</Heading>
              <Text className="indent-8">
                {" "}
                Explore todos os componentes disponíveis no AtomicUI,
                desenvolvidos para oferecer consistência, personalização e
                reutilização na construção de interfaces modernas.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(sourceCodeButton)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="button-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="button-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="button-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="button-exemple">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Button variant={"primary"}>Botão</Button>
              </div>
            </TabsContent>
            <TabsContent value="button-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{buttonExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(buttonExemple)}
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
                Exemplos de variantes do componente Button.
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
                  <div className="space-y-1">
                    <Button variant={"primary"} className="w-full">
                      Botão
                    </Button>
                    <Text>primary</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"primary-bordered"} className="w-full">
                      Botão
                    </Button>
                    <Text>primary-bordered</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"primary-ghost"} className="w-full">
                      Botão
                    </Button>
                    <Text>primary-ghost</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"secondary"} className="w-full">
                      Botão
                    </Button>
                    <Text>secondary</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"dark"} className="w-full">
                      Botão
                    </Button>
                    <Text>dark</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"success"} className="w-full">
                      Botão
                    </Button>
                    <Text>success</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"warning"} className="w-full">
                      Botão
                    </Button>
                    <Text>warning</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"danger"} className="w-full">
                      Botão
                    </Button>
                    <Text>danger</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"muted"} className="w-full">
                      Botão
                    </Button>
                    <Text>muted</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{buttonVariantsExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(buttonVariantsExemple)}
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
                Exemplos de tamanhos do componente Button.
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
                    <Button
                      variant={"dark-bordered"}
                      size={"xs"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>xs</Text>
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant={"dark-bordered"}
                      size={"sm"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>sm</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"dark-bordered"} className="w-full">
                      Botão
                    </Button>
                    <Text>md</Text>
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant={"dark-bordered"}
                      size={"lg"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>lg</Text>
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant={"dark-bordered"}
                      size={"xl"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>xl</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{buttonSizesExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(buttonSizesExemple)}
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
                Exemplos de arredondamentos do componente Button.
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
                    <Button
                      variant={"primary"}
                      rounded={"xs"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>xs</Text>
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant={"primary"}
                      rounded={"sm"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>sm</Text>
                  </div>
                  <div className="space-y-1">
                    <Button variant={"primary"} className="w-full">
                      Botão
                    </Button>
                    <Text>md</Text>
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant={"primary"}
                      rounded={"lg"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>lg</Text>
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant={"primary"}
                      rounded={"xl"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>xl</Text>
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant={"primary"}
                      rounded={"full"}
                      className="w-full"
                    >
                      Botão
                    </Button>
                    <Text>full</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rounds-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{buttonRoundsExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(buttonRoundsExemple)}
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
                Propriedades para estilização do componente Button.
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
                <Button variant={"default"} size={"md"} rounded={"md"}>
                  Botão
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{buttonPropertiesExemple}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(buttonPropertiesExemple)}
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
