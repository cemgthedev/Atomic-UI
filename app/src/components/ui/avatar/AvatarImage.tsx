import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Avatar as AvatarPrimitive } from "radix-ui";

const avatarImageVariants = cva(
  "aspect-square size-full rounded-full object-cover",
);

type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image> &
  VariantProps<typeof avatarImageVariants>;

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(avatarImageVariants({ className }))}
      {...props}
    />
  );
}

export { AvatarImage, avatarImageVariants };
export type { AvatarImageProps };
