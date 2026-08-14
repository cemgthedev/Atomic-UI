export const badgeExample = `<Badge variant="primary">Badge</Badge>`;

export const badgeVariantsExample = `<div className="flex flex-wrap gap-2">
  <Badge variant={"primary"}>primary</Badge>
  <Badge variant={"success"}>success</Badge>
  <Badge variant={"warning"}>warning</Badge>
  <Badge variant={"danger"}>danger</Badge>
</div>`;

export const badgeSizesExample = `<div className="flex justify-center flex-wrap gap-4">
  <div className="space-y-1">
    <Badge
      variant={"dark-bordered"}
      size={"xs"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>xs</Text>
  </div>
  <div className="space-y-1">
    <Badge
      variant={"dark-bordered"}
      size={"sm"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>sm</Text>
  </div>
  <div className="space-y-1">
    <Badge variant={"dark-bordered"} className="w-full">
      Badge
    </Badge>
    <Text>md</Text>
  </div>
  <div className="space-y-1">
    <Badge
      variant={"dark-bordered"}
      size={"lg"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>lg</Text>
  </div>
  <div className="space-y-1">
    <Badge
      variant={"dark-bordered"}
      size={"xl"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>xl</Text>
  </div>
</div>`;

export const badgeRoundsExemple = `<div className="flex justify-center flex-wrap gap-4">
  <div className="space-y-1">
    <Badge
      variant={"primary"}
      rounded={"xs"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>xs</Text>
  </div>
  <div className="space-y-1">
    <Badge
      variant={"primary"}
      rounded={"sm"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>sm</Text>
  </div>
  <div className="space-y-1">
    <Badge variant={"primary"} className="w-full">
      Badge
    </Badge>
    <Text>md</Text>
  </div>
  <div className="space-y-1">
    <Badge
      variant={"primary"}
      rounded={"lg"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>lg</Text>
  </div>
  <div className="space-y-1">
    <Badge
      variant={"primary"}
      rounded={"xl"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>xl</Text>
  </div>
  <div className="space-y-1">
    <Badge
      variant={"primary"}
      rounded={"full"}
      className="w-full"
    >
      Badge
    </Badge>
    <Text>full</Text>
  </div>
</div>`;

export const badgePropertiesExemple = `<Badge variant={"default"} size={"md"} rounded={"md"}>
  Badge
</Badge>`;
