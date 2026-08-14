export const progressExample = `<Progress value={60}>
  <ProgressValue value={60} />
</Progress>`;

export const progressVariantsExample = `<div className="flex flex-col gap-4 w-full">
  <Progress value={40} variant="primary">
    <ProgressValue value={40} variant="primary" />
  </Progress>
  <Progress value={40} variant="secondary">
    <ProgressValue value={40} variant="secondary" />
  </Progress>
  <Progress value={70} variant="success">
    <ProgressValue value={70} variant="success" />
  </Progress>
  <Progress value={70} variant="warning">
    <ProgressValue value={70} variant="warning" />
  </Progress>
  <Progress value={70} variant="danger">
    <ProgressValue value={70} variant="danger" />
  </Progress>
</div>`;

export const progressSizesExample = `<div className="flex flex-col gap-4 w-full">
  <div className="space-y-1">
    <Progress value={40} size="xs">
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>xs</Text>
  </div>
  <div className="space-y-1">
    <Progress value={40} size="sm">
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>sm</Text>
  </div>
  <div className="space-y-1">
    <Progress value={40}>
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>md</Text>
  </div>
  <div className="space-y-1">
    <Progress value={40} size="lg">
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>lg</Text>
  </div>
  <div className="space-y-1">
    <Progress value={40} size="xl">
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>xl</Text>
  </div>
</div>`;

export const progressStripedExample = `<div className="flex flex-col gap-4 w-full">
  <Progress value={40} variant="primary">
    <ProgressValue value={40} variant="primary" striped />
  </Progress>
  <Progress value={60} variant="success">
    <ProgressValue value={60} variant="success" striped />
  </Progress>
  <Progress value={80} variant="warning">
    <ProgressValue value={80} variant="warning" striped />
  </Progress>
</div>`;

export const progressAnimatedExample = `<div className="flex flex-col gap-4 w-full">
  <Progress value={40} variant="primary">
    <ProgressValue value={40} variant="primary" striped animated />
  </Progress>
  <Progress value={60} variant="secondary">
    <ProgressValue value={60} variant="secondary" striped animated />
  </Progress>
</div>`;

export const progressRoundsExample = `<div className="flex flex-col gap-4 w-full">
  <div className="space-y-1">
    <Progress
      value={40}
      variant="primary"
      rounded="xs"
      className="h-8"
    >
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>xs</Text>
  </div>
  <div className="space-y-1">
    <Progress
      value={40}
      variant="primary"
      rounded="sm"
      className="h-8"
    >
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>sm</Text>
  </div>
  <div className="space-y-1">
    <Progress
      value={40}
      variant="primary"
      rounded="md"
      className="h-8"
    >
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>md</Text>
  </div>
  <div className="space-y-1">
    <Progress
      value={40}
      variant="primary"
      rounded="lg"
      className="h-8"
    >
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>lg</Text>
  </div>
  <div className="space-y-1">
    <Progress
      value={40}
      variant="primary"
      rounded="xl"
      className="h-8"
    >
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>xl</Text>
  </div>
  <div className="space-y-1">
    <Progress value={40} variant="primary" className="h-8">
      <ProgressValue value={40} variant="primary" />
    </Progress>
    <Text>full</Text>
  </div>
</div>`;

export const progressPropertiesExample = `<Progress
  value={70}
  variant="default"
  size={"md"}
  rounded={"md"}
>
  <ProgressValue value={70} variant="default" />
</Progress>`;
