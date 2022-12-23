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
};
