export const dropdownMenuSourceCode = `import * as React from "react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/utils/cn";

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root>;

function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root {...props} />;
}

type DropdownMenuCheckboxItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
> &
  VariantProps<typeof dropdownMenuCheckboxItemVariants>;

const dropdownMenuCheckboxItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent text-foreground hover:opacity-80",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-muted-foreground hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        "dark-bordered": "border border-dark text-dark hover:bg-dark hover:text-dark-foreground",
        "muted-bordered": "border border-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground",
        "primary-bordered": "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        "secondary-bordered": "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "success-bordered": "border border-success text-success hover:bg-success hover:text-success-foreground",
        "warning-bordered": "border border-warning text-warning hover:bg-warning hover:text-warning-foreground",
        "danger-bordered": "border border-danger text-danger hover:bg-danger hover:text-danger-foreground",
        ghost: "bg-transparent border-transparent hover:bg-muted",
        "dark-ghost": "bg-muted border-dark text-dark hover:opacity-80",
        "primary-ghost": "bg-primary-200 border-primary-800 text-primary-800 hover:opacity-80",
        "secondary-ghost": "bg-secondary-200 border-secondary-800 text-secondary-800 hover:opacity-80",
        "success-ghost": "bg-success-200 border-success-800 text-success-800 hover:opacity-80",
        "warning-ghost": "bg-warning-200 border-warning-800 text-warning-800 hover:opacity-80",
        "danger-ghost": "bg-danger-200 border-danger-800 text-danger-800 hover:opacity-80",
      },
      size: {
        xl: "text-xl p-2 pr-10",
        lg: "text-lg p-2 pr-10",
        md: "text-md py-2 pr-8",
        sm: "text-sm p-2 pr-10",
        xs: "text-xs p-2 pr-8",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  variant,
  size,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(dropdownMenuCheckboxItemVariants({ variant, size }), className)}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

type DropdownMenuContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;

function DropdownMenuContent({ className, sideOffset = 4, ...props }: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

type DropdownMenuGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.Group>;
function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.Item> &
  VariantProps<typeof dropdownMenuItemVariants>;

const dropdownMenuItemVariants = cva(
  "relative flex cursor-default select-none items-center gap-1.5 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      inset: { true: "pl-7", false: "" },
      variant: {
        default: "bg-transparent text-foreground hover:opacity-80",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-muted-foreground hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        "dark-bordered": "border border-dark text-dark hover:bg-dark hover:text-dark-foreground",
        "muted-bordered": "border border-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground",
        "primary-bordered": "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        "secondary-bordered": "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "success-bordered": "border border-success text-success hover:bg-success hover:text-success-foreground",
        "warning-bordered": "border border-warning text-warning hover:bg-warning hover:text-warning-foreground",
        "danger-bordered": "border border-danger text-danger hover:bg-danger hover:text-danger-foreground",
        ghost: "bg-transparent border-transparent hover:bg-muted",
        "dark-ghost": "bg-muted border-dark text-dark hover:opacity-80",
        "primary-ghost": "bg-primary-200 border-primary-800 text-primary-800 hover:opacity-80",
        "secondary-ghost": "bg-secondary-200 border-secondary-800 text-secondary-800 hover:opacity-80",
        "success-ghost": "bg-success-200 border-success-800 text-success-800 hover:opacity-80",
        "warning-ghost": "bg-warning-200 border-warning-800 text-warning-800 hover:opacity-80",
        "danger-ghost": "bg-danger-200 border-danger-800 text-danger-800 hover:opacity-80",
      },
      size: {
        xl: "text-xl p-2 pr-10",
        lg: "text-lg p-2 pr-10",
        md: "text-md py-2 pr-8",
        sm: "text-sm p-2 pr-10",
        xs: "text-xs p-2 pr-8",
      },
    },
    defaultVariants: { inset: false, variant: "default", size: "md" },
  },
);

function DropdownMenuItem({ className, inset, variant, size, ...props }: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(dropdownMenuItemVariants({ inset, variant, size }), className)}
      {...props}
    />
  );
}

type DropdownMenuPortalProps = React.ComponentProps<typeof DropdownMenuPrimitive.Portal>;
function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

type DropdownMenuRadioGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>;
function DropdownMenuRadioGroup({ ...props }: DropdownMenuRadioGroupProps) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

type DropdownMenuRadioItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> &
  VariantProps<typeof dropdownMenuRadioItemVariants>;
const dropdownMenuRadioItemVariants = cva(
  "relative flex cursor-default select-none items-center gap-1.5 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      inset: { true: "pl-7", false: "" },
      variant: {
        default: "bg-transparent text-foreground hover:opacity-80",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-muted-foreground hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        ghost: "bg-transparent border-transparent hover:bg-muted",
      },
      size: { xl: "text-xl p-2 pr-10", lg: "text-lg p-2 pr-10", md: "text-md py-2 pr-8", sm: "text-sm p-2 pr-10", xs: "text-xs p-2 pr-8" },
    },
    defaultVariants: { inset: false, variant: "default", size: "md" },
  },
);
function DropdownMenuRadioItem({ className, children, inset, variant, size, ...props }: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(dropdownMenuRadioItemVariants({ inset, variant, size }), className)}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

type DropdownMenuShortcutProps = React.ComponentProps<"span">;
function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps) {
  return <span data-slot="dropdown-menu-shortcut" className={cn("ml-auto tracking-widest text-muted-foreground", className)} {...props} />;
}

type DropdownMenuSubProps = React.ComponentProps<typeof DropdownMenuPrimitive.Sub>;
function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

type DropdownMenuSubContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>;
function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "z-50 min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className,
      )}
      {...props}
    />
  );
}

type DropdownMenuSubTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> &
  VariantProps<typeof dropdownMenuSubTriggerVariants>;
const dropdownMenuSubTriggerVariants = cva(
  "flex cursor-default select-none items-center gap-1.5 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
  {
    variants: {
      inset: { true: "pl-7", false: "" },
      variant: {
        default: "bg-transparent text-foreground hover:opacity-80",
        dark: "bg-dark text-dark-foreground hover:opacity-80",
        muted: "bg-muted text-muted-foreground hover:opacity-80",
        primary: "bg-primary text-primary-foreground hover:opacity-80",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        success: "bg-success text-success-foreground hover:opacity-80",
        warning: "bg-warning text-warning-foreground hover:opacity-80",
        danger: "bg-danger text-danger-foreground hover:opacity-80",
        ghost: "bg-transparent border-transparent hover:bg-muted",
      },
      size: { xl: "text-xl leading-lg p-3", lg: "text-md leading-md p-3", md: "text-md p-2", sm: "text-sm p-2", xs: "text-xs p-2" },
    },
    defaultVariants: { inset: false, variant: "default", size: "md" },
  },
);
function DropdownMenuSubTrigger({ className, inset, variant, size, children, ...props }: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      className={cn(dropdownMenuSubTriggerVariants({ inset, variant, size }), className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

type DropdownMenuTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>;
function DropdownMenuTrigger({ className, ...props }: DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" className={cn("text-md", className)} {...props} />;
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  dropdownMenuCheckboxItemVariants,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  dropdownMenuItemVariants,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  dropdownMenuRadioItemVariants,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  dropdownMenuSubTriggerVariants,
  DropdownMenuTrigger,
};

export type {
  DropdownMenuProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuContentProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuPortalProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuShortcutProps,
  DropdownMenuSubProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuTriggerProps,
};
`;
