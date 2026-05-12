import { Heading, Label, Text } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
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

      <Heading>Botões</Heading>
      <div className="grid grid-cols-7 gap-3">
        <Button variant="dark" size={"xl"}>
          Testando
        </Button>
        <Button variant="muted" size={"lg"}>
          Testando
        </Button>
        <Button variant="primary" size={"md"}>
          Testando
        </Button>
        <Button variant="secondary" size={"sm"}>
          Testando
        </Button>
        <Button variant="success" size={"xs"}>
          Testando
        </Button>
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

      <Heading>Badges</Heading>
      <div className="grid grid-cols-7 gap-3">
        <Badge variant="dark" size={"xl"}>
          Testando
        </Badge>
        <Badge variant="muted" size={"lg"}>
          Testando
        </Badge>
        <Badge variant="primary" size={"md"}>
          Testando
        </Badge>
        <Badge variant="secondary" size={"sm"}>
          Testando
        </Badge>
        <Badge variant="success" size={"xs"}>
          Testando
        </Badge>
        <Badge variant="warning">Testando</Badge>
        <Badge variant="danger">Testando</Badge>

        <Badge variant="dark-bordered">Testando</Badge>
        <Badge variant="muted-bordered">Testando</Badge>
        <Badge variant="primary-bordered">Testando</Badge>
        <Badge variant="secondary-bordered">Testando</Badge>
        <Badge variant="success-bordered">Testando</Badge>
        <Badge variant="warning-bordered">Testando</Badge>
        <Badge variant="danger-bordered">Testando</Badge>

        <Badge variant="dark-ghost">Testando</Badge>
        <Badge variant="muted-ghost">Testando</Badge>
        <Badge variant="primary-ghost">Testando</Badge>
        <Badge variant="secondary-ghost">Testando</Badge>
        <Badge variant="success-ghost">Testando</Badge>
        <Badge variant="warning-ghost">Testando</Badge>
        <Badge variant="danger-ghost">Testando</Badge>
      </div>
    </main>
  );
}
