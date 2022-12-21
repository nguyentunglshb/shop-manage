import { IProduct, enumCurrency, enumProductStatus } from "@/interfaces";

export const productsMockData = [
  {
    _id: "pppooo111",
    name: "T-shirt",
    createdAt: "2022-12-06",
    status: enumProductStatus.ACTIVE,
    headImageUrl:
      "https://product.hstatic.net/1000088324/product/mk_ua_em_f30e998ace604e3c969c8a3cb4c8eed6_master.png",
    originPrice: 419000,
    currentPrice: 319000,
    currency: enumCurrency.VND,
    tags: ["men", "women", "kid", "young"],
  },
  {
    _id: "pl0111",
    name: "Polo",
    createdAt: "2022-12-06",
    status: enumProductStatus.INACTIVE,
    headImageUrl:
      "https://product.hstatic.net/1000026602/product/dsc03156_1b0762b22e3b405fa110880215293366.jpg",
    originPrice: 34,
    currentPrice: 29,
    currency: enumCurrency.USD,
    tags: ["men", "young"],
  },
  {
    _id: "dr991",
    name: "Cherry dress",
    createdAt: "2022-12-06",
    status: enumProductStatus.INACTIVE,
    headImageUrl:
      "https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132",
    originPrice: 889000,
    currentPrice: 739000,
    currency: enumCurrency.VND,
    tags: ["women", "young"],
  },
] as IProduct[];
