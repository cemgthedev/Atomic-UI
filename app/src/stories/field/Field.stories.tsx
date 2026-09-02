import type { Meta, StoryObj } from "@storybook/react-vite";

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
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Switch,
  Text,
  Textarea,
} from "@/components/ui";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Agrupa elementos de um campo de formulário.",
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  render: ({}) => (
    <form className="w-xs md:w-xl space-y-6">
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
            <FieldDescription>
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
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Opções</SelectLabel>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="engineering">Engenharia</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
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
                    <Text size="sm">Receber novidades</Text>
                    <FieldDescription size="xs">
                      Mensagens importantes sobre o produto.
                    </FieldDescription>
                  </div>
                  <Switch defaultChecked />
                </label>

                <label className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <Text size="sm">Aceito os termos e condições</Text>
                </label>
              </div>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="message">Mensagem</FieldLabel>
            <FieldContent>
              <Textarea id="message" placeholder="Escreva uma mensagem" />
            </FieldContent>
            <FieldError>Este campo é obrigatório para prosseguir.</FieldError>
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
  ),
};
