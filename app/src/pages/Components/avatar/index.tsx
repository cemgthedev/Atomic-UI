import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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
  avatarExample,
  avatarPropertiesExample,
  avatarRoundsExample,
  avatarSizesExample,
} from "@/pages/Components/avatar/codes";
import { avatarSourceCode } from "@/pages/Components/avatar/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.avatar}#importacao`,
  },
  {
    name: "Tamanhos",
    href: `/${urls.components}/${urls.avatar}#tamanhos`,
  },
  {
    name: "Arredondamentos",
    href: `/${urls.components}/${urls.avatar}#arredondamentos`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.avatar}#propriedades`,
  },
];

export function AvatarDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Avatar</Heading>
              <Text className="indent-8">
                Exibe a identidade visual de um usuário por meio de imagem,
                ícone ou iniciais, facilitando reconhecimento e personalização
                da interface.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(avatarSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="avatar-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="avatar-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="avatar-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="avatar-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Avatar size="md" rounded="full">
                  <AvatarImage src="https://i.pravatar.cc/100" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </TabsContent>
            <TabsContent value="avatar-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{avatarExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(avatarExample)}
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
                Exemplos de tamanhos do componente Avatar.
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
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex flex-col items-center gap-1">
                    <Avatar size="xs" rounded="full">
                      <AvatarImage
                        src="https://i.pravatar.cc/80"
                        alt="avatar xs"
                      />
                      <AvatarFallback>XS</AvatarFallback>
                    </Avatar>
                    <Text>xs</Text>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Avatar size="sm" rounded="full">
                      <AvatarImage
                        src="https://i.pravatar.cc/90"
                        alt="avatar sm"
                      />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <Text>sm</Text>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Avatar size="md" rounded="full">
                      <AvatarImage
                        src="https://i.pravatar.cc/100"
                        alt="avatar md"
                      />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <Text>md</Text>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Avatar size="lg" rounded="full">
                      <AvatarImage
                        src="https://i.pravatar.cc/110"
                        alt="avatar lg"
                      />
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <Text>lg</Text>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Avatar size="xl" rounded="full">
                      <AvatarImage
                        src="https://i.pravatar.cc/120"
                        alt="avatar xl"
                      />
                      <AvatarFallback>XL</AvatarFallback>
                    </Avatar>
                    <Text>xl</Text>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{avatarSizesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(avatarSizesExample)}
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
                Exemplos de arredondamentos do componente Avatar.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="rounds-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="rounds-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="rounds-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rounds-example">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex items-center gap-4 flex-wrap">
                  {(["full", "xl", "lg", "md", "sm", "xs"] as const).map(
                    (rounded) => (
                      <div
                        key={rounded}
                        className="flex flex-col items-center gap-1"
                      >
                        <Avatar size="md" rounded={rounded}>
                          <AvatarImage
                            src="https://i.pravatar.cc/100"
                            alt={rounded}
                          />
                          <AvatarFallback>{rounded}</AvatarFallback>
                        </Avatar>
                        <Text>{rounded}</Text>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rounds-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{avatarRoundsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(avatarRoundsExample)}
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
                Propriedades para estilização do componente Avatar.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="properties-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="properties-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="properties-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="properties-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Avatar size="md" rounded="md">
                  <AvatarImage src="https://i.pravatar.cc/100" alt="Avatar" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{avatarPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(avatarPropertiesExample)}
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
                    <Text>Avatar</Text>
                  </TableCell>
                  <TableCell>
                    <Text>size</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Controla o tamanho do avatar.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>md</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>Avatar</Text>
                  </TableCell>
                  <TableCell>
                    <Text>rounded</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define o formato das bordas do avatar.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>full</Text>
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
