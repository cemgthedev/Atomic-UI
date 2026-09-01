export const selectExample = `<Select defaultValue="option-1">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Selecione..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Opções</SelectLabel>
      <SelectItem value="option-1">Opção 1</SelectItem>
      <SelectItem value="option-2">Opção 2</SelectItem>
      <SelectItem value="option-3">Opção 3</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;

export const selectVariantsExample = `<div className="flex flex-wrap gap-4">
  {[
    "default",
    "dark",
    "muted",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ].map((variant) => (
    <Select key={variant} defaultValue={variant}>
      <SelectTrigger variant={variant} className="w-[180px]">
        <SelectValue placeholder={variant} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={variant}>{variant}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ))}
</div>`;

export const selectSizesExample = `<div className="flex flex-wrap items-center gap-4">
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Select key={size} defaultValue="option-1">
      <SelectTrigger size={size} className="w-[180px]">
        <SelectValue placeholder="Selecione" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option-1">Opção 1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ))}
</div>`;

export const selectRoundedExample = `<div className="flex flex-wrap items-center gap-4">
  {(["xs", "sm", "md", "lg", "xl", "full"] as const).map((rounded) => (
    <Select key={rounded} defaultValue="option-1">
      <SelectTrigger rounded={rounded} className="w-[180px]">
        <SelectValue placeholder="Selecione" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option-1">Opção 1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ))}
</div>`;

export const selectPropertiesExample = `<Select defaultValue="option-1" disabled={false}>
  <SelectTrigger variant="primary" size="md" rounded="md" className="w-[180px]">
    <SelectValue placeholder="Selecione" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="option-1">Opção 1</SelectItem>
      <SelectItem value="option-2">Opção 2</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;
