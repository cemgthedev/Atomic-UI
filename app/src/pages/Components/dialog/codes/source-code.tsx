export const dialogSourceCode = `import { Dialog as DialogPrimitive } from "radix-ui";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { XIcon } from "lucide-react";

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;
function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
function DialogClose({ ...props }: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;
function DialogPortal({ ...props }: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;
function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return <DialogPrimitive.Overlay data-slot="dialog-overlay" className={cn("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className)} {...props} />;
}

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & { showCloseButton?: boolean };
function DialogContent({ className, children, showCloseButton = true, ...props }: DialogContentProps) {
  return <DialogPortal><DialogOverlay /><DialogPrimitive.Content data-slot="dialog-content" className={cn("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className)} {...props}>{children}{showCloseButton && <DialogPrimitive.Close data-slot="dialog-close" asChild><Button variant="ghost" className="absolute top-2 right-2" size="sm"><XIcon /><span className="sr-only">Close</span></Button></DialogPrimitive.Close>}</DialogPrimitive.Content></DialogPortal>;
}

type DialogHeaderProps = React.ComponentProps<"div">;
function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <div data-slot="dialog-header" className={cn("flex flex-col gap-2", className)} {...props} />;
}

type DialogFooterProps = React.ComponentProps<"div"> & { showCloseButton?: boolean };
function DialogFooter({ className, showCloseButton = false, children, ...props }: DialogFooterProps) {
  return <div data-slot="dialog-footer" className={cn("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className)} {...props}>{children}{showCloseButton && <DialogPrimitive.Close asChild><Button variant="dark-bordered">Close</Button></DialogPrimitive.Close>}</div>;
}

type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTrigger };
export type { DialogProps, DialogCloseProps, DialogContentProps, DialogFooterProps, DialogHeaderProps, DialogOverlayProps, DialogPortalProps, DialogTriggerProps };
`;
