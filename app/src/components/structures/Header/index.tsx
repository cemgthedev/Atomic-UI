import { Navbar } from "@/components/structures/Header/Navbar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { webUrls } from "@/constants/sidelinks";
import { urls } from "@/constants/urls";
import { cn } from "@/utils/cn";
import { ChevronDown, Menu } from "lucide-react";
import { Link, useLocation } from "react-router";

export function Header() {
  const { pathname, hash } = useLocation();

  const currentUrl = `${pathname}${hash ?? ""}`;

  return (
    <header className="flex items-center justify-start gap-8 px-6 py-3 border-b border-b-muted-200 sticky top-0 z-50 backdrop-blur-2xl bg-muted-50/30">
      <Link to={urls.dashboard}>
        <Avatar>
          <AvatarImage src="/logo.svg" alt="logo" />
          <AvatarFallback variant="primary">AU</AvatarFallback>
        </Avatar>
      </Link>

      {/* Desktop */}
      <Navbar className="hidden md:block" />

      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="ml-auto md:hidden">
            <Menu />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="data-[side=right]:w-60 py-12 items-center"
        >
          <aside
            className={cn(
              "min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)]",
              "flex flex-col gap-4 overflow-auto scrollbar-none",
              "transition-[width] duration-200",
            )}
          >
            <div className="space-y-3">
              {webUrls.map((group) => {
                const groupIsActive =
                  Boolean(group.href && group.href === currentUrl) ||
                  Boolean(
                    group.sub?.some(
                      (item) => (item?.href ?? "") === currentUrl,
                    ),
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
                            )}
                            startContent={group.icon}
                          >
                            {group.name}

                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          className={cn(
                            "group bg-transparent border-none w-full p-0",
                          )}
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
                  </Collapsible>
                );
              })}
            </div>
          </aside>
        </SheetContent>
      </Sheet>
    </header>
  );
}
