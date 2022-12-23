import axiosClient from "./axiosClient";

import { ICreateUser } from "./user.interface";
import { IUser } from "@/interfaces";

export const userApi = {
  getAll: async () => {
    const url = `/users`;
    return await axiosClient.get<IUser[]>(url);
  },

  getById: async (_id: string) => {
    const url = `/users/${_id}`;
    return await axiosClient.get<IUser>(url);
  },

  create: (body: ICreateUser) => {
    const url = `/users`;
    return axiosClient.post(url, body);
  },
};
