export const tableExample = `<Table>
  <TableCaption>Lista de projetos recentes.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Projeto</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Atualizado</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Atomic UI</TableCell>
      <TableCell>Publicado</TableCell>
      <TableCell className="text-right">Hoje</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Design Tokens</TableCell>
      <TableCell>Em revisão</TableCell>
      <TableCell className="text-right">Ontem</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">2 projetos</TableCell>
    </TableRow>
  </TableFooter>
</Table>`;

export const tableCompositionExample = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Componente</TableHead>
      <TableHead>Uso</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {components.map((component) => (
      <TableRow key={component.name}>
        <TableCell>{component.name}</TableCell>
        <TableCell>{component.description}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`;

export const tablePropertiesExample = `<Table className="min-w-[640px]">
  <TableCaption>Dados com rolagem horizontal em telas menores.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Nome</TableHead>
      <TableHead>Categoria</TableHead>
      <TableHead className="text-right">Quantidade</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>{/* linhas da tabela */}</TableBody>
</Table>`;
