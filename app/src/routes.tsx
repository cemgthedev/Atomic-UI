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
            path: urls.button,
            lazy: ButtonDetailsPage,
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
