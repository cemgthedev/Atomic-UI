import { Heading, Input, Label } from "@/components/ui";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Mail } from "lucide-react";

export function Dashboard() {
  return (
    <main className="h-screen flex flex-col gap-4 p-3 my-8">
      <div className="space-y-1">
        <Heading variant={"primary"}>Atomic UI</Heading>
        <Label size="sm" variant={"muted"}>
          Seus componentes atômicos
        </Label>
      </div>

      <div className="flex items-center gap-2">
        <Input
          variant={"danger"}
          isClearable
          onClear={() => {
            console.log("Limpar input");
          }}
          value={"Valor do input"}
          placeholder="Search..."
          startContent={<Mail className="h-4 w-4" />}
          endContent={<Mail className="h-4 w-4" />}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious isActive variant={"success"} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"success"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"success"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious isActive variant={"warning"} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"warning"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"warning"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious isActive variant={"danger"} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"danger"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"danger"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                isActive
                variant={"success-bordered"}
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"success-bordered"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"success-bordered"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                isActive
                variant={"warning-bordered"}
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"warning-bordered"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"warning-bordered"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                isActive
                variant={"danger-bordered"}
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"danger-bordered"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"danger-bordered"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious isActive variant={"success-ghost"} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"success-ghost"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"success-ghost"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious isActive variant={"warning-ghost"} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"warning-ghost"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"warning-ghost"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious isActive variant={"danger-ghost"} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive variant={"danger-ghost"}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive variant={"danger-ghost"} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
}
