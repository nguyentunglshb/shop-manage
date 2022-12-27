import axiosClient from "./axiosClient";

export const othersApi = {
  uploadOne: async (fd: FormData) => {
    const url = `/other/upload`;
    return await axiosClient.post(url, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  uploadMultiple: async (fd: FormData) => {
    const url = `/other/multiple`;
    return await axiosClient.post(url, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
