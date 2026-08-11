export const paginationExample = `<Pagination>
    <PaginationContent>
        <PaginationItem>
            <PaginationPrevious variant="primary" href="#" />
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#" variant="primary" isActive>
            1
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#" variant="primary">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
            <PaginationNext href="#" variant="primary" />
        </PaginationItem>
    </PaginationContent>
</Pagination>`;

export const paginationVariantsExample = `<div className="flex flex-col gap-3">
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
    <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious variant={variant} href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" variant={variant} isActive>
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" variant={variant}>
                2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
                <PaginationNext href="#" variant={variant} />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
    ))}
</div>`;

export const paginationSizesExample = `<div className="flex flex-col gap-3">
    {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Pagination key={size}>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious
                size={size}
                variant="dark-ghost"
                href="#"
                />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                size={size}
                variant="dark-ghost"
                href="#"
                isActive
                >
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                size={size}
                variant="dark-ghost"
                href="#"
                >
                2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
                <PaginationNext
                size={size}
                variant="dark-ghost"
                href="#"
                />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
    ))}
</div>`;

export const paginationRoundedExample = `<div className="flex flex-col gap-3">
    {(["xs", "sm", "md", "lg", "xl", "full"] as const).map(
    (rounded) => (
        <Pagination key={rounded}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        rounded={rounded}
                        variant="primary"
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        rounded={rounded}
                        variant="primary"
                        href="#"
                        isActive
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        rounded={rounded}
                        variant="primary"
                        href="#"
                    >
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        rounded={rounded}
                        variant="primary"
                        href="#"
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    ))}
</div>`;

export const paginationPropertiesExample = `<Pagination>
    <PaginationContent>
        <PaginationItem>
            <PaginationPrevious
                variant="default"
                size="md"
                rounded="md"
                href="#"
            />
        </PaginationItem>
        <PaginationItem>
            <PaginationLink
                variant="default"
                size="md"
                rounded="md"
                href="#"
                isActive
            >
                1
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink
                variant="default"
                size="md"
                rounded="md"
                href="#"
            >
                2
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
            <PaginationNext
                variant="default"
                size="md"
                rounded="md"
                href="#"
            />
        </PaginationItem>
    </PaginationContent>
</Pagination>`;
