export enum enumProductStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum enumCurrency {
  VND = "VND",
  USD = "USD",
}

export interface IProduct {
  _id: string;
  name: string;
  status: enumProductStatus;
  createdAt: string;
  headImageUrl: string;
  imageUrls?: string[];
  description?: string;
  content?: string;
  originPrice?: number | string;
  currentPrice?: number | string;
  currency?: enumCurrency;
  tags?: string[];
}
