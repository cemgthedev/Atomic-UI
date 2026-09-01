export const fieldExample = `<FieldGroup>
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

  <Field>
    <FieldTitle>Preferências</FieldTitle>
    <FieldContent>
      <div className="flex items-center justify-between">
        <Text size="sm">Receber novidades</Text>
        <Switch defaultChecked />
      </div>
    </FieldContent>
  </Field>
</FieldGroup>`;

export const fieldFormExample = `<form className="w-full max-w-2xl space-y-6">
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
                <Text size="sm">Aceito os termos e condições</Text>
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
</form>`;

export const fieldPropertiesExample = `<Field>
  <FieldTitle>Campo principal</FieldTitle>
  <FieldDescription>Informações adicionais sobre a opção.</FieldDescription>
  <FieldContent>
    <Input placeholder="Digite algo" />
  </FieldContent>
  <FieldError>Este campo é obrigatório.</FieldError>
</Field>`;
