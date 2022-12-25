export enum enumNavigation {
  DASHBOARD = "/",

  ABOUT = "/about",

  PRODUCTS = "/products",
  PRODUCTS_INFO = "/products/:_id",
  PRODUCT_ADD = "/products/add",
  FOR_WOMEN = "/products/women",
  FOR_MEN = "/products/men",
  FOR_KID = "/products/kid",

  ORDERS = "/orders",
  INPROGRESS_ORDERS = "/orders/inprogress-orders",
  COMPLETED_ORDERS = "/orders/completed-orders",
  CANCELED_ORDERS = "/orders/canceled-orders",
  PENDING_ORDERS = "/orders/pending-orders",

  USERS = "/users",
  USER_INFO = "/users/:_id",

  SETTINGS = "settings",
}
