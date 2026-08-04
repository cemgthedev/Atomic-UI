import { DefaultLayout } from "@/components/structures/DefaultLayout";
import { GeneralError } from "@/pages/Error/GeneralError";
import { NotFoundError } from "@/pages/Error/NotFoundError";
import { createBrowserRouter } from "react-router";
import { urls } from "./constants/urls";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: urls.dashboard,
    Component: DefaultLayout,
    ErrorBoundary: GeneralError,
    children: [
      {
        index: true,
        path: urls.dashboard,
        Component: Dashboard,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundError,
  },
]);
