import React, { memo } from "react";
import {
  QuestionCircleOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Popover, Space, Tooltip } from "antd";
import { Layout } from "antd";

import { images, RoundLogo } from "@/assets";

const { Header } = Layout;

const PopoverContent = ({ src }: { src: string }) => (
  <Space style={{ flexDirection: "column" }}>
    <Avatar src={src} size={50} />

    <Tooltip title="Log out" placement="bottom">
      <Button>
        <LogoutOutlined />
      </Button>
    </Tooltip>
  </Space>
);

export const AppHeader = memo(() => {
  return (
    <Header
      className="header"
      style={{
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 9,
      }}
    >
      <RoundLogo />
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
        <Popover
          trigger="click"
          content={<PopoverContent src={images.staceyRyan} />}
        >
          <Avatar
            size="large"
            src={images.staceyRyan}
            style={{ cursor: "pointer" }}
          />
        </Popover>
      </Space>
    </Header>
  );
});
