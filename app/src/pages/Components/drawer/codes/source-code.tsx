export const drawerSourceCode = `import { cn } from "@/utils/cn";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;
function Drawer({ ...props }: DrawerProps) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

type DrawerCloseProps = React.ComponentProps<typeof DrawerPrimitive.Close>;
function DrawerClose({ ...props }: DrawerCloseProps) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

type DrawerPortalProps = React.ComponentProps<typeof DrawerPrimitive.Portal>;
function DrawerPortal({ ...props }: DrawerPortalProps) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

type DrawerOverlayProps = React.ComponentProps<typeof DrawerPrimitive.Overlay>;
function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn("fixed inset-0 z-50 bg-black/10", className)}
      {...props}
    />
  );
}

type DrawerContentProps = React.ComponentProps<typeof DrawerPrimitive.Content>;
function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn("group/drawer-content fixed z-50 flex h-auto flex-col bg-popover text-sm text-popover-foreground", className)}
        {...props}
      >
        <div className="mx-auto mt-4 hidden h-1 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

type DrawerFooterProps = React.ComponentProps<"div">;
function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return <div data-slot="drawer-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />;
}

type DrawerHeaderProps = React.ComponentProps<"div">;
function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return <div data-slot="drawer-header" className={cn("flex flex-col gap-0.5 p-4", className)} {...props} />;
}

type DrawerTriggerProps = React.ComponentProps<typeof DrawerPrimitive.Trigger>;
function DrawerTrigger({ ...props }: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

export { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTrigger };
export type { DrawerCloseProps, DrawerContentProps, DrawerFooterProps, DrawerHeaderProps, DrawerOverlayProps, DrawerPortalProps, DrawerProps, DrawerTriggerProps };`;
