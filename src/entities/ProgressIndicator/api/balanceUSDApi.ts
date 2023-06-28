import { balanceUSDType } from "./balanceUSD.type";
import { commonApi } from "@shared/api/commonApi";

export const balanceUSDApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getBalanceUSD: build.query<balanceUSDType, void>({
      query() {
        return {
          url: "/",
        };
      },
      providesTags: (result) => [{ type: "BalanceUSD" }],
    }),
  }),
});

export const { useGetBalanceUSDQuery } = balanceUSDApi;
