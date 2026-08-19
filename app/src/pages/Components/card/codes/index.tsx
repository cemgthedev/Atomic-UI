export const cardExemple = `<Card
    variant="primary-ghost"
    size="md"
    className="min-w-0 max-w-xs"
>
    <CardHeader>
    <Image rounded="md" aspect="square" className="w-full h-40">
        <ImageContent
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Imagem"
        />
        <ImageFallback>Imagem</ImageFallback>
    </Image>
    </CardHeader>
    <CardContent>
    <Label>Serra da Mantiqueira</Label>
    <Text>
        Uma região montanhosa conhecida por suas paisagens
        naturais, áreas de vegetação e cidades turísticas.
    </Text>
    </CardContent>
    <CardFooter>
    <Button variant="primary" size="xs">
        <ExternalLinkIcon size={16} />
        <Text size="sm">Saber mais</Text>
    </Button>
    </CardFooter>
</Card>`;

export const cardVariantsExemple = `<div className="flex justify-center flex-wrap gap-4">
    {(
    [
        "primary",
        "primary-bordered",
        "primary-ghost",
        "secondary",
        "success",
        "warning",
        "danger",
    ] as const
    ).map((variant) => (
    <Card
        variant={variant}
        size="md"
        className="min-w-0 max-w-xs"
    >
        <CardHeader>
        <Image
            rounded="md"
            aspect="square"
            className="w-full h-40"
        >
            <ImageContent
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Imagem"
            />
            <ImageFallback>Imagem</ImageFallback>
        </Image>
        </CardHeader>
        <CardContent>
        <Label>Serra da Mantiqueira</Label>
        <Text>
            Uma região montanhosa conhecida por suas paisagens
            naturais, áreas de vegetação e cidades turísticas.
        </Text>
        </CardContent>
        <CardFooter>
        <Button variant={variant} size="xs">
            <ExternalLinkIcon size={16} />
            <Text size="sm">Saber mais</Text>
        </Button>
        </CardFooter>
    </Card>
    ))}
</div>`;

export const cardSizesExemple = `<div className="flex justify-center flex-wrap gap-4">
    {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Card
        variant="dark-bordered"
        size={size}
        className="min-w-0"
    >
        <CardHeader>
        <Image
            rounded="md"
            aspect="square"
            className="w-full h-40"
        >
            <ImageContent
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Imagem"
            />
            <ImageFallback>Imagem</ImageFallback>
        </Image>
        </CardHeader>
        <CardContent>
        <Label>Serra da Mantiqueira</Label>
        <Text>
            Uma região montanhosa conhecida por suas paisagens
            naturais, áreas de vegetação e cidades turísticas.
        </Text>
        </CardContent>
        <CardFooter>
        <Button variant="dark-bordered" size="xs">
            <ExternalLinkIcon size={16} />
            <Text size="sm">Saber mais</Text>
        </Button>
        </CardFooter>
    </Card>
    ))}
</div>`;

export const cardRoundsExemple = `<div className="flex justify-center flex-wrap gap-4">
    {(["xs", "sm", "md", "lg", "xl", "full"] as const).map(
    (rounded) => (
        <Card
        variant="primary"
        rounded={rounded}
        className="min-w-0 max-w-sm"
        >
        <CardHeader>
            <Image
            rounded="md"
            aspect="square"
            className="w-full h-40"
            >
            <ImageContent
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Imagem"
            />
            <ImageFallback>Imagem</ImageFallback>
            </Image>
        </CardHeader>
        <CardContent>
            <Label>Serra da Mantiqueira</Label>
            <Text>
            Uma região montanhosa conhecida por suas paisagens
            naturais, áreas de vegetação e cidades turísticas.
            </Text>
        </CardContent>
        <CardFooter>
            <Button variant="primary" size="xs">
            <ExternalLinkIcon size={16} />
            <Text size="sm">Saber mais</Text>
            </Button>
        </CardFooter>
        </Card>
    ),
    )}
</div>`;

export const cardPropertiesExemple = `<Card
    variant="default"
    size="md"
    rounded="md"
    className="min-w-0 max-w-xs"
>
    <CardHeader>
    <Image rounded="md" aspect="square" className="w-full h-40">
        <ImageContent
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Imagem"
        />
        <ImageFallback>Imagem</ImageFallback>
    </Image>
    </CardHeader>
    <CardContent>
    <Label>Serra da Mantiqueira</Label>
    <Text>
        Uma região montanhosa conhecida por suas paisagens
        naturais, áreas de vegetação e cidades turísticas.
    </Text>
    </CardContent>
    <CardFooter>
    <Button variant="default" size="xs">
        <ExternalLinkIcon size={16} />
        <Text size="sm">Saber mais</Text>
    </Button>
    </CardFooter>
</Card>`;
