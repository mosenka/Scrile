import { ValuesInitalStateTypes } from "./ValuesInitalState.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ValuesInitalStateTypes = {
  targetValue: 15,
  currentValue: 0,
};

export const ValuesSlice = createSlice({
  name: "values",
  initialState,
  reducers: {
    setCurrentValue: (state, action: PayloadAction<number>) => {
      state.currentValue = action.payload;
    },
  },
});

export const { setCurrentValue } = ValuesSlice.actions;
