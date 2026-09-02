import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import type { ComponentProps } from "react";

type TableStoryProps = ComponentProps<typeof Table>;

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      controls: {
        exclude: ["children"],
      },
      description: {
        component: "Organiza dados tabulares em linhas e colunas.",
      },
    },
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<TableStoryProps>;

export default meta;
type Story = StoryObj<TableStoryProps>;

const rows = [
  { name: "Atomic UI", status: "Publicado", updated: "Hoje" },
  { name: "Design Tokens", status: "Em revisão", updated: "Ontem" },
  { name: "Componentes", status: "Rascunho", updated: "12/08/2026" },
];

export const Default: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  render: ({ ...args }) => (
    <Table {...args}>
      <TableCaption>Lista de projetos recentes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Projeto</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Atualizado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell className="text-right">{row.updated}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">{rows.length} projetos</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
