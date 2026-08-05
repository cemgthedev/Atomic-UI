import { useEffect, useState } from "react";

import { Footer } from "@/components/structures/Footer";
import { Header } from "@/components/structures/Header";
import { Main } from "@/components/structures/Main";
import { Sidebar } from "@/components/structures/Sidebar";
import { Progress, ProgressValue } from "@/components/ui";
import { Outlet } from "react-router";

export function DefaultLayout() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight <= clientHeight) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

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
      <Main>
        <Sidebar />
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
