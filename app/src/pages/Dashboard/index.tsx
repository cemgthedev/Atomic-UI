import { Heading, Label, Text } from "@/components/ui";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="w-fit p-3 bg-card border-sm border-border rounded-md">
        <Label>Sobre</Label>
        <Text className="indent-4 w-80 text-justify">
          Atomic UI é um Design System projetado para ter um conjunto completo
          de componentes simples (atômicos) e estilizáveis.
        </Text>
      </div>
    </main>
  );
}
