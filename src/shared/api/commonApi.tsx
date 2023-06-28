import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import config from "../lib/config";

import { tags } from "@shared/api/tags";

export const commonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.API__URL,
    // prepareHeaders: (headers) => {
    //   headers.append("Content-Type", "application/json; charset=utf-8");
    //   //   //   // headers.set("Origin:", "http://localhost:3000");
    //   return headers;
    // },
  }),
  tagTypes: tags,
  reducerPath: "commonApi",
  endpoints: () => ({}),
});
