export const drawerExample = `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="primary">Abrir Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <Heading size="sm">Drawer simples</Heading>
      <Text size="sm">Deslize o painel para baixo para fechá-lo.</Text>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="dark-ghost">Fechar</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`;

export const drawerDirectionsExample = `<div className="flex flex-wrap justify-center gap-3">
  {(["top", "right", "bottom", "left"] as const).map((direction) => (
    <Drawer key={direction} direction={direction}>
      <DrawerTrigger asChild>
        <Button variant="primary">{direction}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Heading size="sm">Drawer {direction}</Heading>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ))}
</div>`;

export const drawerPropertiesExample = `<Drawer direction="right" modal={false}>
  <DrawerTrigger asChild>
    <Button variant="primary">Abrir Drawer não modal</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <Heading size="sm">Drawer personalizado</Heading>
      <Text size="sm">O conteúdo ao fundo permanece interativo.</Text>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="dark-ghost">Fechar</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`;
