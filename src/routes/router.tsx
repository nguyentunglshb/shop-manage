import { createBrowserRouter, RouteObject } from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import { Dashboard, About } from "@/pages";

export enum EnumProtectedRoutes {
  DASHBOARD = "",
  ABOUT = "about",
}

const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: EnumProtectedRoutes.ABOUT,
        element: <About />,
      },
    ],
  },
];

export const router = createBrowserRouter([...protectedRoutes]);
