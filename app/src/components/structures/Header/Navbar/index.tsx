import { urls } from "@/constants/urls";
import { cn } from "@/utils/cn";
import { BookOpen, Component, Home, Settings2 } from "lucide-react";
import type { ComponentProps } from "react";
import { Link, useLocation } from "react-router";

export type NavbarProps = ComponentProps<"nav"> & {
  orientation?: "vertical" | "horizontal";
};

export function Navbar({
  className,
  orientation = "horizontal",
  ...props
}: NavbarProps) {
  const { pathname } = useLocation();

  return (
    <nav
      className={cn(
        "flex items-center justify-start gap-8 px-6 py-3",
        className,
      )}
      {...props}
    >
      <ul
        className={cn(
          "flex gap-8",
          orientation === "vertical" && "flex-col items-start gap-4",
        )}
      >
        <li>
          <Link
            to={urls.dashboard}
            className={cn(
              "flex gap-1 items-center justify-center hover:opacity-80 duration-200",
              pathname === urls.dashboard ? "text-primary" : "text-foreground",
            )}
          >
            <Home size={20} />
            Início
          </Link>
        </li>
        <li>
          <Link
            to={urls.documentation}
            className={cn(
              "flex gap-1 items-center justify-center hover:opacity-80 duration-200",
              pathname === urls.documentation
                ? "text-primary"
                : "text-foreground",
            )}
          >
            <BookOpen size={20} />
            Documentação
          </Link>
        </li>
        <li>
          <Link
            to={urls.components}
            className={cn(
              "flex gap-1 items-center justify-center hover:opacity-80 duration-200",
              pathname === urls.components ? "text-primary" : "text-foreground",
            )}
          >
            <Component size={20} />
            Componentes
          </Link>
        </li>
        <li>
          <Link
            to={urls.customization}
            className={cn(
              "flex gap-1 items-center justify-center hover:opacity-80 duration-200",
              pathname === urls.customization
                ? "text-primary"
                : "text-foreground",
            )}
          >
            <Settings2 size={20} />
            Customização
          </Link>
        </li>
      </ul>
    </nav>
  );
}
