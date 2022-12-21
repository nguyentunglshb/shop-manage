import React from "react";
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
} from "antd";

import { enumNavigation } from "@/constants";
import { usersMockData } from "@/mockData";
import { enumUserStatus, IUser } from "@/interfaces";

const { Text } = Typography;

export function UserInfo() {
  const { _id } = useParams();

  const navigate = useNavigate();

  const navigateToUserPage = () => navigate(enumNavigation.USERS);

  const userData = usersMockData.find((u) => u._id === _id) as IUser;
  const { username, createdAt, status } = userData;

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
                <Input defaultValue={username} />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={8}>
                <Text>Created At: </Text>
              </Col>
              <Col span={16}>
                <Text>{createdAt}</Text>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={8}>
                <Text>Active: </Text>
              </Col>
              <Col span={16}>
                <Switch defaultChecked={status === enumUserStatus.ACTIVE} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </Drawer>
  );
}
