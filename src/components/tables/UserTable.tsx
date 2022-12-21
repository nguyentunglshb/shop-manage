import React from "react";
import { Space, Table, Tag, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { usersMockData } from "@/mockData";
import { enumUserStatus } from "@/interfaces";
import { enumNavigation } from "@/constants";

export const UserTable = () => {
  const navigate = useNavigate();

  const navigateToUserInfo = (_id: string) =>
    navigate(enumNavigation.USER_INFO.replace(":_id", _id));

  const columns = [
    {
      title: "_Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, { status }: { status: string }) => {
        return (
          <Tag color={status === enumUserStatus.ACTIVE ? "success" : "error"}>
            {status}
          </Tag>
        );
      },
    },
    // {
    //   title: "Username",
    //   dataIndex: "username",
    //   key: "username",
    // },
    // {
    //   title: "Username",
    //   dataIndex: "username",
    //   key: "username",
    // },
    {
      title: "Action",
      // dataIndex: "username",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Tooltip title="edit">
              <EditOutlined
                style={{ cursor: "pointer", color: "green" }}
                onClick={() => navigateToUserInfo(record._id)}
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
  return (
    <Table
      columns={columns}
      dataSource={usersMockData.map((u, index) => {
        return {
          ...u,
          key: index,
        };
      })}
    />
  );
};
