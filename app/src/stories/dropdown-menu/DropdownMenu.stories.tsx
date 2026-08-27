import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Separator,
  Text,
} from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Exemplo básico do DropdownMenu.
 */
export const Default: Story = {
  render: ({}) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>

        <DropdownMenuItem variant="primary-ghost">Billing</DropdownMenuItem>

        <DropdownMenuItem>Settings</DropdownMenuItem>

        <DropdownMenuItem>
          Keyboard shortcuts
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Agrupa itens relacionados dentro do DropdownMenu.
 */
export const Items: Story = {
  render: ({}) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>

      <DropdownMenuContent>
        <Text>My Account</Text>

        <Separator className="mt-2" />

        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>

        <Separator className="mb-2" />

        <DropdownMenuItem variant="danger">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Permite selecionar múltiplas opções utilizando checkbox items.
 */
export const Checkbox: Story = {
  render: ({}) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Checkbox items</DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked={true}>
          Show status bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem disabled>
          Show disabled bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem>Show panel</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Permite selecionar uma única opção dentro de um grupo de radio items.
 */
export const Radio: Story = {
  render: ({}) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Radio items</DropdownMenuTrigger>

      <DropdownMenuContent>
        <Text>Panel position</Text>

        <Separator className="mt-1" />

        <DropdownMenuRadioGroup value="bottom">
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Cria menus hierárquicos utilizando submenus.
 */
export const SubMenu: Story = {
  render: ({}) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Submenu</DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>New tab</DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
              <DropdownMenuItem>More...</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Demonstra as propriedades visuais disponíveis nos itens.
 */
export const Properties: Story = {
  render: ({}) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Menu properties</DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem inset variant="default" size="sm">
          Small item
        </DropdownMenuItem>

        <DropdownMenuItem inset variant="default" size="md">
          Medium item
        </DropdownMenuItem>

        <DropdownMenuItem inset variant="default" size="lg">
          Large item
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger inset size="md">
            More options
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Option one</DropdownMenuItem>
              <DropdownMenuItem>Option two</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
