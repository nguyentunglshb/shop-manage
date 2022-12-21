import React from "react";
import { MenuProps, Typography } from "antd";
import {
  TeamOutlined,
  PieChartOutlined,
  SkinOutlined,
  SettingOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  FileSyncOutlined,
  AppstoreOutlined,
  WomanOutlined,
  ManOutlined,
  FrownOutlined,
  FilePptOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { enumNavigation } from "./navigations";

const { Text } = Typography;

export const items: MenuProps["items"] = [
  {
    label: (
      <Link to={enumNavigation.DASHBOARD}>
        <PieChartOutlined />
        <Text>Dashboard</Text>
      </Link>
    ),
    key: "dashboard",
  },
  {
    label: (
      // <Link to={enumNavigation.PRODUCTS}>
      <>
        <SkinOutlined />
        <Text>Products</Text>
      </>
      // </Link>
    ),
    key: "products",
    children: [
      {
        label: (
          <Link to={enumNavigation.PRODUCTS}>
            <AppstoreOutlined />
            <Text>All Products</Text>
          </Link>
        ),
        key: "products",
      },
      {
        label: (
          <Link to={enumNavigation.FOR_WOMEN}>
            <WomanOutlined style={{ color: "pink" }} />
            <Text>For women</Text>
          </Link>
        ),
        key: "products women",
      },
      {
        label: (
          <Link to={enumNavigation.FOR_MEN}>
            <ManOutlined style={{ color: "blue" }} />
            <Text>For men</Text>
          </Link>
        ),
        key: "products men",
      },
      {
        label: (
          <Link to={enumNavigation.FOR_KID}>
            <FrownOutlined style={{ color: "yellowgreen" }} />
            <Text>For kid</Text>
          </Link>
        ),
        key: "products kid",
      },
    ],
  },
  {
    label: (
      <>
        <FileTextOutlined />
        <Text>Orders</Text>
      </>
    ),
    key: "orders",
    children: [
      {
        label: (
          <Link to={enumNavigation.ORDERS}>
            <FileProtectOutlined />
            <Text>All Orders</Text>
          </Link>
        ),
        key: "all orders",
      },
      {
        label: (
          <Link to={enumNavigation.COMPLETED_ORDERS}>
            <FileDoneOutlined style={{ color: "green" }} />
            <Text>Completed Orders</Text>
          </Link>
        ),
        key: "completed orders",
      },
      {
        label: (
          <Link to={enumNavigation.INPROGRESS_ORDERS}>
            <FileSyncOutlined style={{ color: "lightblue" }} />
            <Text>Inprogress Orders</Text>
          </Link>
        ),
        key: "inprogress orders",
      },
      {
        label: (
          <Link to={enumNavigation.PENDING_ORDERS}>
            {/* <FileSyncOutlined style={{ color: "orange" }} /> */}
            <FilePptOutlined style={{ color: "orange" }} />
            <Text>Pending Orders</Text>
          </Link>
        ),
        key: "pending orders",
      },
      {
        label: (
          <Link to={enumNavigation.CANCELED_ORDERS}>
            <FileExcelOutlined style={{ color: "red" }} />
            <Text>Canceled Orders</Text>
          </Link>
        ),
        key: "canceled orders",
      },
    ],
  },

  {
    label: (
      <Link to={enumNavigation.USERS}>
        <TeamOutlined />
        <Text>Users</Text>
      </Link>
    ),
    key: "users",
  },
  {
    label: (
      <Link to={enumNavigation.ABOUT}>
        <PieChartOutlined />
        <Text>About</Text>
      </Link>
    ),
    key: "about",
  },
  {
    label: (
      <Link to={enumNavigation.SETTINGS}>
        <SettingOutlined />
        <Text>Settings</Text>
      </Link>
    ),
    key: "settings",
  },
];
