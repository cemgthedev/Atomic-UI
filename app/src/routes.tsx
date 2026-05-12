import { GeneralError } from "@/pages/Error/GeneralError";
import { createBrowserRouter } from "react-router";
import { urls } from "./constants/urls";
import { Dashboard } from "./pages/Dashboard";
import { NotFoundError } from "@/pages/Error/NotFoundError";

export const router = createBrowserRouter([
  {
    index: true,
    path: urls.dashboard,
    element: <Dashboard />,
    errorElement: <GeneralError />,
  },
  {
    path: "*",
    Component: NotFoundError,
  },
]);
