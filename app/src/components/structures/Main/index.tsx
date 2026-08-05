export type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <main className="min-h-[calc(100vh-73px)] flex justify-start items-start gap-0 p-0">
      {children}
    </main>
  );
}
