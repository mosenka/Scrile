import classNames from "classnames";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { getWidthProcent } from "../../helpers/getWidthProcent";

import styles from "./Indicator.module.scss";
import { IndicatorProps } from "./Indicator.types";

export const Indicator: React.FC<IndicatorProps> = ({
  maxValue,
  initValue,
}) => {
  const [value, setValue] = useState(0);
  const [left, setLeft] = useState(0);

  const ref = useRef<HTMLSpanElement | null>(null);

  const valueClasses = classNames(styles.value, {
    [styles["is-active"]]: initValue >= maxValue,
  });

  useEffect(() => {
    if (!initValue && initValue != 0) return;

    const procent = getWidthProcent(maxValue, initValue);

    setValue(procent);
  }, [initValue, maxValue]);

  useEffect(() => {
    if (!ref.current) return;
    if (!initValue && initValue != 0) return;

    const width = ref.current?.offsetWidth;
    setLeft(width / 2);
  }, [ref, initValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.progress} style={{ width: `${value}%` }}></div>

      <span
        ref={ref}
        className={valueClasses}
        style={{
          left: `calc(${value}% - ${left}px)`,
        }}
      >
        $ {initValue}
      </span>
    </div>
  );
};
