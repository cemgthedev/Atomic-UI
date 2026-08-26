import * as React from "react";

import { cn } from "@/utils/cn";

type DropdownMenuShortcutProps = React.ComponentProps<"span">;

function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { DropdownMenuShortcut };
export type { DropdownMenuShortcutProps };
