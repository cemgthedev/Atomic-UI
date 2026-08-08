export const imageExample = `<Image size="md" rounded="md" aspect="square">
  <ImageContent src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Imagem" />
  <ImageFallback>Imagem</ImageFallback>
</Image>`;

export const imageSizesExample = `<div className="flex items-center gap-4 flex-wrap">
  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <div
      key={size}
      className="flex flex-col items-center gap-1"
    >
      <Image size={size} rounded="md" aspect="square">
        <ImageContent
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt={size}
        />
        <ImageFallback>{size}</ImageFallback>
      </Image>
      <Text>{size}</Text>
    </div>
  ))}
</div>`;

export const imageRoundsExample = `<div className="flex items-center gap-4 flex-wrap">
  {(["none", "sm", "md", "lg", "xl", "full"] as const).map(
    (rounded) => (
      <div
        key={rounded}
        className="flex flex-col items-center gap-1"
      >
        <Image size="md" rounded={rounded} aspect="square">
          <ImageContent
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt={rounded}
          />
          <ImageFallback>{rounded}</ImageFallback>
        </Image>
        <Text>{rounded}</Text>
      </div>
    ),
  )}
</div>`;

export const imageAspectExample = `<div className="flex items-center gap-4 flex-wrap">
  {(["square", "video", "portrait", "auto"] as const).map(
    (aspect) => (
      <div
        key={aspect}
        className="flex flex-col items-center gap-1"
      >
        <Image size="md" rounded="md" aspect={aspect}>
          <ImageContent
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
            alt={aspect}
          />
          <ImageFallback>{aspect}</ImageFallback>
        </Image>
        <Text>{aspect}</Text>
      </div>
    ),
  )}
</div>`;

export const imagePropertiesExample = `<Image size="md" rounded="md" aspect="square">
  <ImageContent src="https://images.unsplash.com/photo-1494526585095-c41746248156" alt="Imagem" />
  <ImageFallback>Imagem</ImageFallback>
</Image>`;
