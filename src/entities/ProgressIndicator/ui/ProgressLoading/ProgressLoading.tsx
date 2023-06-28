import { useValueTimer } from "@entities/ProgressIndicator/lib/useValueTimer";
import * as React from "react";

import styles from "./ProgressLoading.module.scss";
import { ProgressLoadingProps } from "./ProgressLoading.types";

import { Indicator } from "../Indicator/Indicator";
import { Text } from "@shared/ui";

export const ProgressLoading: React.FC<ProgressLoadingProps> = ({
  initValue,
}) => {
  const { currentValue, targetValue } = useValueTimer(initValue);

  return (
    <div className={styles.wrapper}>
      <Text weight={600} size={16} className={styles.title}>
        Reached:
      </Text>
      <Indicator initValue={currentValue} maxValue={targetValue} />
    </div>
  );
};
