import axiosClient from "./axiosClient";
import { IProduct } from "@/interfaces";

export const productApi = {
  getAll: async () => {
    const url = `/products`;
    return await axiosClient.get<IProduct[]>(url);
  },

  getById: async (_id: string) => {
    const url = `/products/${_id}`;
    return await axiosClient.get<IProduct>(url);
  },

  create: async (body: FormData) => {
    const url = `/products`;
    return await axiosClient.post(url, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
