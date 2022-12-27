import React, { useContext, useEffect, useState } from "react";
import { Button, Drawer, Form, Input, Radio, Select, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";

import { enumNavigation } from "@/constants";
import { enumCurrency, IproductAddForm } from "@/interfaces";
import { FileUpload } from "@/components";
import { productApi } from "@/services/productApi";
import { useMutation } from "react-query";
import { enumMessageType, NotificationContext } from "@/contexts";

export function ProductAddForm() {
  const messageKey = "add-new-product";

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { openMessage } = useContext(NotificationContext);

  const [headImage, setHeadImage] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const navigateToProductPage = () => navigate(enumNavigation.PRODUCTS);

  const formData = new FormData();

  const { handleSubmit, control, reset } = useForm<IproductAddForm>({
    defaultValues: {
      name: "",
      description: "",
      content: "",
      originPrice: "",
      currentPrice: "",
      currency: enumCurrency.USD,
      tags: ["kid", "women"],
    },
  });

  const { isLoading, mutate, isSuccess, isError } = useMutation(
    (fd: FormData) => productApi.create(fd)
  );

  const handleFormDataChange = (key: string, value: string | File | File[]) => {
    if (Array.isArray(value)) {
      for (const v of value) {
        formData.append(key, v);
      }
    } else {
      formData.append(key, value);
    }
  };

  const onSubmit = async (data: IproductAddForm) => {
    for (const [key, value] of Object.entries(data)) {
      handleFormDataChange(key, value);
    }
    for (const file of images) {
      formData.append("images", file);
    }

    formData.append("headImage", headImage[0]);
    mutate(formData);
    // openMessage('new', enumMessageType.ERROR, )
  };

  useEffect(() => {
    if (isLoading) {
      openMessage(messageKey, enumMessageType.LOADING, "Creating new product");
    }
    if (isSuccess) {
      openMessage(
        messageKey,
        enumMessageType.SUCCESS,
        "Create new product successfully"
      );
      reset();
      navigateToProductPage();
    }
    if (isError) {
      openMessage(
        messageKey,
        enumMessageType.ERROR,
        "Create new product failed"
      );
      reset();
      navigateToProductPage();
    }
  }, [isLoading, isError, isSuccess]);

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
          <Button type="primary" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Space>
      }
    >
      <Form
        labelCol={{
          span: 6,
        }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item label="Name" required>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextArea {...field} />}
          />
        </Form.Item>
        <Form.Item label="Content">
          <Controller
            name="content"
            control={control}
            render={({ field }) => <TextArea {...field} />}
          />
        </Form.Item>
        <Form.Item label="Origin price" required>
          <Controller
            name="originPrice"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label="Current price" required>
          <Controller
            name="currentPrice"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item label="Currency" required>
          <Controller
            name="currency"
            control={control}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value={enumCurrency.USD}>{enumCurrency.USD}</Radio>
                <Radio value={enumCurrency.VND}>{enumCurrency.VND}</Radio>
              </Radio.Group>
            )}
          />
        </Form.Item>
        <Form.Item label="Tags" required>
          <Controller
            name="tags"
            control={control}
            render={({ field }) => <Select mode="tags" {...field} />}
          />
        </Form.Item>
        <Form.Item label="Head Image" required>
          <FileUpload files={headImage} setFiles={setHeadImage} />
        </Form.Item>
        <Form.Item label="Images">
          <FileUpload
            multiple
            files={images}
            setFiles={setImages}
            keyType="images"
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
