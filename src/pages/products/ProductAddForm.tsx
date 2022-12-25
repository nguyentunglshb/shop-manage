import React from "react";
import { Button, Drawer, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { enumNavigation } from "@/constants";
import { Loading } from "@/components";

export function ProductAddForm() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateToProductPage = () => navigate(enumNavigation.PRODUCTS);

  return (
    <Drawer
      title="Add new product"
      open={pathname.includes("add")}
      onClose={navigateToProductPage}
      destroyOnClose
      width={500}
      extra={
        <Space>
          <Button onClick={navigateToProductPage}>Cancel</Button>
          <Button onClick={navigateToProductPage} type="primary">
            Submit
          </Button>
        </Space>
      }
    ></Drawer>
  );
}
