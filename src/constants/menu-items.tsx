import React from "react";
import { MenuProps, Typography } from "antd";
import {
  NotificationOutlined,
  PieChartOutlined,
  SkinOutlined,
  SettingOutlined,
  FileTextOutlined,
  FileProtectOutlined,
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
      <Link to={enumNavigation.PRODUCTS}>
        <SkinOutlined />
        <Text>Products</Text>
      </Link>
    ),
    key: "products",
  },
  {
    label: (
      //   <Link to={enumNavigation.ORDERS}>

      <>
        {" "}
        <FileTextOutlined />
        <Text>Orders</Text>
      </>
      //   </Link>
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
    ],
  },

  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <NotificationOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: (
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            ),
            key: "setting:3",
          },
          {
            label: (
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            ),
            key: "setting:4",
          },
        ],
      },
    ],
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
