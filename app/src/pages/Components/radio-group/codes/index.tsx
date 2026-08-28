export const radioGroupExample = `<RadioGroup defaultValue='option-1'>
  <div className='flex items-center gap-2'>
    <RadioGroupItem value='option-1' variant='primary' />
    <Label>Primeira opção</Label>
  </div>

  <div className='flex items-center gap-2'>
    <RadioGroupItem value='option-2' variant='primary' />
    <Label>Segunda opção</Label>
  </div>
</RadioGroup>`;

export const radioGroupVariantsExample = `<div className='flex flex-wrap justify-center gap-6'>
  {([
    "primary",
    "primary-bordered",
    "primary-ghost",
    "secondary",
    "dark",
    "success",
    "warning",
    "danger",
    "muted",
  ] as const).map((variant) => (
    <div key={variant}>
      <RadioGroup>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='1' variant={variant} />
          <Label>{variant}</Label>
        </div>
      </RadioGroup>
    </div>
  ))}
</div>`;

export const radioGroupSizesExample = `<div className='flex flex-wrap justify-center gap-6'>
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <div key={size} className='space-y-2'>
      <RadioGroup>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='1' variant='dark-bordered' size={size} />
          <Label>{size}</Label>
        </div>
      </RadioGroup>
    </div>
  ))}
</div>`;

export const radioGroupRoundsExample = `<div className='flex flex-wrap justify-center gap-6'>
  {(["xs", "sm", "md", "lg", "xl", "full"] as const).map((rounded) => (
    <div key={rounded} className='space-y-2'>
      <RadioGroup>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='1' variant='primary' rounded={rounded} />
          <Label>{rounded}</Label>
        </div>
      </RadioGroup>
    </div>
  ))}
</div>`;

export const radioGroupPropertiesExample = `<RadioGroup defaultValue='option-1'>
  <div className='flex items-center gap-2'>
    <RadioGroupItem
      value='option-1'
      variant='default'
      size='md'
      rounded='full'
    />
    <Label>Primeira opção</Label>
  </div>

  <div className='flex items-center gap-2'>
    <RadioGroupItem
      value='option-2'
      variant='default'
      size='md'
      rounded='full'
    />
    <Label>Segunda opção</Label>
  </div>
</RadioGroup>`;
