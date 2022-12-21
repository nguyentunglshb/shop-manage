import React, { useState, memo } from "react";
import { Layout, Menu, theme } from "antd";
import { items } from "@/constants";

const { Sider } = Layout;

export const Sidebar = memo(() => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsedMenu, setCollapsedMenu] = useState(false);

  return (
    <Sider
      collapsed={collapsedMenu}
      collapsible={true}
      onCollapse={() => setCollapsedMenu((prev) => !prev)}
      style={{
        background: colorBgContainer,
      }}
      width={250}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
      />
    </Sider>
  );
});
