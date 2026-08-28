export const textareaExample = `<Textarea placeholder="Digite sua mensagem" />`;

export const textareaVariantsExample = `<div className="w-full max-w-md flex flex-col gap-3">
  {([
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const).map((variant) => (
    <Textarea
      key={variant}
      variant={variant}
      placeholder={variant}
    />
  ))}
</div>`;

export const textareaSizesExample = `<div className="w-full max-w-md flex flex-col gap-3">
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Textarea key={size} size={size} placeholder={size} />
  ))}
</div>`;

export const textareaRoundsExample = `<div className="w-full max-w-md flex flex-col gap-3">
  {(["xs", "sm", "md", "lg", "xl"] as const).map((rounded) => (
    <Textarea
      key={rounded}
      rounded={rounded}
      placeholder={rounded}
    />
  ))}
</div>`;

export const textareaPropertiesExample = `<Textarea variant="default" size="md" rounded="md" placeholder="Exemplo" />`;
