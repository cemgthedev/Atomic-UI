export const messageExample = `<Message>Mensagem padrão</Message>`;

export const messageVariantsExample = `<div className="flex flex-col gap-2">
  {(
    [
      "default",
      "muted",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const
  ).map((variant) => (
    <Message key={variant} variant={variant}>
      {variant}
    </Message>
  ))}
</div>`;

export const messageSizesExample = `<div className="flex flex-col gap-2">
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Message key={size} size={size}>
      {size}
    </Message>
  ))}
</div>`;

export const messagePropertiesExample = `<Message variant="default" size="md">
  Mensagem com propriedades
</Message>`;
