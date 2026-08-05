import { forwardRef } from "react";

export type MainProps = {
  children: React.ReactNode;
};

export const Main = forwardRef<HTMLElement, MainProps>(function Main(
  { children },
  ref,
) {
  return (
    <main
      ref={ref}
      className="min-h-[calc(100vh-73px)] flex justify-start items-start gap-0 p-0"
    >
      {children}
    </main>
  );
});
