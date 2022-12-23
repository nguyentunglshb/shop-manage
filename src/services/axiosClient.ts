import axios from "axios";

import { accessToken } from "./../utils/auth";

// const Qs = require("query-string");

const axiosClient = axios.create({
  // baseURL: import.meta.env.BASE_URL,
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    charset: "UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": true,
    crossorigin: true,
  },
});

axiosClient.interceptors.request.use((config: any) => {
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  // config.paramsSerializer = function (params: any) {
  //   return Qs.stringify(params, { arrayFormat: "brackets" });
  // };
  delete axios.defaults.headers.common["Accept-Encoding"];
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    // if (response && response.data && response.data.data) {
    //   return response.data.data;
    // }
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: any) => {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    throw error;
  }
);

export default axiosClient;