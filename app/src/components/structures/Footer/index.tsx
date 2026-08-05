import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Label,
  Text,
} from "@/components/ui";
import { urls } from "@/constants/urls";
import {
  BookOpen,
  Component,
  Home,
  Mail,
  Phone,
  Settings2,
} from "lucide-react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router";

const footerRoutes = [urls.dashboard];

export function Footer() {
  const { pathname } = useLocation();

  const shouldShowSidebar = useMemo(
    () =>
      footerRoutes.some(
        (route) => {
          const normalized = route.startsWith("/") ? route : `/${route}`;
          return pathname === normalized || pathname.startsWith(`${normalized}/`);
        },
      ),
    [pathname],
  );

  if (!shouldShowSidebar) {
    return null;
  }

  return (
    <footer className="flex flex-col items-center justify-center gap-4 px-6 py-3 border-t border-border backdrop-blur-2xl bg-muted-50/30">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-60">
        <div className="flex flex-col items-center justify-center">
          <Link to={urls.dashboard}>
            <Avatar className="size-32">
              <AvatarImage src="/logo.svg" alt="logo" />
              <AvatarFallback variant="primary">AU</AvatarFallback>
            </Avatar>
          </Link>
          <Label>Atomic UI</Label>
        </div>

        <nav>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={urls.dashboard}
                className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
              >
                <Home
                  size={20}
                  className={
                    pathname === urls.dashboard
                      ? "text-primary"
                      : "text-foreground"
                  }
                />
                <Text
                  variant={pathname === urls.dashboard ? "primary" : "default"}
                >
                  Início
                </Text>
              </Link>
            </li>
            <li>
              <Link
                to={urls.documentation}
                className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
              >
                <BookOpen
                  size={20}
                  className={
                    pathname === urls.documentation
                      ? "text-primary"
                      : "text-foreground"
                  }
                />
                <Text
                  variant={
                    pathname === urls.documentation ? "primary" : "default"
                  }
                >
                  Documentação
                </Text>
              </Link>
            </li>
            <li>
              <Link
                to={urls.components}
                className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
              >
                <Component
                  size={20}
                  className={
                    pathname === urls.components
                      ? "text-primary"
                      : "text-foreground"
                  }
                />
                <Text
                  variant={pathname === urls.components ? "primary" : "default"}
                >
                  Componentes
                </Text>
              </Link>
            </li>
            <li>
              <Link
                to={urls.customization}
                className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
              >
                <Settings2
                  size={20}
                  className={
                    pathname === urls.customization
                      ? "text-primary"
                      : "text-foreground"
                  }
                />
                <Text
                  variant={
                    pathname === urls.customization ? "primary" : "default"
                  }
                >
                  Customização
                </Text>
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex flex-col gap-3">
          <li>
            <a
              href={"https://github.com/cemgthedev"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
            >
              <Avatar size="xs" className="size-5">
                <AvatarImage src="/github.svg" alt="github" />
                <AvatarFallback variant="dark">GH</AvatarFallback>
              </Avatar>
              <Text>Github</Text>
            </a>
          </li>
          <li>
            <a
              href={"https://www.linkedin.com/in/cemgdev/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
            >
              <Avatar size="xs" className="size-5">
                <AvatarImage
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                  alt="linkedin"
                />
                <AvatarFallback variant="dark">In</AvatarFallback>
              </Avatar>
              <Text>LinkedIn</Text>
            </a>
          </li>
          <li>
            <a
              href={"wa.me/558597981087"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
            >
              <Phone
                size={20}
                className={
                  pathname === urls.components
                    ? "text-primary"
                    : "text-foreground"
                }
              />
              <Text
                variant={pathname === urls.components ? "primary" : "default"}
              >
                Contato
              </Text>
            </a>
          </li>
          <li>
            <a
              href="mailto:contato@cemg.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center justify-center hover:opacity-80 duration-200"
            >
              <Mail size={20} />
              <Text>Email</Text>
            </a>
          </li>
        </ul>
      </div>

      <p>
        &copy; 2026 cemg.dev. Desenvolvido por cemg.dev. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
