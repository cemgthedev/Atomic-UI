import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  Heading,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
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
  Textarea,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import {
  fieldExample,
  fieldFormExample,
  fieldPropertiesExample,
} from "@/pages/Components/field/codes";
import { fieldSourceCode } from "@/pages/Components/field/codes/source-code";
import type { UrlProps } from "@/types/urls";
import { cn } from "@/utils/cn";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";
import { Link, useLocation } from "react-router";

export const sectionLinks: UrlProps[] = [
  {
    name: "Importação",
    href: `/${urls.components}/${urls.field}#importacao`,
  },
  {
    name: "Formulário",
    href: `/${urls.components}/${urls.field}#formulario`,
  },
  {
    name: "Propriedades",
    href: `/${urls.components}/${urls.field}#propriedades`,
  },
];

export function FieldDetails() {
  const { pathname, hash } = useLocation();
  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <>
      <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
        <div id="importacao" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Field</Heading>
              <Text className="indent-8">
                Estrutura um campo de formulário reunindo rótulo, entrada,
                descrição e mensagens de validação em um único componente.
              </Text>
            </div>
            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              onClick={() => copy(fieldSourceCode)}
              className="min-w-fit"
            >
              Copiar código fonte
            </Button>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="field-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="field-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="field-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="field-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <div className="w-full max-w-xl">
                  <FieldGroup>
                    <Field>
                      <FieldLabel>Nome</FieldLabel>
                      <FieldContent>
                        <Input placeholder="Seu nome" />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel>Descrição</FieldLabel>
                      <FieldContent>
                        <Textarea placeholder="Conte mais sobre você" />
                      </FieldContent>
                    </Field>
                  </FieldGroup>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="field-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{fieldExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(fieldExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="formulario" className="flex flex-col gap-3 py-4">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Formulário completo</Heading>
              <Text className="indent-8">
                Combinação dos componentes Field com Input, Textarea, Checkbox,
                Select e Switch em um formulário real.
              </Text>
            </div>
          </div>

          <Separator size="xs" />

          <Tabs defaultValue="form-example" className="w-full">
            <TabsList className="bg-background border border-muted-200">
              <TabsTrigger
                value="form-example"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Exemplo</Text>
              </TabsTrigger>
              <TabsTrigger
                value="form-code"
                className="data-active:bg-primary-100"
              >
                <Text size="sm">Código</Text>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="form-example">
              <div className="w-full flex justify-center items-center p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <form className="w-full max-w-2xl space-y-6">
                  <FieldSet>
                    <FieldLegend>Dados pessoais</FieldLegend>

                    <FieldGroup>
                      <Field>
                        <FieldLabel>Nome completo</FieldLabel>
                        <FieldContent>
                          <Input placeholder="Digite seu nome" />
                        </FieldContent>
                      </Field>

                      <Field>
                        <FieldLabel>Email</FieldLabel>
                        <FieldDescription size="sm">
                          Use um e-mail ativo para contato.
                        </FieldDescription>
                        <FieldContent>
                          <Input type="email" placeholder="seu@email.com" />
                        </FieldContent>
                      </Field>

                      <Field>
                        <FieldLabel>Área de atuação</FieldLabel>
                        <FieldContent>
                          <Select defaultValue="design">
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Áreas</SelectLabel>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="engineering">
                                  Engenharia
                                </SelectItem>
                                <SelectItem value="marketing">
                                  Marketing
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FieldContent>
                      </Field>

                      <Field>
                        <FieldTitle>Preferências</FieldTitle>
                        <FieldContent>
                          <div className="space-y-3">
                            <label className="flex items-center justify-between gap-3 rounded-md border border-muted-200 bg-background px-3 py-2">
                              <div>
                                <Text>Receber novidades</Text>
                                <FieldDescription size="sm">
                                  Mensagens importantes sobre o produto.
                                </FieldDescription>
                              </div>
                              <Switch defaultChecked />
                            </label>

                            <label className="flex items-center gap-2">
                              <Checkbox defaultChecked />
                              <Text size="sm">
                                Aceito os termos e condições
                              </Text>
                            </label>
                          </div>
                        </FieldContent>
                      </Field>

                      <Field>
                        <FieldLabel>Mensagem</FieldLabel>
                        <FieldContent>
                          <Textarea placeholder="Descreva sua necessidade" />
                        </FieldContent>
                        <FieldError>
                          Este campo é obrigatório para prosseguir.
                        </FieldError>
                      </Field>
                    </FieldGroup>
                  </FieldSet>

                  <div className="flex justify-end gap-3">
                    <Button variant="muted" type="button">
                      Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                      Salvar
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
            <TabsContent value="form-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{fieldFormExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(fieldFormExample)}
                  className="bg-transparent border-none p-0"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div id="propriedades" className="flex flex-col gap-3 pt-4 pb-16">
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-1">
              <Heading>Propriedades</Heading>
              <Text className="indent-8">
                Estrutura base para composição de campos e grupos de formulário.
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
                <div className="w-full max-w-md">
                  <Field>
                    <FieldTitle>Campo principal</FieldTitle>
                    <FieldDescription size="sm">
                      Informações adicionais sobre a opção.
                    </FieldDescription>
                    <FieldContent>
                      <Input placeholder="Digite algo" />
                    </FieldContent>
                    <FieldError>Este campo é obrigatório.</FieldError>
                  </Field>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="properties-code">
              <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
                <pre className="w-full overflow-auto scrollbar-thin mr-1">
                  <code>{fieldPropertiesExample}</code>
                </pre>
                <Button
                  startContent={<Copy size={20} className="text-zinc-600" />}
                  onClick={() => copy(fieldPropertiesExample)}
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
                    <Text>Uso</Text>
                  </TableHead>
                  <TableHead>
                    <Text>Observação</Text>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Text>Field</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Container principal</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Define a organização do campo.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>FieldLabel</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Rótulo</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Identifica o campo visualmente.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>FieldDescription</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Ajuda contextual</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Explica o propósito do campo.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>FieldError</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Mensagem de erro</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Exibe validação ou alertas.</Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Text>FieldSet</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Grupo de campos</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Pode representar seções do formulário.</Text>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <aside className="hidden lg:flex flex-col gap-2 min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] min-w-fit max-w-fit border-l border-muted-200 px-3 py-8 overflow-auto scrollbar-none">
        <Label key="sections" size="sm" className="text-right px-3">
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
