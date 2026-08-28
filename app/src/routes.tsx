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

const AvatarDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/avatar")]);

  return { Component: Component.AvatarDetails };
};

const BadgeDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/badge")]);

  return { Component: Component.BadgeDetails };
};

const BreadcrumbDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/breadcrumb"),
  ]);

  return { Component: Component.BreadcrumbDetails };
};

const ButtonDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/button")]);

  return { Component: Component.ButtonDetails };
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

const CarouselDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/carousel"),
  ]);

  return { Component: Component.DetailsCarousel };
};

const CheckboxDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/checkbox"),
  ]);

  return { Component: Component.CheckboxDetails };
};

const CollapsibleDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/collapsible"),
  ]);

  return { Component: Component.CollapsibleDetails };
};

const DatepickerDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/datepicker"),
  ]);

  return { Component: Component.DatepickerDetails };
};

const DialogDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/dialog")]);

  return { Component: Component.DialogDetails };
};

const DrawerDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/drawer")]);

  return { Component: Component.DrawerDetails };
};

const DropdownMenuDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/dropdown-menu"),
  ]);

  return { Component: Component.DropdownMenuDetails };
};

const HeadingDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/heading")]);

  return { Component: Component.HeadingDetails };
};

const ImageDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/image")]);

  return { Component: Component.ImageDetails };
};

const InputDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/input")]);

  return { Component: Component.InputDetails };
};

const LabelDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/label")]);

  return { Component: Component.LabelDetails };
};

const LoaderDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/loader")]);

  return { Component: Component.LoaderDetails };
};

const MessageDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/message")]);

  return { Component: Component.MessageDetails };
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

const ProgressDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/progress"),
  ]);

  return { Component: Component.ProgressDetails };
};

const RadioGroupDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/radio-group"),
  ]);

  return { Component: Component.RadioGroupDetails };
};

const SeparatorDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/separator"),
  ]);

  return { Component: Component.SeparatorDetails };
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

const SliderDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/slider")]);

  return { Component: Component.SliderDetails };
};

const SwitchDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/switch")]);

  return { Component: Component.SwitchDetails };
};

const TabsDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/tabs")]);

  return { Component: Component.TabsDetails };
};

const TextDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/text")]);

  return { Component: Component.TextDetails };
};

const TextareaDetailsPage = async () => {
  const [Component] = await Promise.all([
    import("@/pages/Components/textarea"),
  ]);

  return { Component: Component.TextareaDetails };
};

const ToastDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/toast")]);

  return { Component: Component.ToastDetails };
};

const TooltipDetailsPage = async () => {
  const [Component] = await Promise.all([import("@/pages/Components/tooltip")]);

  return { Component: Component.TooltipDetails };
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
            path: urls.avatar,
            lazy: AvatarDetailsPage,
          },
          {
            path: urls.badge,
            lazy: BadgeDetailsPage,
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
            path: urls.calendar,
            lazy: CalendarDetailsPage,
          },
          {
            path: urls.card,
            lazy: CardDetailsPage,
          },
          {
            path: urls.carousel,
            lazy: CarouselDetailsPage,
          },
          {
            path: urls.checkbox,
            lazy: CheckboxDetailsPage,
          },
          {
            path: urls.collapsible,
            lazy: CollapsibleDetailsPage,
          },
          {
            path: urls.datepicker,
            lazy: DatepickerDetailsPage,
          },
          {
            path: urls.dialog,
            lazy: DialogDetailsPage,
          },
          {
            path: urls.drawer,
            lazy: DrawerDetailsPage,
          },
          {
            path: urls.dropdown_menu,
            lazy: DropdownMenuDetailsPage,
          },
          {
            path: urls.heading,
            lazy: HeadingDetailsPage,
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
            path: urls.label,
            lazy: LabelDetailsPage,
          },
          {
            path: urls.loader,
            lazy: LoaderDetailsPage,
          },
          {
            path: urls.message,
            lazy: MessageDetailsPage,
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
            path: urls.progress,
            lazy: ProgressDetailsPage,
          },
          {
            path: urls.radio_group,
            lazy: RadioGroupDetailsPage,
          },
          {
            path: urls.separator,
            lazy: SeparatorDetailsPage,
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
            path: urls.slider,
            lazy: SliderDetailsPage,
          },
          {
            path: urls.switch,
            lazy: SwitchDetailsPage,
          },
          {
            path: urls.tabs,
            lazy: TabsDetailsPage,
          },
          {
            path: urls.text,
            lazy: TextDetailsPage,
          },
          {
            path: urls.textarea,
            lazy: TextareaDetailsPage,
          },
          {
            path: urls.toast,
            lazy: ToastDetailsPage,
          },
          {
            path: urls.tooltip,
            lazy: TooltipDetailsPage,
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
