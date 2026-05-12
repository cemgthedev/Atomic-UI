import { Heading, Label, Text } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Message } from "@/components/ui/message";
import {
  CheckCircleIcon,
  CircleAlertIcon,
  TriangleAlertIcon,
} from "lucide-react";

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

      <Message variant={"success"} startContent={<CheckCircleIcon size={12} />}>
        Atenção esta é uma mensagem de sucesso
      </Message>
      <Message
        variant={"warning"}
        startContent={<TriangleAlertIcon size={12} />}
      >
        Atenção esta é uma mensagem de aviso
      </Message>
      <Message variant={"danger"} startContent={<CircleAlertIcon size={12} />}>
        Atenção esta é uma mensagem de perigo
      </Message>

      <Button>Testando</Button>
      <Button variant={"muted"}>Testando</Button>
      <Button variant={"primary"} size="xl" rounded="full">
        Testando
      </Button>
      <Button variant={"secondary"} size="lg" rounded="xl">
        Testando
      </Button>
      <Button
        variant={"success"}
        size="md"
        rounded="lg"
        startContent={<CheckCircleIcon size={20} />}
        endContent={<CheckCircleIcon size={20} />}
      >
        Testando
      </Button>
      <Button variant={"warning"} size="sm" rounded="sm">
        Testando
      </Button>
      <Button variant={"danger"} size="xs" rounded="xs">
        Testando
      </Button>
    </main>
  );
}
