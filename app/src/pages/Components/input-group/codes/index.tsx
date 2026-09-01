export const inputGroupExample = `<InputGroup>
  <InputGroupAddon>
    <Mail size={16} />
  </InputGroupAddon>
  <InputGroupInput placeholder="Digite seu e-mail" />
  <InputGroupButton variant="primary">Enviar</InputGroupButton>
</InputGroup>`;

export const inputGroupExamplesExample = `<div className="space-y-3">
  <InputGroup>
    <InputGroupAddon>R$</InputGroupAddon>
    <InputGroupInput placeholder="0,00" />
    <InputGroupText variant="primary">BRL</InputGroupText>
  </InputGroup>

  <InputGroup>
    <InputGroupAddon>
      <Search size={16} />
    </InputGroupAddon>
    <InputGroupInput placeholder="Pesquisar componentes" />
    <InputGroupButton variant="secondary">Buscar</InputGroupButton>
  </InputGroup>

  <InputGroup>
    <InputGroupAddon align="block-start">Mensagem</InputGroupAddon>
    <InputGroupTextarea placeholder="Escreva sua sugestão..." rows={4} />
  </InputGroup>
</div>`;

export const inputGroupVariantsExample = `<div className="w-full max-w-xl flex flex-col gap-3">
  {([
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ] as const).map((variant) => (
    <InputGroup key={variant} variant={variant}>
      <InputGroupAddon>{variant}</InputGroupAddon>
      <InputGroupInput placeholder={variant} />
    </InputGroup>
  ))}
</div>`;

export const inputGroupPropertiesExample = `<InputGroup>
  <InputGroupAddon>
    <Search size={16} />
  </InputGroupAddon>
  <InputGroupInput variant="primary" size="md" rounded="md" placeholder="Pesquisar" />
  <InputGroupButton variant="primary" size="md">Buscar</InputGroupButton>
</InputGroup>`;
