import { ValuesSlice } from "@entities/ProgressIndicator";
import { combineReducers } from "redux";
import { commonApi } from "@shared/api/commonApi";

// import { HistorySlice } from "@entities/history";
// import { commonApi } from "@shared/api/commonApi";

export const rootReducer = combineReducers({
  [ValuesSlice.name]: ValuesSlice.reducer,
  [commonApi.reducerPath]: commonApi.reducer,
});
