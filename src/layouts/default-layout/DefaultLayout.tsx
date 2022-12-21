import React, { memo } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";

import { formatBreadscum } from "@/utils";
import { AppHeader } from "../Header";
import { Sidebar } from "../Sidebar";

const { Content } = Layout;

export const DefaultLayout = memo(() => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

  const bs = location.pathname.split("/").filter((b) => b !== "");

  return (
    <Layout style={{ width: "100%", position: "relative" }}>
      <AppHeader />
      <Layout style={{ marginTop: "64px" }}>
        <Sidebar />
        <Layout
          style={{
            padding: "0 24px 24px",
            height: "calc(100vh - 64px)",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {bs.map((b) => (
              <Breadcrumb.Item key={b}>{formatBreadscum(b)}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: "8px",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
