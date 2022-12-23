import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Col,
  Drawer,
  Input,
  Layout,
  Row,
  Space,
  Switch,
  Typography,
  Image,
} from "antd";

import { enumNavigation } from "@/constants";
import { enumUserStatus } from "@/interfaces";
import { useQuery } from "react-query";
import { userApi } from "@/services/userApi";
import { Loading } from "@/components";

const { Text } = Typography;

export const UserInfo = memo(() => {
  const { _id = "" } = useParams();

  const navigate = useNavigate();

  const navigateToUserPage = () => navigate(enumNavigation.USERS);

  const { data, isLoading } = useQuery({
    queryKey: `user${_id}`,
    queryFn: () => userApi.getById(_id),
  });

  const userData = data?.data;

  return (
    <Drawer
      title="Edit user"
      open={Boolean(_id)}
      onClose={navigateToUserPage}
      width={500}
      extra={
        <Space>
          <Button onClick={navigateToUserPage}>Cancel</Button>
          <Button onClick={navigateToUserPage} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <Loading isLoading={isLoading}>
        <Layout
          style={{
            // height: "100%",
            borderRadius: "8px",
            flexDirection: "row",
            padding: "16px",
          }}
        >
          <Row style={{ width: "100%" }} gutter={[16, 24]}>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Username: </Text>
                </Col>
                <Col span={16}>
                  <Input defaultValue={userData?.username} />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Avatar: </Text>
                </Col>
                <Col span={16}>
                  {userData?.avatarUrl ? (
                    <Image
                      src={userData?.avatarUrl}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <input type="file" />
                  )}
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Created At: </Text>
                </Col>
                <Col span={16}>
                  <Text>{userData?.createdAt}</Text>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Active: </Text>
                </Col>
                <Col span={16}>
                  <Switch
                    defaultChecked={userData?.status === enumUserStatus.ACTIVE}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
      </Loading>
    </Drawer>
  );
});
