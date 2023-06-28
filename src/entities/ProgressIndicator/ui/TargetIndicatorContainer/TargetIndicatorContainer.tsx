import { InformationMessage } from "@/widgets";
import { useAppSelector } from "@app/hooks/useReducer";
import { balanceUSDType } from "@entities/ProgressIndicator/api/balanceUSD.type";
import * as React from "react";
import { useState } from "react";

import { useGetBalanceUSDQuery } from "@entities/ProgressIndicator/api/balanceUSDApi";
import { ProgressLoading } from "@entities/ProgressIndicator/ui/ProgressLoading/ProgressLoading";
import {
  ErrorMessage,
  FlexContainer,
  LoadingSpinner,
  TargetCard,
} from "@shared/ui";
import styles from "./TargetIndicatorContainer.module.scss";
import { TargetIndicatorContainerProps } from "./TargetIndicatorContainer.types";

export const TargetIndicatorContainer: React.FC<
  TargetIndicatorContainerProps
> = ({}) => {
  const { targetValue, currentValue } = useAppSelector((state) => state.values);

  const { data: initValue, isLoading, isError } = useGetBalanceUSDQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage text={"Ошибка на сервере"} />;
  }

  return (
    <>
      <FlexContainer>
        {initValue && initValue["balance_usd"] && (
          <ProgressLoading initValue={initValue["balance_usd"]} />
        )}
        <TargetCard
          value={targetValue}
          isActive={targetValue === currentValue}
        />
      </FlexContainer>

      <InformationMessage
        text={"You need $1 more to reach your target."}
        isHidden={currentValue >= targetValue}
      />
    </>
  );
};
