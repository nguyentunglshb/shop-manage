import React from "react";
import { MenuProps, Typography } from "antd";
import { NotificationOutlined, PieChartOutlined } from "@ant-design/icons";
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
    key: "alipay",
  },
];
