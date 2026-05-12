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

      <div className="grid grid-cols-7 gap-3">
        <Button variant="dark">Testando</Button>
        <Button variant="muted">Testando</Button>
        <Button variant="primary">Testando</Button>
        <Button variant="secondary">Testando</Button>
        <Button variant="success">Testando</Button>
        <Button variant="warning">Testando</Button>
        <Button variant="danger">Testando</Button>

        <Button variant="dark-bordered">Testando</Button>
        <Button variant="muted-bordered">Testando</Button>
        <Button variant="primary-bordered">Testando</Button>
        <Button variant="secondary-bordered">Testando</Button>
        <Button variant="success-bordered">Testando</Button>
        <Button variant="warning-bordered">Testando</Button>
        <Button variant="danger-bordered">Testando</Button>

        <Button variant="dark-ghost">Testando</Button>
        <Button variant="muted-ghost">Testando</Button>
        <Button variant="primary-ghost">Testando</Button>
        <Button variant="secondary-ghost">Testando</Button>
        <Button variant="success-ghost">Testando</Button>
        <Button variant="warning-ghost">Testando</Button>
        <Button variant="danger-ghost">Testando</Button>
      </div>
    </main>
  );
}
