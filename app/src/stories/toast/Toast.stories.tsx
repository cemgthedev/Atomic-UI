import { Toaster, toast, type ToastOptions } from "@/components/ui";
import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

type ToastStoryArgs = Pick<
  ToastOptions,
  | "variant"
  | "className"
  | "duration"
  | "position"
  | "description"
  | "id"
  | "closeButton"
  | "action"
>;

const meta = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toast baseado no Sonner com variantes customizadas do AtomicUI.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Define a variante visual do toast.",
      control: "select",
      options: [
        "default",
        "dark",
        "muted",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "dark-bordered",
        "muted-bordered",
        "primary-bordered",
        "secondary-bordered",
        "success-bordered",
        "warning-bordered",
        "danger-bordered",
        "ghost",
        "dark-ghost",
        "primary-ghost",
        "secondary-ghost",
        "success-ghost",
        "warning-ghost",
        "danger-ghost",
      ],
      table: {
        type: {
          summary:
            '"default" | "dark" | "muted" | "primary" | "secondary" | "success" | "warning" | "danger" | "dark-bordered" | "muted-bordered" | "primary-bordered" | "secondary-bordered" | "success-bordered" | "warning-bordered" | "danger-bordered" | "ghost" | "dark-ghost" | "primary-ghost" | "secondary-ghost" | "success-ghost" | "warning-ghost" | "danger-ghost"',
        },
        defaultValue: {
          summary: "default",
        },
      },
    },

    duration: {
      description:
        "Define o tempo, em milissegundos, até o toast ser fechado automaticamente.",
      control: {
        type: "number",
        min: 0,
      },
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "5000",
        },
      },
    },

    position: {
      description: "Define a posição em que o toast será exibido.",
      control: "select",
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      table: {
        type: {
          summary:
            '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
        },
        defaultValue: {
          summary: "bottom-right",
        },
      },
    },
    description: {
      description:
        "Define uma descrição complementar para a mensagem principal.",
      control: "text",
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
    closeButton: {
      description: "Exibe ou oculta o botão para fechar o toast manualmente.",
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    action: {
      description: "Adiciona uma ação interativa ao toast.",
      control: false,
      table: {
        type: {
          summary: "Action",
        },
        defaultValue: {
          summary: "-",
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Toaster id="storybook-toast" position="top-right" />
        <Story />
      </>
    ),
  ],
} satisfies Meta<ToastStoryArgs>;

export default meta;

type Story = StoryObj<ToastStoryArgs>;

export const Default: Story = {
  args: {
    variant: "default",
    duration: 5000,
    position: "bottom-right",
    closeButton: false,
  },

  render: ({ variant, ...args }) => (
    <Button
      variant={variant}
      onClick={() =>
        toast("AtomicUI Toast", {
          ...args,
          toasterId: "storybook-toast",
          variant: variant,
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Variants: Story = {
  render: ({}) => {
    const variants: NonNullable<ToastOptions["variant"]>[] = [
      "default",
      "dark",
      "muted",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "dark-bordered",
      "muted-bordered",
      "primary-bordered",
      "secondary-bordered",
      "success-bordered",
      "warning-bordered",
      "danger-bordered",
      "ghost",
      "dark-ghost",
      "primary-ghost",
      "secondary-ghost",
      "success-ghost",
      "warning-ghost",
      "danger-ghost",
    ];

    return (
      <div className="grid grid-cols-2 gap-3">
        {variants.map((variant) => (
          <Button
            key={variant}
            variant={variant}
            onClick={() =>
              toast(`Variant: ${variant}`, {
                variant,
                toasterId: "storybook-toast",
              })
            }
          >
            {variant}
          </Button>
        ))}
      </div>
    );
  },
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Profile updated", {
          variant: "success",
          description: "Your information has been saved successfully.",
        })
      }
    >
      Toast with Description
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("File deleted", {
          variant: "danger",
          description: "This action can be undone.",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
          toasterId: "storybook-toast",
        })
      }
    >
      Toast with Action
    </Button>
  ),
};

export const WithCancel: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Discard changes?", {
          variant: "warning",
          cancel: {
            label: "Cancel",
            onClick: () => console.log("Canceled"),
          },
          toasterId: "storybook-toast",
        })
      }
    >
      Toast with Cancel
    </Button>
  ),
};

export const Positions: Story = {
  render: () => {
    const positions: NonNullable<ToastOptions["position"]>[] = [
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ];

    return (
      <div className="grid grid-cols-2 gap-3">
        {positions.map((position) => (
          <Button
            key={position}
            variant="dark-bordered"
            onClick={() =>
              toast(`Position: ${position}`, {
                position,
                toasterId: "storybook-toast",
              })
            }
          >
            {position}
          </Button>
        ))}
      </div>
    );
  },
};

export const CustomDuration: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Downloading...", {
          variant: "secondary",
          description: "This toast will remain visible for 10 seconds.",
          duration: 10000,
          toasterId: "storybook-toast",
        })
      }
    >
      Toast (10s)
    </Button>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast(
          <div className="flex flex-col gap-1">
            <span className="font-semibold">New update available</span>
            <span className="text-sm opacity-80">
              Version 2.0 is ready to install.
            </span>
          </div>,
          {
            variant: "dark",
            toasterId: "storybook-toast",
          },
        )
      }
    >
      Custom Content
    </Button>
  ),
};
