export const tabsExample = `<Tabs defaultValue="visao-geral" className="w-[400px]">
    <TabsList>
        <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
        <TabsTrigger value="analises">Análises</TabsTrigger>
        <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        <TabsTrigger value="configuracoes">
            Configurações
        </TabsTrigger>
    </TabsList>

    <TabsContent value="visao-geral">
        <Card>
            <CardHeader>
            <Label>Visão Geral</Label>
            <Text>
                Visualize suas principais métricas e as atividades
                recentes dos seus projetos. Acompanhe o progresso de
                todos os projetos ativos em um só lugar.
            </Text>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
            Você possui 12 projetos ativos e 3 tarefas pendentes.
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="analises">
        <Card>
            <CardHeader>
            <Label>Análises</Label>
            <Text>
                Acompanhe métricas de desempenho e engajamento dos
                usuários. Monitore tendências e identifique
                oportunidades de crescimento.
            </Text>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
            As visualizações de página aumentaram 25% em relação ao
            mês passado.
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="relatorios">
        <Card>
            <CardHeader>
            <Label>Relatórios</Label>
            <Text>
                Gere e faça o download de relatórios detalhados.
                Exporte dados em diferentes formatos para análise.
            </Text>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
            Você possui 5 relatórios prontos para exportação.
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="configuracoes">
        <Card>
            <CardHeader>
            <Label>Configurações</Label>
            <Text>
                Gerencie as preferências e opções da sua conta.
                Personalize a experiência de acordo com as suas
                necessidades.
            </Text>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
            Configure notificações, segurança e temas da aplicação.
            </CardContent>
        </Card>
    </TabsContent>
</Tabs>`;

export const tabsVariantsExample = `<Tabs defaultValue="primary" className="w-[700px]">
    <TabsList className="flex flex-wrap">
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
        <TabsTrigger
        key={variant}
        value={variant}
        variant={variant}
        >
        {variant}
        </TabsTrigger>
    ))}
    </TabsList>

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
    <TabsContent key={variant} value={variant}>
        <Card>
        <CardContent className="pt-6">
            <Label>{variant}</Label>
        </CardContent>
        </Card>
    </TabsContent>
    ))}
</Tabs>`;

export const tabsSizesExample = `<Tabs defaultValue="md" className="w-full">
    <TabsList className="flex flex-wrap">
    {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <TabsTrigger key={size} value={size} size={size}>
        {size.toUpperCase()}
        </TabsTrigger>
    ))}
    </TabsList>

    {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <TabsContent key={size} value={size}>
        <Card>
        <CardContent className="pt-6">
            <Label>{size.toUpperCase()}</Label>
        </CardContent>
        </Card>
    </TabsContent>
    ))}
</Tabs>`;

export const tabsVerticalExample = `<Tabs
    defaultValue="perfil"
    orientation="vertical"
    className="w-full"
>
    <TabsList className="flex flex-col h-fit">
        <TabsTrigger value="perfil">Perfil</TabsTrigger>

        <TabsTrigger value="conta">Conta</TabsTrigger>

        <TabsTrigger value="notificacoes">Notificações</TabsTrigger>

        <TabsTrigger value="seguranca">Segurança</TabsTrigger>
    </TabsList>

    <TabsContent value="perfil">
        <Card>
            <CardContent className="pt-6">
            <Label>Perfil</Label>
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="conta">
        <Card>
            <CardContent className="pt-6">
            <Label>Conta</Label>
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="notificacoes">
        <Card>
            <CardContent className="pt-6">
            <Label>Notificações</Label>
            </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="seguranca">
        <Card>
            <CardContent className="pt-6">
            <Label>Segurança</Label>
            </CardContent>
        </Card>
    </TabsContent>
</Tabs>`;

export const tabsTriggerPropertiesExample = `<Tabs defaultValue="primary" className="w-full">
    <TabsList className="flex flex-wrap">
        <TabsTrigger value="primary" variant="primary" size="md">
        Primary
        </TabsTrigger>

        <TabsTrigger
        value="secondary"
        variant="secondary"
        size="md"
        >
        Secondary
        </TabsTrigger>

        <TabsTrigger value="success" variant="success" size="md">
        Success
        </TabsTrigger>
    </TabsList>

    <TabsContent value="primary">
        <Card>
        <CardContent className="pt-6">
            <Label>Primary</Label>
        </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="secondary">
        <Card>
        <CardContent className="pt-6">
            <Label>Secondary</Label>
        </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="success">
        <Card>
        <CardContent className="pt-6">
            <Label>Success</Label>
        </CardContent>
        </Card>
    </TabsContent>
</Tabs>`;

export const tabsPropertiesExample = `<Tabs
    defaultValue="perfil"
    orientation="horizontal"
    activationMode="automatic"
    className="w-full"
    >
    <TabsList>
        <TabsTrigger value="perfil">Perfil</TabsTrigger>
        <TabsTrigger value="conta">Conta</TabsTrigger>
    </TabsList>

    <TabsContent value="perfil">
        <Card>
        <CardContent className="pt-6">
            <Label>Perfil</Label>
        </CardContent>
        </Card>
    </TabsContent>

    <TabsContent value="conta">
        <Card>
        <CardContent className="pt-6">
            <Label>Conta</Label>
        </CardContent>
        </Card>
    </TabsContent>
</Tabs>`;
