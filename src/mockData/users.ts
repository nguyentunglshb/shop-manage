import { enumUserStatus } from "./../interfaces/user.interface";
import { IUser } from "@/interfaces";

export const usersMockData: IUser[] = [
  {
    _id: "123abcxyz",
    username: "nguyentung@adamosoft.com",
    createdAt: "2022-12-06",
    status: enumUserStatus.ACTIVE,
  },
  {
    _id: "234abcxyz",
    username: "nguyentung2@adamosoft.com",
    createdAt: "2022-12-06",
    status: enumUserStatus.INACTIVE,
  },
  {
    _id: "345abcxyz",
    username: "nguyentung3@adamosoft.com",
    createdAt: "2022-12-06",
    status: enumUserStatus.ACTIVE,
  },
  {
    _id: "456abcxyz",
    username: "nguyentung4@adamosoft.com",
    createdAt: "2022-12-06",
    status: enumUserStatus.ACTIVE,
  },
  {
    _id: "567abcxyz",
    username: "nguyentung5@adamosoft.com",
    createdAt: "2022-12-06",
    status: enumUserStatus.INACTIVE,
  },
];
