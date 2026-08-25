import {
  Button,
  Card,
  CardContent,
  CardHeader,
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
  tabsExample,
  tabsPropertiesExample,
  tabsSizesExample,
  tabsTriggerPropertiesExample,
  tabsVariantsExample,
  tabsVerticalExample,
} from "@/pages/Components/tabs/codes";
import { sourceCodeTabs } from "@/pages/Components/tabs/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.tabs}#importacao`,
  },
  {
    name: "Variantes",
    href: `/${urls.components}/${urls.tabs}#variantes`,
  },
  {
    name: "Tamanhos",
    href: `/${urls.components}/${urls.tabs}#tamanhos`,
  },
  {
    name: "Vertical",
    href: `/${urls.components}/${urls.tabs}#vertical`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.tabs}#propriedades`,
  },
];

export function TabsDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        {/* Importação */}
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Tabs</Heading>
              <Text className="indent-8">
                {" "}
                Componente de navegação que organiza conteúdo em abas
                interativas, permitindo alternar entre diferentes seções da
                interface de forma intuitiva, acessível e responsiva.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(sourceCodeTabs)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="tabs-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="tabs-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="tabs-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tabs-exemple">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <Tabs defaultValue="visao-geral" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
                    <TabsTrigger value="analises">Análises</TabsTrigger>
                    <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
                    <TabsTrigger value="configuracoes">
                      Configurações
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="visao-geral">
                    <Card>
                      <CardHeader>
                        <Label>Visão Geral</Label>
                        <Text>
                          Visualize suas principais métricas e as atividades
                          recentes dos seus projetos. Acompanhe o progresso de
                          todos os projetos ativos em um só lugar.
                        </Text>
                      </CardHeader>

                      <CardContent className="text-sm text-muted-foreground">
                        Você possui 12 projetos ativos e 3 tarefas pendentes.
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="analises">
                    <Card>
                      <CardHeader>
                        <Label>Análises</Label>
                        <Text>
                          Acompanhe métricas de desempenho e engajamento dos
                          usuários. Monitore tendências e identifique
                          oportunidades de crescimento.
                        </Text>
                      </CardHeader>

                      <CardContent className="text-sm text-muted-foreground">
                        As visualizações de página aumentaram 25% em relação ao
                        mês passado.
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="relatorios">
                    <Card>
                      <CardHeader>
                        <Label>Relatórios</Label>
                        <Text>
                          Gere e faça o download de relatórios detalhados.
                          Exporte dados em diferentes formatos para análise.
                        </Text>
                      </CardHeader>

                      <CardContent className="text-sm text-muted-foreground">
                        Você possui 5 relatórios prontos para exportação.
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="configuracoes">
                    <Card>
                      <CardHeader>
                        <Label>Configurações</Label>
                        <Text>
                          Gerencie as preferências e opções da sua conta.
                          Personalize a experiência de acordo com as suas
                          necessidades.
                        </Text>
                      </CardHeader>

                      <CardContent className="text-sm text-muted-foreground">
                        Configure notificações, segurança e temas da aplicação.
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>
            <TabsContent value="tabs-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{tabsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(tabsExample)}
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
                Exemplos de variantes do componente TabsTrigger.
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
                <Tabs defaultValue="primary" className="w-full">
                  <TabsList className="flex flex-wrap">
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
                      <TabsTrigger
                        key={variant}
                        value={variant}
                        variant={variant}
                      >
                        {variant}
                      </TabsTrigger>
                    ))}
                  </TabsList>

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
                    <TabsContent key={variant} value={variant}>
                      <Card>
                        <CardContent className="pt-6">
                          <Label>{variant}</Label>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>
            <TabsContent value="variants-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{tabsVariantsExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(tabsVariantsExample)}
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
                Exemplos de tamanhos do componente TabsTrigger.
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
                <Tabs defaultValue="md" className="w-full">
                  <TabsList className="flex flex-wrap">
                    {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                      <TabsTrigger key={size} value={size} size={size}>
                        {size.toUpperCase()}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                    <TabsContent key={size} value={size}>
                      <Card>
                        <CardContent className="pt-6">
                          <Label>{size.toUpperCase()}</Label>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>

            <TabsContent value="sizes-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{tabsSizesExample}</code>
                </pre>

                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(tabsSizesExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Orientação Vertical */}
        <div id="vertical" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Orientação Vertical</Heading>
              <Text className="indent-8">
                Exemplo do componente Tabs utilizando orientação vertical.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="vertical-exemple" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="vertical-exemple"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Exemplo</Text>
              </TabsTrigger>

              <TabsTrigger
                value="vertical-code"
                className="data-active:bg-primary-100"
              >
                <Text size={"sm"}>Código</Text>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vertical-exemple">
              <div className="w-full flex justify-center items-center p-3 gap-4 bg-muted-100 border border-muted-200 rounded-lg">
                <Tabs
                  defaultValue="perfil"
                  orientation="vertical"
                  className="w-full"
                >
                  <TabsList className="flex flex-col h-fit">
                    <TabsTrigger value="perfil">Perfil</TabsTrigger>

                    <TabsTrigger value="conta">Conta</TabsTrigger>

                    <TabsTrigger value="notificacoes">Notificações</TabsTrigger>

                    <TabsTrigger value="seguranca">Segurança</TabsTrigger>
                  </TabsList>

                  <TabsContent value="perfil">
                    <Card>
                      <CardContent className="pt-6">
                        <Label>Perfil</Label>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="conta">
                    <Card>
                      <CardContent className="pt-6">
                        <Label>Conta</Label>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="notificacoes">
                    <Card>
                      <CardContent className="pt-6">
                        <Label>Notificações</Label>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="seguranca">
                    <Card>
                      <CardContent className="pt-6">
                        <Label>Segurança</Label>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            <TabsContent value="vertical-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{tabsVerticalExample}</code>
                </pre>

                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(tabsVerticalExample)}
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
                Propriedades disponíveis para os componentes Tabs e TabsTrigger.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          {/* Tabs */}
          <div className="flex flex-col gap-3">
            <Heading size="sm">Tabs</Heading>

            <Tabs
              activationMode="automatic"
              defaultValue="properties-tabs-exemple"
              className="w-full"
            >
              <TabsList className="bg-background border border-muted-200">
                <TabsTrigger
                  value="properties-tabs-exemple"
                  className="data-active:bg-primary-100"
                >
                  <Text size={"sm"}>Exemplo</Text>
                </TabsTrigger>

                <TabsTrigger
                  value="properties-tabs-code"
                  className="data-active:bg-primary-100"
                >
                  <Text size={"sm"}>Código</Text>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="properties-tabs-exemple">
                <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <Tabs
                    defaultValue="perfil"
                    orientation="horizontal"
                    activationMode="automatic"
                    className="w-full"
                  >
                    <TabsList>
                      <TabsTrigger value="perfil">Perfil</TabsTrigger>
                      <TabsTrigger value="conta">Conta</TabsTrigger>
                    </TabsList>

                    <TabsContent value="perfil">
                      <Card>
                        <CardContent className="pt-6">
                          <Label>Perfil</Label>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="conta">
                      <Card>
                        <CardContent className="pt-6">
                          <Label>Conta</Label>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>

              <TabsContent value="properties-tabs-code">
                <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <pre className="w-full overflow-auto scrollbar-thin mr-1">
                    <code>{tabsPropertiesExample}</code>
                  </pre>

                  <Button
                    startContent={<Copy size={20} className="text-zinc-600" />}
                    onClick={() => copy(tabsPropertiesExample)}
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
                      <Text>
                        Define a aba que será selecionada inicialmente.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>-</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>value</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Define a aba atualmente selecionada de forma controlada.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>-</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>onValueChange</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Função executada quando a aba selecionada é alterada.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>-</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>orientation</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Define a orientação das abas entre horizontal e
                        vertical.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>horizontal</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>activationMode</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Define como as abas são ativadas durante a navegação.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>automatic</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>dir</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Define a direção de leitura e navegação das abas.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>ltr</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>className</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Define classes CSS adicionais para estilização do
                        componente.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>-</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* TabsTrigger */}
          <div className="flex flex-col gap-3">
            <Heading size="sm">TabsTrigger</Heading>

            <Tabs
              activationMode="automatic"
              defaultValue="properties-trigger-exemple"
              className="w-full"
            >
              <TabsList className="bg-background border border-muted-200">
                <TabsTrigger
                  value="properties-trigger-exemple"
                  className="data-active:bg-primary-100"
                >
                  <Text size={"sm"}>Exemplo</Text>
                </TabsTrigger>

                <TabsTrigger
                  value="properties-trigger-code"
                  className="data-active:bg-primary-100"
                >
                  <Text size={"sm"}>Código</Text>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="properties-trigger-exemple">
                <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <Tabs defaultValue="primary" className="w-full">
                    <TabsList className="flex flex-wrap">
                      <TabsTrigger value="primary" variant="primary" size="md">
                        Primary
                      </TabsTrigger>

                      <TabsTrigger
                        value="secondary"
                        variant="secondary"
                        size="md"
                      >
                        Secondary
                      </TabsTrigger>

                      <TabsTrigger value="success" variant="success" size="md">
                        Success
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="primary">
                      <Card>
                        <CardContent className="pt-6">
                          <Label>Primary</Label>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="secondary">
                      <Card>
                        <CardContent className="pt-6">
                          <Label>Secondary</Label>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="success">
                      <Card>
                        <CardContent className="pt-6">
                          <Label>Success</Label>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>

              <TabsContent value="properties-trigger-code">
                <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                  <pre className="w-full overflow-auto scrollbar-thin mr-1">
                    <code>{tabsTriggerPropertiesExample}</code>
                  </pre>

                  <Button
                    startContent={<Copy size={20} className="text-zinc-600" />}
                    onClick={() => copy(tabsTriggerPropertiesExample)}
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
                      <Text>value</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Identifica a aba e a associa ao conteúdo correspondente.
                      </Text>
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
                      <Text>Define a aparência visual da aba.</Text>
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
                      <Text>Define o tamanho da aba.</Text>
                    </TableCell>

                    <TableCell>
                      <Text>md</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>disabled</Text>
                    </TableCell>

                    <TableCell>
                      <Text>Desabilita a interação com a aba.</Text>
                    </TableCell>

                    <TableCell>
                      <Text>false</Text>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Text>className</Text>
                    </TableCell>

                    <TableCell>
                      <Text>
                        Define classes CSS adicionais para estilização da aba.
                      </Text>
                    </TableCell>

                    <TableCell>
                      <Text>-</Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
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
