import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import { Footer } from "@/components/structures/Footer";
import { Header } from "@/components/structures/Header";
import { Main } from "@/components/structures/Main";
import { Sidebar } from "@/components/structures/Sidebar";
import { Progress, ProgressValue, Toaster } from "@/components/ui";
import { Outlet } from "react-router";

function findScrollableElement(root: HTMLElement): HTMLElement | null {
  const elements = Array.from(
    root.querySelectorAll<HTMLElement>(".scroll-progress"),
  ).filter((el) => el !== root);

  return (
    elements.find((el) => {
      const { overflowY } = window.getComputedStyle(el);
      return (
        (overflowY === "auto" || overflowY === "scroll") &&
        el.scrollHeight > el.clientHeight
      );
    }) ?? null
  );
}

export function DefaultLayout() {
  const { pathname, hash } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }, [hash]);

  useEffect(() => {
    const scrollableElement =
      mainRef.current && findScrollableElement(mainRef.current);
    const useWindowScroll = !scrollableElement;
    const target: HTMLElement | Window = scrollableElement ?? window;

    const updateScrollProgress = () => {
      const scrollTop = useWindowScroll
        ? window.scrollY
        : (target as HTMLElement).scrollTop;
      const scrollHeight = useWindowScroll
        ? document.documentElement.scrollHeight
        : (target as HTMLElement).scrollHeight;
      const clientHeight = useWindowScroll
        ? window.innerHeight
        : (target as HTMLElement).clientHeight;

      if (scrollHeight <= clientHeight) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollProgress();
    target.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      target.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 z-60 w-full">
        <Progress
          value={scrollProgress}
          size="xs"
          rounded="none"
          variant="primary"
          className="w-full"
        >
          <ProgressValue variant="primary" value={scrollProgress} />
        </Progress>
      </div>
      <Header />
      <Main ref={mainRef}>
        <Sidebar
          collapsible="icon"
          defaultOpen={false}
          className="hidden md:block"
        />
        <Outlet />
      </Main>
      <Footer />

      <Toaster />
    </>
  );
}
