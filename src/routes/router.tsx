import { createBrowserRouter, RouteObject } from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import { Dashboard, About, Products, Settings, Orders } from "@/pages";

export enum EnumProtectedRoutes {
  DASHBOARD = "",
  ABOUT = "about",
  PRODUCTS = "products",
  SETTINGS = "settings",
  ORDERS = "orders",
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
      {
        path: EnumProtectedRoutes.ORDERS,
        element: <Orders />,
      },
      {
        path: EnumProtectedRoutes.PRODUCTS,
        element: <Products />,
      },
      {
        path: EnumProtectedRoutes.SETTINGS,
        element: <Settings />,
      },
    ],
  },
];

export const router = createBrowserRouter([...protectedRoutes]);
