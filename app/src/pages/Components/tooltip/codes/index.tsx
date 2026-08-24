export const tooltipExample = `<Tooltip>
    <TooltipTrigger asChild>
        <Button variant="primary">Passe o cursor</Button>
    </TooltipTrigger>
    <TooltipContent>
        Informação complementar
    </TooltipContent>
</Tooltip>`;

export const tooltipPositionsExample = `<div className="grid grid-cols-2 gap-12 p-12">
    {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} defaultOpen>
            <TooltipTrigger asChild>
                <Button variant="secondary">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side} sideOffset={8}>
                Tooltip à {side}
            </TooltipContent>
        </Tooltip>
    ))}
</div>`;

export const tooltipVariantsExample = `<div className="grid grid-cols-2 gap-12 p-12">
    {(["default", "dark", "primary", "secondary", "success", "warning", "danger"] as const).map((variant) => (
        <Tooltip key={variant} defaultOpen>
            <TooltipTrigger asChild>
                <Button variant="secondary">{variant}</Button>
            </TooltipTrigger>
            <TooltipContent variant={variant} side="top" sideOffset={8}>
                Tooltip {variant}
            </TooltipContent>
        </Tooltip>
    ))}
</div>`;

export const tooltipPropertiesExample = `<TooltipProvider delayDuration={300}>
    <Tooltip>
        <TooltipTrigger asChild>
            <Button variant="default">Com atraso</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={8}>
            Aparece após 300 ms
        </TooltipContent>
    </Tooltip>
</TooltipProvider>`;
