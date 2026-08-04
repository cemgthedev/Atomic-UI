import {
  buttonVariants,
  Divider,
  Heading,
  Image,
  ImageContent,
  Label,
  Text,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import { Component, Footprints } from "lucide-react";
import { Link } from "react-router";

export function Dashboard() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-8 md:px-8 md:py-16">
      {/* Introduction */}
      <div className="relative flex flex-col items-center gap-6">
        <Image className="absolute -top-8 w-full h-72 -z-10 border-none opacity-30 backdrop-blur-xs">
          <ImageContent src="/atoms.svg" className="object-contain" />
        </Image>

        <Heading>Atomic UI</Heading>

        <div className="flex flex-col gap-1 w-full md:w-1/2 text-center">
          <Label>Interfaces modernas com componentes atômicos</Label>
          <Text>
            O Atomic UI é um Design System desenvolvido com componentes
            personalizados baseados em shadcn/ui, oferecendo acessibilidade,
            flexibilidade e uma excelente experiência para desenvolvedores.
          </Text>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to={urls.documentation}
            className={buttonVariants({ variant: "primary-bordered", className: "min-w-50" })}
          >
            <Footprints size={20} />
            Primeiros passos
          </Link>
          <Link
            to={urls.components}
            className={buttonVariants({ variant: "secondary", className: "min-w-50" })}
          >
            <Component size={20} />
            Componentes
          </Link>
        </div>
      </div>

      <Divider size="xs" />
    </section>
  );
}
