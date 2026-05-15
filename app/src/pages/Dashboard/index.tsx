import {
  Heading,
  Image,
  ImageContent,
  ImageFallback,
  ImageSkeleton,
  Label,
} from "@/components/ui";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
        <Image aspect={"square"}>
          <ImageContent src="https://github.com/shadcn.png" alt="Landscape" />

          <ImageSkeleton variant={"secondary"} />

          <ImageFallback>Falha ao carregar</ImageFallback>
        </Image>
        <Image>
          <ImageContent src="https://github.com/shadcn.png" alt="Landscape" />

          <ImageSkeleton variant={"success"} />
        </Image>
        <Image>
          <ImageContent src="https://github.com/shadcn.png" alt="Landscape" />

          <ImageSkeleton variant={"warning"} />
        </Image>
        <Image>
          <ImageContent src="https://github.com/shadcn.png" alt="Landscape" />

          <ImageSkeleton variant={"danger"} />
        </Image>
      </div>
    </main>
  );
}
