import React from "react";
import Dropzone from "react-dropzone";
import { Space, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface IProps {
  keyType?: "headImage" | "images";
  multiple?: boolean;
  files?: IFileType[];
  setFiles: (files: File[]) => void;
  // handleDrop?: () => void;
}

export interface IFileType extends File {
  preview?: string;
}

export function FileUpload(props: IProps) {
  const { multiple = false, files = [], setFiles } = props;

  const onDropFile = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const preview = files.map((file) => {
    const previewURL = URL.createObjectURL(file);
    return <Image key={previewURL} src={previewURL} width={140} />;
  });

  return (
    <>
      <Dropzone multiple={multiple} onDrop={onDropFile}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              borderRadius: "8px",
              border: "1px dashed pink",
              height: "100px",
              padding: "16px",
            }}
          >
            <div
              {...getRootProps()}
              style={{
                height: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <input {...getInputProps()} />
              <p>Click here or drag and drop to upload</p>
              <UploadOutlined
                style={{
                  fontSize: "24px",
                  color: "pink",
                }}
              />
            </div>
          </div>
        )}
      </Dropzone>
      <Space style={{ paddingTop: "16px" }} wrap>
        {preview}
      </Space>
    </>
  );
}
