import React from "react";
import {
  Drawer,
  Space,
  Button,
  Layout,
  Row,
  Col,
  Input,
  Switch,
  Typography,
  Image,
  Radio,
  Tag,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";

import { enumNavigation } from "@/constants";
import { enumCurrency, enumProductStatus, IProduct } from "@/interfaces";
import { productsMockData } from "@/mockData";
import { useQuery } from "react-query";
import { productApi } from "@/services/productApi";
import { Loading } from "@/components";

const { Text } = Typography;

export const ProductInfo = () => {
  const { _id = "" } = useParams();

  const navigate = useNavigate();

  const navigateToProductPage = () => navigate(enumNavigation.PRODUCTS);

  const { data, isLoading } = useQuery({
    queryKey: `product${_id}`,
    queryFn: () => productApi.getById(_id),
  });

  const productData = data?.data;

  return (
    <Drawer
      title="Edit products"
      open={Boolean(_id)}
      onClose={navigateToProductPage}
      width={500}
      extra={
        <Space>
          <Button onClick={navigateToProductPage}>Cancel</Button>
          <Button onClick={navigateToProductPage} type="primary">
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
                  <Text>Name: </Text>
                </Col>
                <Col span={16}>
                  <Input defaultValue={productData?.name} />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Head image: </Text>
                </Col>
                <Col span={16}>
                  <Image src={productData?.headImageUrl} height={200} />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Origin price: </Text>
                </Col>
                <Col span={16}>
                  <Input defaultValue={productData?.originPrice} />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Current price: </Text>
                </Col>
                <Col span={16}>
                  <Input defaultValue={productData?.currentPrice} />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Currency: </Text>
                </Col>
                <Col span={16}>
                  <Radio.Group value={productData?.currency}>
                    <Radio value={enumCurrency.USD}>USD</Radio>
                    <Radio value={enumCurrency.VND}>VND</Radio>
                  </Radio.Group>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Tags: </Text>
                </Col>
                <Col span={16}>
                  <Row gutter={[0, 4]}>
                    {productData?.tags?.length &&
                      productData?.tags.map((tag) => (
                        <Col key={tag}>
                          <Tag>{tag}</Tag>
                        </Col>
                      ))}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Text>Created At: </Text>
                </Col>
                <Col span={16}>
                  <Text>{productData?.createdAt}</Text>
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
                    defaultChecked={
                      productData?.status === enumProductStatus.ACTIVE
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
      </Loading>
    </Drawer>
  );
};
