import React from "react";
import {
  AliwangwangOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";

import { items } from "@/constants";
import { images } from "@/assets";
import { capitalizeFirstLetter } from "@/utils";

const { Header, Content, Sider } = Layout;

export function DefaultLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  const bs = location.pathname.split("/").filter((b) => b !== "");

  return (
    <Layout style={{ width: "100%" }}>
      <Header
        className="header"
        style={{
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AliwangwangOutlined style={{ fontSize: "40px" }} />
        <Space size={16}>
          <BellOutlined
            style={{
              color: "#fff",
            }}
          />
          <QuestionCircleOutlined
            style={{
              color: "#fff",
            }}
          />
          <Avatar size="large" src={images.staceyRyan} />
        </Space>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            items={items}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            height: "calc(100vh - 64px)",
            overflow: "scroll",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {bs.map((b) => (
              <Breadcrumb.Item key={b}>
                {capitalizeFirstLetter(b)}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: "8px",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
