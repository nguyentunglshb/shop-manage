import React from "react";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface ILoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export function Loading(props: ILoadingProps) {
  const { isLoading, children } = props;
  return (
    <>
      {isLoading ? (
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        ></Spin>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
