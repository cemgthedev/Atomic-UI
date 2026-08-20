export const dialogExample = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="primary">Abrir Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <Heading size="sm">Excluir projeto?</Heading>
      <Text size="sm">Esta ação não poderá ser desfeita.</Text>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="dark-ghost">Cancelar</Button>
      </DialogClose>
      <Button variant="primary">Excluir</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export const dialogPropertiesExample = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="primary">Abrir Dialog personalizado</Button>
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <Heading size="sm">Fechamento personalizado</Heading>
      <Text size="sm">O botão de fechar padrão foi desabilitado.</Text>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button variant="primary">Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;
