import {
  Button,
  buttonVariants,
  Divider,
  Heading,
  Image,
  ImageContent,
  Label,
  Text,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import { Component, Copy, Footprints, Settings2 } from "lucide-react";
import { Link } from "react-router";

export function Dashboard() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-8 md:px-8 md:py-16 mb-16">
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
            className={buttonVariants({
              variant: "primary-bordered",
              className: "min-w-50",
            })}
          >
            <Footprints size={20} />
            Primeiros passos
          </Link>
          <Link
            to={urls.components}
            className={buttonVariants({
              variant: "secondary",
              className: "min-w-50",
            })}
          >
            <Component size={20} />
            Componentes
          </Link>
        </div>
      </div>

      <Divider size="xs" />

      {/* Customization */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-1 w-full md:w-1/2 text-center">
          <Label size="lg">Customize seus componentes em um só lugar</Label>
          <Text>
            Centralize a personalização da sua interface no style.css. Ajuste
            cores, espaçamentos e outros tokens de design em um único lugar para
            adaptar o Design System à identidade visual da sua aplicação.
          </Text>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch">
          <figure className="flex flex-col gap-3 w-88">
            <Image className="w-full h-64">
              <ImageContent src="/card-image.svg" className="object-cover" />
            </Image>

            <figcaption className="max-w-full">
              <Label size="xs">Card personalizado</Label>
              <Text>
                Exemplo de card personalizado utilizando tokens de design
                definidos no style.css.
              </Text>
            </figcaption>

            <div className="flex gap-3">
              <Button variant="primary-bordered" className="flex-1">
                Botão
              </Button>
              <Button variant="secondary" className="flex-1">
                Botão
              </Button>
            </div>
          </figure>

          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <Label>Cores personalizadas</Label>
                <Text>Exemplo de personalização das cores no style.css.</Text>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 border border-muted-200 rounded-lg p-3">
                  <div className="w-7 h-7 bg-primary border border-muted-100 rounded-xs" />

                  <div className="flex flex-col">
                    <Label size="xs">Cor primária (primary)</Label>
                    <Text>oklch(60.9% 0.126 221.723)</Text>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-muted-200 rounded-lg p-3">
                  <div className="w-7 h-7 bg-secondary border border-muted-100 rounded-xs" />

                  <div className="flex flex-col">
                    <Label size="xs">Cor secundária (secondary)</Label>
                    <Text>oklch(54.1% 0.281 293.009)</Text>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-muted-200 rounded-lg p-3">
                  <div className="w-7 h-7 bg-foreground border border-muted-100 rounded-xs" />

                  <div className="flex flex-col">
                    <Label size="xs">Primeiro plano (foreground)</Label>
                    <Text>oklch(14.1% 0.005 285.823)</Text>
                  </div>
                </div>
              </div>
            </div>

            <Button
              startContent={<Copy size={20} />}
              variant="dark-ghost"
              className="w-full"
            >
              Copiar
            </Button>
          </div>
        </div>

        <Link
          to={urls.customization}
          className={buttonVariants({
            variant: "primary-bordered",
            className: "min-w-50",
          })}
        >
          <Settings2 size={20} />
          Customização
        </Link>
      </div>
    </section>
  );
}
