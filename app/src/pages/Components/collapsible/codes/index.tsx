export const collapsibleExample = `<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="secondary">Mostrar detalhes</Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-3 rounded-lg border border-muted-200 p-3">
    Conteudo complementar exibido ao abrir o componente.
  </CollapsibleContent>
</Collapsible>`;

export const collapsibleDefaultOpenExample = `<Collapsible defaultOpen>
  <CollapsibleTrigger asChild>
    <Button variant="secondary">Ocultar detalhes</Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-3 rounded-lg border border-muted-200 p-3">
    Este conteudo e exibido inicialmente.
  </CollapsibleContent>
</Collapsible>`;
