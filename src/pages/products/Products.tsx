import React from "react";
import { Typography } from "antd";
import { Outlet } from "react-router-dom";

import { ProductTable } from "@/components";

const { Title } = Typography;

export function Products() {
  return (
    <div>
      <Title level={3}>Products</Title>
      <ProductTable />
      <Outlet />
    </div>
  );
}
