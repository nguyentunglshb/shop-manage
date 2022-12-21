import { createBrowserRouter, RouteObject } from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import {
  Dashboard,
  About,
  Products,
  Settings,
  Orders,
  CompletedOrders,
  CanceledOrders,
  PendingOrders,
  Users,
  ForWomen,
  ForMen,
  ForKid,
  InprogressOrders,
  UserInfo,
  ProductInfo,
} from "@/pages";

export enum EnumProtectedRoutes {
  DASHBOARD = "",

  EMPTY = "",
  ABOUT = "about",
  INFO = ":_id",

  PRODUCTS = "products",
  PRODUCTS_WOMEN = "women",
  PRODUCTS_MAN = "men",
  PRODUCTS_KID = "kid",

  SETTINGS = "settings",

  ORDERS = "orders",
  INPROGRESS_ORDERS = "inprogress-orders",
  COMPLETED_ORDERS = "completed-orders",
  CANCELED_ORDERS = "canceled-orders",
  PENDING_ORDERS = "pending-orders",

  USERS = "users",
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
        children: [
          {
            index: true,
            element: <Orders />,
          },
          {
            path: EnumProtectedRoutes.INPROGRESS_ORDERS,
            element: <InprogressOrders />,
          },
          {
            path: EnumProtectedRoutes.COMPLETED_ORDERS,
            element: <CompletedOrders />,
          },
          {
            path: EnumProtectedRoutes.PENDING_ORDERS,
            element: <PendingOrders />,
          },
          {
            path: EnumProtectedRoutes.CANCELED_ORDERS,
            element: <CanceledOrders />,
          },
        ],
      },
      {
        path: EnumProtectedRoutes.PRODUCTS,
        children: [
          {
            // index: true,
            path: EnumProtectedRoutes.EMPTY,
            element: <Products />,
            children: [
              {
                path: EnumProtectedRoutes.INFO,
                element: <ProductInfo />,
              },
            ],
          },
          {
            path: EnumProtectedRoutes.PRODUCTS_WOMEN,
            element: <ForWomen />,
          },
          {
            path: EnumProtectedRoutes.PRODUCTS_MAN,
            element: <ForMen />,
          },
          {
            path: EnumProtectedRoutes.PRODUCTS_KID,
            element: <ForKid />,
          },
        ],
      },
      {
        path: EnumProtectedRoutes.USERS,
        element: <Users />,
        children: [
          {
            path: EnumProtectedRoutes.INFO,
            element: <UserInfo />,
          },
        ],
      },
      {
        path: EnumProtectedRoutes.SETTINGS,
        element: <Settings />,
      },
    ],
  },
];

export const router = createBrowserRouter([...protectedRoutes]);
