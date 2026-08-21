export const toastExample = `<Button
    variant={"primary"}
    onClick={() => toast.info("Toast informativo")}
>
    Mostrar toast
</Button>`;

export const toastVariantsExample = `<div className="flex flex-wrap justify-center gap-2">
    {(["default", "primary", "primary-bordered", "primary-ghost", "secondary", "success", "warning", "danger"] as const).map(
        (variant) => (
            <Button
                key={variant}
                variant={variant}
                onClick={() => toast("Toast informativo", { variant })}
            >
                {variant}
            </Button>
        ),
    )}
</div>`;

export const toastDescriptionsExample = `<div className="flex flex-wrap gap-3">
    <Button
        variant={"primary"}
        onClick={() =>
            toast.info("Toast informativo", {
            description: "Descrição do toast.",
            })
        }
    >
        Mostrar toast com descrição
    </Button>
    <Button
        variant={"primary-bordered"}
        onClick={() =>
            toast.info("Toast informativo", {
            description: (
                <div className="flex gap-1 items-center text-primary-800">
                <EyeIcon size={16} />
                <Text size="sm">Descrição personalizada</Text>
                </div>
            ),
            })
        }
    >
        Mostrar toast com descrição personalizada
    </Button>
</div>`;

export const toastPositionsExample = `<div className="flex flex-wrap justify-center gap-2">
    <Button
        variant="dark-bordered"
        onClick={() =>
            toast("Event has been created", { position: "top-left" })
        }
    >
        Top Left
    </Button>
    <Button
        variant="dark-bordered"
        onClick={() =>
            toast("Event has been created", {
            position: "top-center",
            })
        }
    >
        Top Center
    </Button>
    <Button
        variant="dark-bordered"
        onClick={() =>
            toast("Event has been created", { position: "top-right" })
        }
    >
        Top Right
    </Button>
    <Button
        variant="dark-bordered"
        onClick={() =>
            toast("Event has been created", {
            position: "bottom-left",
            })
        }
    >
        Bottom Left
    </Button>
    <Button
        variant="dark-bordered"
        onClick={() =>
            toast("Event has been created", {
            position: "bottom-center",
            })
        }
    >
        Bottom Center
    </Button>
    <Button
        variant="dark-bordered"
        onClick={() =>
            toast("Event has been created", {
            position: "bottom-right",
            })
        }
    >
        Bottom Right
    </Button>
</div>`;

export const toastCustomsExample = `<div className="flex flex-wrap justify-center gap-2">
    {(
    [
        "default",
        "primary",
        "primary-bordered",
        "primary-ghost",
        "secondary",
        "success",
        "warning",
        "danger",
    ] as const
    ).map((variant) => (
    <Button
        key={variant}
        variant={variant}
        onClick={() => {
        toast(
            <div className="flex gap-1 items-center p-1 animate-pulse">
            <InfoIcon size={20} />
            <Text>
                A custom toast with a{" "}
                <a
                href="https://emilkowal.ski/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline leading-0"
                >
                link
                </a>
            </Text>
            </div>,
            {
            variant: variant,
            },
        );
        }}
    >
        {variant}
    </Button>
    ))}
</div>`;

export const toastPropertiesExample = ` <Button
    variant={"default"}
    onClick={() =>
    toast("Toast informativo", {
        variant: "default"
    })
    }
>
    Mostrar toast
</Button>`;
