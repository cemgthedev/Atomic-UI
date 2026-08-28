export const switchExample = `<Switch />`;

export const switchVariantsExample = `<div className='flex flex-col gap-3'>
  {([
    "primary",
    "primary-bordered",
    "primary-ghost",
    "secondary",
    "success",
    "warning",
    "danger",
  ] as const).map((variant) => (
    <Switch key={variant} variant={variant} />
  ))}
</div>`;

export const switchSizesExample = `<div className='flex flex-col gap-3'>
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Switch key={size} variant='primary' size={size} />
  ))}
</div>`;

export const switchStatesExample = `<div className="flex flex-col gap-2">
  <Switch defaultChecked />
  <Switch />
</div>`;

export const switchPropertiesExample = `<Switch defaultChecked />`;
