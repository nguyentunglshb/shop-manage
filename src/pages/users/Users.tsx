import React from "react";
import { Typography } from "antd";

import { UserTable } from "@/components";
import { Outlet } from "react-router-dom";

const { Title } = Typography;

export function Users() {
  return (
    <div>
      <Title level={3}>Users</Title>
      <UserTable />
      <Outlet />
    </div>
  );
}
