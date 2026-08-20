import { GeneralError } from "@/pages/Error/GeneralError";
import { NotFoundError } from "@/pages/Error/NotFoundError";
import { createBrowserRouter } from "react-router";
import { urls } from "./constants/urls";

const DefaultLayoutPage = async () => {
  const [Component] = await Promise.all([
    import("@/components/structures/DefaultLayout"),
  ]);
  return { Component: Component.DefaultLayout };
};

const DashboardPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Dashboard")]);
  return { Component: Component.Dashboard };
};

const DocumentationPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Documentation")]);
  return { Component: Component.Documentation };
};

const InstallationPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Installation")]);
  return { Component: Component.Installation };
};

const ComponentsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components")]);
  return { Component: Component.Components };
};

const ButtonDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/button")]);
  return { Component: Component.ButtonDetails };
};

const BadgeDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/badge")]);
  return { Component: Component.BadgeDetails };
};

const TextDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/text")]);
  return { Component: Component.TextDetails };
};

const LabelDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/label")]);
  return { Component: Component.LabelDetails };
};

const HeadingDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/heading")]);
  return { Component: Component.HeadingDetails };
};

const SeparatorDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/separator"),
  ]);
  return { Component: Component.SeparatorDetails };
};

const ProgressDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/progress"),
  ]);
  return { Component: Component.ProgressDetails };
};

const AvatarDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/avatar")]);
  return { Component: Component.AvatarDetails };
};

const ImageDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/image")]);
  return { Component: Component.ImageDetails };
};

const InputDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/input")]);
  return { Component: Component.InputDetails };
};

const TextareaDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/textarea"),
  ]);
  return { Component: Component.TextareaDetails };
};

const MessageDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/message")]);
  return { Component: Component.MessageDetails };
};

const CalendarDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/calendar"),
  ]);
  return { Component: Component.CalendarDetails };
};

const CardDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/card")]);
  return { Component: Component.CardDetails };
};

const CheckboxDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/checkbox"),
  ]);
  return { Component: Component.CheckboxDetails };
};

const DatepickerDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/datepicker"),
  ]);
  return { Component: Component.DatepickerDetails };
};

const DrawerDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/drawer")]);
  return { Component: Component.DrawerDetails };
};

const BreadcrumbDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/breadcrumb"),
  ]);
  return { Component: Component.BreadcrumbDetails };
};

const DialogDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/dialog")]);
  return { Component: Component.DialogDetails };
};

const LoaderDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/loader")]);
  return { Component: Component.LoaderDetails };
};

const PaginationDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/pagination"),
  ]);
  return { Component: Component.PaginationDetails };
};

const PopoverDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/popover")]);
  return { Component: Component.PopoverDetails };
};

const SheetDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/sheet")]);
  return { Component: Component.SheetDetails };
};

const SkeletonDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/skeleton"),
  ]);
  return { Component: Component.SkeletonDetails };
};

const SwitchDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/switch")]);
  return { Component: Component.SwitchDetails };
};

export const router = createBrowserRouter([
  {
    path: urls.dashboard,
    lazy: DefaultLayoutPage,
    ErrorBoundary: GeneralError,
    children: [
      {
        index: true,
        path: urls.dashboard,
        lazy: DashboardPage,
      },
      {
        path: urls.documentation,
        children: [
          {
            index: true,
            lazy: DocumentationPage,
          },
          {
            path: urls.installation,
            lazy: InstallationPage,
          },
        ],
      },
      {
        path: urls.components,
        children: [
          {
            index: true,
            lazy: ComponentsPage,
          },
          {
            path: urls.breadcrumb,
            lazy: BreadcrumbDetailsPage,
          },
          {
            path: urls.button,
            lazy: ButtonDetailsPage,
          },
          {
            path: urls.badge,
            lazy: BadgeDetailsPage,
          },
          {
            path: urls.text,
            lazy: TextDetailsPage,
          },
          {
            path: urls.label,
            lazy: LabelDetailsPage,
          },
          {
            path: urls.heading,
            lazy: HeadingDetailsPage,
          },
          {
            path: urls.separator,
            lazy: SeparatorDetailsPage,
          },
          {
            path: urls.progress,
            lazy: ProgressDetailsPage,
          },
          {
            path: urls.avatar,
            lazy: AvatarDetailsPage,
          },
          {
            path: urls.image,
            lazy: ImageDetailsPage,
          },
          {
            path: urls.input,
            lazy: InputDetailsPage,
          },
          {
            path: urls.textarea,
            lazy: TextareaDetailsPage,
          },
          {
            path: urls.message,
            lazy: MessageDetailsPage,
          },
          {
            path: urls.calendar,
            lazy: CalendarDetailsPage,
          },
          {
            path: urls.card,
            lazy: CardDetailsPage,
          },
          {
            path: urls.checkbox,
            lazy: CheckboxDetailsPage,
          },
          {
            path: urls.datepicker,
            lazy: DatepickerDetailsPage,
          },
          {
            path: urls.drawer,
            lazy: DrawerDetailsPage,
          },
          {
            path: urls.dialog,
            lazy: DialogDetailsPage,
          },
          {
            path: urls.loader,
            lazy: LoaderDetailsPage,
          },
          {
            path: urls.pagination,
            lazy: PaginationDetailsPage,
          },
          {
            path: urls.popover,
            lazy: PopoverDetailsPage,
          },
          {
            path: urls.sheet,
            lazy: SheetDetailsPage,
          },
          {
            path: urls.skeleton,
            lazy: SkeletonDetailsPage,
          },
          {
            path: urls.switch,
            lazy: SwitchDetailsPage,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundError,
  },
]);
