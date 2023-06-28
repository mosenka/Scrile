import React from "react";

import { setCurrentValue, ValuesSlice } from "./ValuesSlice";
import { ValuesInitalStateTypes } from "./ValuesInitalState.types";

describe("entities/ProgressIndicator/model/ValuesSlice", () => {
  let initalState: ValuesInitalStateTypes;

  beforeEach(() => {
    initalState = {
      targetValue: 15,
      currentValue: 0,
    };
  });

  it("initialize slice with initialValue", () => {
    const valuesSliceInit = ValuesSlice.reducer(undefined, {
      type: "unknown",
    });

    expect(valuesSliceInit).toEqual(initalState);
  });

  it("add new currentValue", () => {
    const actionPayload: number = 14;
    const state = ValuesSlice.reducer(
      initalState,
      setCurrentValue(actionPayload)
    );

    expect(state.currentValue).toBe(14);
  });
});
