export type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return <main className="h-screen flex flex-col gap-0 p-0">{children}</main>;
}
