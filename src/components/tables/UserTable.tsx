import React from "react";
import { Image, Space, Table, Tag, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { enumUserStatus } from "@/interfaces";
import { enumNavigation } from "@/constants";
import { userApi } from "@/services/userApi";
import { Loading } from "../loading";
import { formatDDMMMYYYY } from "@/utils";

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
      title: "Avatar",
      dataIndex: "avatarUrl",
      key: "avatarUrl",
      render: (_: any, { avatarUrl }: { avatarUrl?: string }) => {
        return avatarUrl ? <Image src={avatarUrl} height={200} /> : <></>;
      },
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_: any, { createdAt }: { createdAt: string }) => {
        return createdAt && formatDDMMMYYYY(createdAt);
      },
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

  const { isLoading, data } = useQuery({
    queryKey: "all users",
    queryFn: () => userApi.getAll(),
  });

  return (
    <Loading isLoading={isLoading}>
      <Table
        columns={columns}
        dataSource={data?.data.map((u, index) => {
          return {
            ...u,
            key: index,
          };
        })}
      />
    </Loading>
  );
};
