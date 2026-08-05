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
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router";

const sidebarRoutes = [urls.documentation, urls.components, urls.customization];

export function Sidebar() {
  const { pathname, hash } = useLocation();
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

  return (
    <aside className="min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] min-w-60 max-w-60 border-r border-muted-200 px-6 py-8 flex flex-col gap-4">
      <Label size="sm">Web</Label>

      <div className="space-y-3">
        {webUrls.map((group) => {
          const groupIsActive =
            Boolean(group.href && group.href === currentUrl) ||
            Boolean(
              group.sub?.some((item) => (item?.href ?? "") === currentUrl),
            );

          return (
            <Collapsible key={group.name} defaultOpen={Boolean(groupIsActive)}>
              <CollapsibleTrigger asChild>
                {group.href ? (
                  <Link to={group.href} className="group w-full">
                    <Button
                      className="bg-transparent border-none w-full p-0"
                      startContent={group.icon}
                    >
                      {group.name}
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="group bg-transparent border-none w-full p-0"
                    startContent={group.icon}
                  >
                    {group.name}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                  </Button>
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <nav>
                  {group.sub?.map((item) => {
                    const href = item?.href ?? "";
                    const isActive = href === currentUrl;

                    return (
                      <a
                        key={item.name}
                        href={item?.href}
                        className={cn(
                          "px-8 py-1 block text-md transition-opacity border-b-2 border-transparent",
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
            </Collapsible>
          );
        })}
      </div>
    </aside>
  );
}
