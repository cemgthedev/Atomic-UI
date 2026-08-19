export const sheetExample = `<Sheet>
  <SheetTrigger asChild>
    <Button variant="primary">Abrir Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <Heading size="sm">Sheet simples</Heading>
      <Text size="sm">Este conteúdo é exibido em um painel lateral.</Text>
    </SheetHeader>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="dark-ghost">Fechar</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`;

export const sheetSidesExample = `<div className="flex flex-wrap justify-center gap-3">
  {(["top", "right", "bottom", "left"] as const).map((side) => (
    <Sheet key={side}>
      <SheetTrigger asChild>
        <Button variant="primary">{side}</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <Heading size="sm">Sheet {side}</Heading>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ))}
</div>`;

export const sheetPropertiesExample = `<Sheet>
  <SheetTrigger asChild>
    <Button variant="primary">Abrir sem botão de fechar</Button>
  </SheetTrigger>
  <SheetContent side="left" showCloseButton={false}>
    <SheetHeader>
      <Heading size="sm">Sheet personalizado</Heading>
      <Text size="sm">Use side e showCloseButton para personalizar.</Text>
    </SheetHeader>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="dark-ghost">Fechar</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`;
