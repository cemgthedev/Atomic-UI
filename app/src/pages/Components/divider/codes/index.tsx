export const dividerExample = `<div className="w-full">
  <Text>Conteúdo acima</Text>
  <Divider className="my-3" />
  <Text>Conteúdo abaixo</Text>
</div>`;

export const dividerVariantsExample = `<div className="flex flex-col gap-4 w-full">
  <div className="space-y-1">
    <Divider variant={"primary"} className="w-full" />
    <Text>primary</Text>
  </div>
  <div className="space-y-1">
    <Divider variant={"secondary"} className="w-full" />
    <Text>secondary</Text>
  </div>
  <div className="space-y-1">
    <Divider variant={"dark"} className="w-full" />
    <Text>dark</Text>
  </div>
  <div className="space-y-1">
    <Divider variant={"success"} className="w-full" />
    <Text>success</Text>
  </div>
  <div className="space-y-1">
    <Divider variant={"warning"} className="w-full" />
    <Text>warning</Text>
  </div>
  <div className="space-y-1">
    <Divider variant={"danger"} className="w-full" />
    <Text>danger</Text>
  </div>
  <div className="space-y-1">
    <Divider variant={"muted"} className="w-full" />
    <Text>muted</Text>
  </div>
</div>`;

export const dividerSizesExample = `<div className="flex flex-col gap-4 w-full">
  <div className="space-y-1">
    <Divider size="xs" />
    <Text>xs</Text>
  </div>
  <div className="space-y-1">
    <Divider size="sm" />
    <Text>sm</Text>
  </div>
  <div className="space-y-1">
    <Divider />
    <Text>md</Text>
  </div>
  <div className="space-y-1">
    <Divider size="lg" />
    <Text>lg</Text>
  </div>
  <div className="space-y-1">
    <Divider size="xl" />
    <Text>xl</Text>
  </div>
</div>`;

export const dividerPropertiesExemple = `<Divider variant={"default"} size={"md"} />`;
