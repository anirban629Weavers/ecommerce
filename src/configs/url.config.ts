// AUTH USER URLS
export const LOGIN_USER_URL = "/api/auth/login";
export const SIGNUP_USER_URL = "/api/auth/signup";
export const SIGNOUT_USER_URL = "/api/auth/signout";
export const SESSION_CHECK_URL = "/api/auth/session";
export const REFRESH_TOKEN_URL = "/api/auth/session/refresh";

// BASE URL
export const BASE_URL = "http://localhost:3000";

// PRODUCT URL
export const GET_ALL_PRODUCTS = "/api/products/all";

// ORDER URL
export const CREATE_ORDER = "/api/orders/create";
export const ALL_ORDERS = "/api/orders/all";
export const SINGLE_ORDER = "/api/orders/single";

// ADMIN URL
export const IS_ADMIN_CHECK = "/api/auth/admin";
export const FETCH_ALL_ORDERS = "/api/auth/admin/all-orders";
export const FETCH_ALL_USERS = "/api/auth/admin/all-users";
export const DELETE_USER = "/api/auth/admin/delete-user";
export const MAKE_ADMIN = "/api/auth/admin/make-admin";
export const REMOVE_ADMIN = "/api/auth/admin/remove-admin";
export const MAKE_ORDER_PAID = "/api/auth/admin/make-order-paid";
export const MAKE_ORDER_UNPAID = "/api/auth/admin/make-order-unpaid";
export const MAKE_ORDER_DELIVERED = "/api/auth/admin/make-order-delivered";
export const MAKE_ORDER_NOT_DELIVERED =
  "/api/auth/admin/make-order-notdelivered";
export const SINGLE_ORDER_ADMIN = "/api/auth/admin/single-order";

// USER URLS
export const UPDATE_USER_URL = "/api/user/update";

// PAYMENT URLS
export const PAYMENT_URL = "/api/payment";
