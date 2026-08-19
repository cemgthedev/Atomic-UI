export const separatorExample = `<div className="w-full">
  <Text>Conteúdo acima</Text>
  <Separator className="my-3" />
  <Text>Conteúdo abaixo</Text>
</div>`;

export const separatorVariantsExample = `<div className="flex flex-col gap-4 w-full">
  <div className="space-y-1">
    <Separator variant={"primary"} className="w-full" />
    <Text>primary</Text>
  </div>
  <div className="space-y-1">
    <Separator variant={"secondary"} className="w-full" />
    <Text>secondary</Text>
  </div>
  <div className="space-y-1">
    <Separator variant={"dark"} className="w-full" />
    <Text>dark</Text>
  </div>
  <div className="space-y-1">
    <Separator variant={"success"} className="w-full" />
    <Text>success</Text>
  </div>
  <div className="space-y-1">
    <Separator variant={"warning"} className="w-full" />
    <Text>warning</Text>
  </div>
  <div className="space-y-1">
    <Separator variant={"danger"} className="w-full" />
    <Text>danger</Text>
  </div>
  <div className="space-y-1">
    <Separator variant={"muted"} className="w-full" />
    <Text>muted</Text>
  </div>
</div>`;

export const separatorSizesExample = `<div className="flex flex-col gap-4 w-full">
  <div className="space-y-1">
    <Separator size="xs" />
    <Text>xs</Text>
  </div>
  <div className="space-y-1">
    <Separator size="sm" />
    <Text>sm</Text>
  </div>
  <div className="space-y-1">
    <Separator size="md" />
    <Text>md</Text>
  </div>
  <div className="space-y-1">
    <Separator size="lg" />
    <Text>lg</Text>
  </div>
  <div className="space-y-1">
    <Separator size="xl" />
    <Text>xl</Text>
  </div>
</div>`;

export const separatorOrientationExample = `<div className="flex items-center justify-center gap-6 w-full h-32">
  <div className="flex flex-col items-center gap-2 flex-1">
    <Separator
      orientation="horizontal"
      variant="primary"
      className="w-full"
    />
    <Text>horizontal</Text>
  </div>

  <div className="flex flex-col items-center gap-2 h-full">
    <Separator
      orientation="vertical"
      variant="primary"
      className="h-full"
    />
    <Text>vertical</Text>
  </div>
</div>`;

export const separatorPropertiesExemple = `<Separator variant={"default"} size={"xs"} orientation={"horizontal"} />`;
