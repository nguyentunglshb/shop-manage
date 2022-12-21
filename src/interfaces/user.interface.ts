import { IProduct } from "./product.interface";

export enum enumUserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface IUser {
  _id: string;
  username: string;
  createdAt: string;
  status: enumUserStatus;
  address?: string;
  cart?: IProduct[];
  purchased?: IProduct[];
  liked?: IProduct[];
}
