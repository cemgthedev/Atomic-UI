import { Navbar } from "@/components/structures/Header/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { urls } from "@/constants/urls";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="flex items-center justify-start gap-8 px-6 py-3 border-b border-b-muted-200 sticky top-0 z-50 backdrop-blur-2xl bg-muted-50/30">
      <Link to={urls.dashboard}>
        <Avatar>
          <AvatarImage src="/logo.svg" alt="logo" />
          <AvatarFallback variant="primary">AU</AvatarFallback>
        </Avatar>
      </Link>

      <Navbar className="hidden md:block" />
    </header>
  );
}
