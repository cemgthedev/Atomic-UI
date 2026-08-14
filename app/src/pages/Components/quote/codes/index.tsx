export const quoteExample = `<Quote>“A simplicidade é o último grau de sofisticação.”</Quote>`;

export const quoteVariantsExample = `<div className="flex flex-col gap-2 w-full max-w-xl">
    {(["primary", "secondary", "success", "warning", "danger"] as const).map(
        (variant) => (
            <Quote key={variant} variant={variant} rounded="md">
                Exemplo em {variant}
            </Quote>
        ),
    )}
</div>`;

export const quoteSizesExample = `<div className="flex flex-col gap-2 max-w-xl">
    {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Quote key={size} variant="primary" size={size} rounded="md">Citação {size}</Quote>
    ))}
</div>`;

export const quoteRoundedExample = `<div className="flex flex-col gap-2 max-w-xl">
    {(["xs", "sm", "md", "lg", "xl", "full"] as const).map((rounded) => (
        <Quote key={rounded} variant="primary" rounded={rounded}>Citação {rounded}</Quote>
    ))}
</div>`;

export const quotePropertiesExample = `<Quote variant="default" size="md" rounded="md">
            Citação com propriedades
        </Quote>`;
