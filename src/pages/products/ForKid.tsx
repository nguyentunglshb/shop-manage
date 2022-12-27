import { FileUpload } from "@/components";
import { othersApi } from "@/services";
import { Button } from "antd";
import React, { useState } from "react";

export function ForKid() {
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = async () => {
    let fd = new FormData();
    for (const file of files) {
      fd.append("images", file);
      console.log(file, files);
    }
    try {
      const res = await othersApi.uploadMultiple(fd);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FileUpload files={files} setFiles={setFiles} multiple={true} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}
