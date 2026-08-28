export const popoverExample = `<Popover>
  <PopoverTrigger asChild>
    <Button variant='primary'>Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Popover simples</PopoverTitle>
      <PopoverDescription>
        Este conteúdo aparece sobre o trigger quando o popover é aberto.
      </PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`;

export const popoverTriggersExample = `<div className='flex flex-col gap-10'>
  {(["start", "center", "end"] as const).map((align) => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant='primary'>Align {align}</Button>
      </PopoverTrigger>
      <PopoverContent align={align} sideOffset={8}>
        <PopoverHeader>
          <PopoverTitle>Align {align}</PopoverTitle>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ))}
</div>`;

export const popoverPropertiesExample = `<Popover defaultOpen>
  <PopoverTrigger asChild>
    <Button variant='default'>Abrir</Button>
  </PopoverTrigger>
  <PopoverContent align='center' sideOffset={0}>
    <PopoverHeader>
      <PopoverTitle>Popover com propriedades</PopoverTitle>
    </PopoverHeader>
  </PopoverContent>
</Popover>`;
