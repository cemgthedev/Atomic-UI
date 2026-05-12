import { Heading } from "@/components/ui/heading";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <Heading size={"xl"}>Get started!!</Heading>
      <Heading size={"lg"} variant={"success"}>Get started!!</Heading>
      <Heading size={"md"} variant={"warning"}>Get started!!</Heading>
      <Heading size={"sm"} variant={"danger"}>Get started!!</Heading>
      <Heading size={"xs"}>Get started!!</Heading>
    </main>
  );
}
