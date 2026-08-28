import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Label,
} from "@/components/ui";
import { webUrls } from "@/constants/sidelinks";
import { urls } from "@/constants/urls";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router";

const sidebarRoutes = [urls.documentation, urls.components, urls.customization];

type SidebarProps = {
  collapsible?: "icon" | "none";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function Sidebar({
  collapsible = "none",
  open: controlledOpen,
  defaultOpen = true,
  onOpenChange,
  className,
}: SidebarProps) {
  const { pathname, hash } = useLocation();

  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const open = controlledOpen ?? internalOpen;

  const setOpen = (value: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(value);
    }

    onOpenChange?.(value);
  };

  const currentUrl = `${pathname}${hash ?? ""}`;

  const shouldShowSidebar = useMemo(
    () =>
      sidebarRoutes.some((route) => {
        const normalized = route.startsWith("/") ? route : `/${route}`;

        return pathname === normalized || pathname.startsWith(`${normalized}/`);
      }),
    [pathname],
  );

  if (!shouldShowSidebar) {
    return null;
  }

  const isCollapsed = collapsible === "icon" && !open;

  return (
    <div className={cn("relative", className)}>
      <aside
        className={cn(
          "min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)]",
          "border-r border-muted-200",
          "py-8 flex-col gap-4 overflow-auto scrollbar-none",
          "transition-[width] duration-200",
          isCollapsed
            ? "w-16 min-w-16 max-w-16 px-2"
            : "w-60 min-w-60 max-w-60 px-6",
        )}
      >
        {!isCollapsed && <Label size="sm">Web</Label>}

        <div className="space-y-3">
          {webUrls.map((group) => {
            const groupIsActive =
              Boolean(group.href && group.href === currentUrl) ||
              Boolean(
                group.sub?.some((item) => (item?.href ?? "") === currentUrl),
              );

            return (
              <Collapsible
                key={group.name}
                defaultOpen={Boolean(groupIsActive)}
              >
                <CollapsibleTrigger asChild>
                  {group.href ? (
                    <Link to={group.href} className="group w-full">
                      <Button
                        className={cn(
                          "bg-transparent border-none w-full p-0",
                          isCollapsed && "justify-center",
                        )}
                        startContent={group.icon}
                      >
                        {!isCollapsed && (
                          <>
                            {group.name}

                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                          </>
                        )}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className={cn(
                        "group bg-transparent border-none w-full p-0",
                        isCollapsed && "justify-center",
                      )}
                      startContent={group.icon}
                      onClick={() => setOpen(true)}
                    >
                      {!isCollapsed && (
                        <>
                          {group.name}

                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                        </>
                      )}
                    </Button>
                  )}
                </CollapsibleTrigger>

                {!isCollapsed && (
                  <CollapsibleContent>
                    <nav>
                      {group.sub?.map((item) => {
                        const href = item?.href ?? "";
                        const isActive = href === currentUrl;

                        return (
                          <a
                            key={item.name}
                            href={href}
                            className={cn(
                              "px-8 py-1 block text-md transition-opacity",
                              "border-b-2 border-transparent",
                              isActive
                                ? "border-b-primary text-primary"
                                : "text-foreground hover:opacity-80",
                            )}
                          >
                            {item.name}
                          </a>
                        );
                      })}
                    </nav>
                  </CollapsibleContent>
                )}
              </Collapsible>
            );
          })}
        </div>
      </aside>

      {collapsible === "icon" && (
        <Button
          onClick={() => setOpen(!open)}
          className={cn(
            "absolute top-1/2 -right-3 z-50",
            "size-6 rounded-full",
            "border border-muted-200 bg-background text-muted-600",
            "p-1",
            "transform -translate-y-1/2",
          )}
        >
          {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </Button>
      )}
    </div>
  );
}
