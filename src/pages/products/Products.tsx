import React from "react";
import { Button, Space, Typography } from "antd";
import { Link, Outlet } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

import { ProductTable } from "@/components";
import { enumNavigation } from "@/constants";

const { Title } = Typography;

export function Products() {
  return (
    <div>
      <Space style={{ justifyContent: "space-between", width: "100%" }}>
        <Title level={3}>Products</Title>
        <Link to={enumNavigation.PRODUCT_ADD}>
          <Button type="primary" icon={<PlusOutlined />}>
            Add products
          </Button>
        </Link>
      </Space>
      <ProductTable />
      <Outlet />
    </div>
  );
}
