import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, Row, Col, Space, Table, Tag, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { enumNavigation } from "@/constants";
import { productsMockData } from "@/mockData";
import { enumProductStatus } from "@/interfaces";
import { formatPrice } from "@/utils";
import { useQuery } from "react-query";
import { productApi } from "@/services/productApi";
import { Loading } from "../loading";

export const ProductTable = () => {
  const navigate = useNavigate();

  const navigateToProductInfo = (_id: string) =>
    navigate(enumNavigation.PRODUCTS_INFO.replace(":_id", _id));

  const columns = [
    {
      title: "_Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Head image",
      dataIndex: "headImageUrl",
      key: "headImageUrl",
      render: (_: any, { headImageUrl }: { headImageUrl: string }) => {
        return <Image src={headImageUrl} height={100} />;
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Origin price",
      dataIndex: "originPrice",
      key: "originPrice",
      render: (_: any, record: any) =>
        record.originPrice && formatPrice(record.originPrice),
    },
    {
      title: "Current Price",
      dataIndex: "currentPrice",
      key: "currentPrice",
      render: (_: any, record: any) =>
        record.currentPrice && formatPrice(record.currentPrice),
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, { status }: { status: string }) => {
        return (
          <Tag
            color={status === enumProductStatus.ACTIVE ? "success" : "error"}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (_: any, record: any) => {
        return (
          <Row style={{ maxWidth: "200px" }} gutter={[2, 6]}>
            {record.tags.map((tag: string, index: number) => (
              <Col key={tag}>
                <Tag>{tag}</Tag>
              </Col>
            ))}
          </Row>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Tooltip title="edit">
              <EditOutlined
                style={{ cursor: "pointer", color: "green" }}
                onClick={() => navigateToProductInfo(record._id)}
              />
            </Tooltip>
            <Tooltip title="delete">
              <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  const { isLoading, data } = useQuery({
    queryKey: "all products",
    queryFn: () => productApi.getAll(),
  });

  return (
    <Loading isLoading={isLoading}>
      <Table
        columns={columns}
        dataSource={data?.data.map((p, index) => {
          return {
            ...p,
            key: index,
          };
        })}
      />
    </Loading>
  );
};
