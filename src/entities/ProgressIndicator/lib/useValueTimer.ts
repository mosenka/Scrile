import { useAppDispatch, useAppSelector } from "@app/hooks/useReducer";
import { setCurrentValue } from "@entities/ProgressIndicator/model/ValuesSlice";
import { useEffect } from "react";

export const useValueTimer = (initValue: number) => {
  const { currentValue, targetValue } = useAppSelector((state) => state.values);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!initValue) return;

    dispatch(setCurrentValue(initValue));
  }, [initValue]);

  useEffect(() => {
    if (!currentValue) return;

    let timerId: ReturnType<typeof setTimeout>;

    if (currentValue < targetValue) {
      timerId = setTimeout(() => {
        const newValue = +(currentValue + 0.2).toFixed(2);
        dispatch(setCurrentValue(newValue));
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [currentValue, targetValue]);

  return { currentValue, targetValue };
};
