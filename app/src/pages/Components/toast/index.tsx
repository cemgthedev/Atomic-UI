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
  toast,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import {
  toastCustomsExample,
  toastDescriptionsExample,
  toastExample,
  toastPositionsExample,
  toastPropertiesExample,
  toastVariantsExample,
} from "@/pages/Components/toast/codes";
import { toastSourceCode } from "@/pages/Components/toast/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy, EyeIcon, InfoIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.toast}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.toast}#variantes`,
  },
  {
    name: "Descrição",
    href: `/${urls.components}/${urls.toast}#descricao`,
  },
  {
    name: "Posição",
    href: `/${urls.components}/${urls.toast}#posicao`,
  },
  {
    name: "Customizado",
    href: `/${urls.components}/${urls.toast}#customizado`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.toast}#propriedades`,
  },
];

export function ToastDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Toast</Heading>
              <Text className="indent-8">
                Exibe notificações temporárias para informar resultados de ações
                ou eventos, sem interromper a interação do usuário.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(toastSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>
          <Separator size="xs" />
          <Tabs defaultValue="skeleton-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="skeleton-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="skeleton-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="skeleton-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Button
                  variant={"primary"}
                  onClick={() =>
                    toast("Toast informativo", {
                      className: "bg-red-500",
                    })
                  }
                >
                  Mostrar toast
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="skeleton-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{toastExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(toastExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Variantes */}
        <div id="variantes" className="flex flex-col gap-3 py-4">
          <Heading>Variantes</Heading>
          <Text className="indent-8">
            Exemplos de variantes do componente Toast.
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="toast-variants-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="toast-variants-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="toast-variants-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="toast-variants-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap justify-center gap-2">
                  {(
                    [
                      "default",
                      "primary",
                      "primary-bordered",
                      "primary-ghost",
                      "secondary",
                      "success",
                      "warning",
                      "danger",
                    ] as const
                  ).map((variant) => (
                    <Button
                      key={variant}
                      variant={variant}
                      onClick={() => toast("Toast informativo", { variant })}
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="toast-variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{toastVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(toastVariantsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Descrição */}
        <div id="descricao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Descrição</Heading>
              <Text className="indent-8">
                Adicione uma descrição aos toasts.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="description-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="description-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="description-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant={"primary"}
                    onClick={() =>
                      toast("Toast informativo", {
                        description: "Descrição do toast.",
                      })
                    }
                  >
                    Mostrar toast com descrição
                  </Button>
                  <Button
                    variant={"primary-bordered"}
                    onClick={() =>
                      toast("Toast informativo", {
                        description: (
                          <div className="flex gap-1 items-center text-primary-800">
                            <EyeIcon size={16} />
                            <Text size="sm">Descrição personalizada</Text>
                          </div>
                        ),
                      })
                    }
                  >
                    Mostrar toast com descrição personalizada
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="description-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{toastDescriptionsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(toastDescriptionsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Posição */}
        <div id="posicao" className="flex flex-col gap-3 py-4">
          <Heading>Posição</Heading>
          <Text className="indent-8">Exemplos de posições do toast.</Text>
          <Separator size="xs" />
          <Tabs defaultValue="positions-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="positions-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="positions-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="positions-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant="dark-bordered"
                    onClick={() =>
                      toast("Event has been created", { position: "top-left" })
                    }
                  >
                    Top Left
                  </Button>
                  <Button
                    variant="dark-bordered"
                    onClick={() =>
                      toast("Event has been created", {
                        position: "top-center",
                      })
                    }
                  >
                    Top Center
                  </Button>
                  <Button
                    variant="dark-bordered"
                    onClick={() =>
                      toast("Event has been created", { position: "top-right" })
                    }
                  >
                    Top Right
                  </Button>
                  <Button
                    variant="dark-bordered"
                    onClick={() =>
                      toast("Event has been created", {
                        position: "bottom-left",
                      })
                    }
                  >
                    Bottom Left
                  </Button>
                  <Button
                    variant="dark-bordered"
                    onClick={() =>
                      toast("Event has been created", {
                        position: "bottom-center",
                      })
                    }
                  >
                    Bottom Center
                  </Button>
                  <Button
                    variant="dark-bordered"
                    onClick={() =>
                      toast("Event has been created", {
                        position: "bottom-right",
                      })
                    }
                  >
                    Bottom Right
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="positions-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{toastPositionsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(toastPositionsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Customizados */}
        <div id="customizado" className="flex flex-col gap-3 py-4">
          <Heading>Customizado</Heading>
          <Text className="indent-8">
            Exemplos de toasts totalmente customizados
          </Text>
          <Separator size="xs" />
          <Tabs defaultValue="custom-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="custom-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="custom-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="custom-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="flex flex-wrap justify-center gap-2">
                  {(
                    [
                      "default",
                      "primary",
                      "primary-bordered",
                      "primary-ghost",
                      "secondary",
                      "success",
                      "warning",
                      "danger",
                    ] as const
                  ).map((variant) => (
                    <Button
                      key={variant}
                      variant={variant}
                      onClick={() => {
                        toast(
                          <div className="flex gap-1 items-center p-1 animate-pulse">
                            <InfoIcon size={20} />
                            <Text>
                              A custom toast with a{" "}
                              <a
                                href="https://emilkowal.ski/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline leading-0"
                              >
                                link
                              </a>
                            </Text>
                          </div>,
                          {
                            variant: variant,
                          },
                        );
                      }}
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="custom-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{toastCustomsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(toastCustomsExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Propriedades */}
        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <Heading>Propriedades</Heading>
          <Text className="indent-8">
            Propriedades para personalizar o Skeleton.
          </Text>
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
                <Button
                  variant={"default"}
                  onClick={() =>
                    toast("Toast informativo", {
                      variant: "default",
                      duration: 5000,
                      closeButton: false,
                    })
                  }
                >
                  Mostrar toast
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{toastPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(toastPropertiesExample)}
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
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>variant</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a variante visual do toast.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>default</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>className</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Permite adicionar classes CSS personalizadas ao toast.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>duration</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define o tempo, em milissegundos, até o toast ser fechado
                      automaticamente.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>5000</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>position</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a posição em que o toast será exibido.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>bottom-right</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>description</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Define uma descrição complementar para a mensagem
                      principal.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>id</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define um identificador único para o toast.</Text>
                  </TableCell>
                  <TableCell>
                    <Text>-</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>closeButton</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      Exibe ou oculta o botão para fechar o toast manualmente.
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text>false</Text>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Text>Toast</Text>
                  </TableCell>
                  <TableCell>
                    <Text>action</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Adiciona uma ação interativa ao toast.</Text>
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
