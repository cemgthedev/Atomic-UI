export const inputExample = `<Input placeholder="Digite aqui" />`;

export const inputVariantsExample = `<div className="w-full max-w-md flex flex-col gap-3">
  {(
    [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ] as const
  ).map((variant) => (
    <Input
      key={variant}
      variant={variant}
      placeholder={variant}
    />
  ))}
</div>`;

export const inputSizesExample = `<div className="w-full max-w-md flex flex-col gap-3">
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Input key={size} size={size} placeholder={size} />
  ))}
</div>`;

export const inputRoundsExample = `<div className="w-full max-w-md flex flex-col gap-3">
  {(["xs", "sm", "md", "lg", "xl"] as const).map((rounded) => (
    <Input
      key={rounded}
      rounded={rounded}
      placeholder={rounded}
    />
  ))}
</div>`;

export const inputPropertiesExample = `<Input variant="default" size="md" rounded="md" placeholder="Exemplo" />`;
