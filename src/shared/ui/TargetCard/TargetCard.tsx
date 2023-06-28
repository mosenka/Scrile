import classNames from "classnames";
import * as React from "react";
import styles from "./TargetCard.module.scss";
import { TargetCardProps } from "./TargetCard.types";

export const TargetCard: React.FC<TargetCardProps> = ({
  title = "Target",
  value,
  isActive,
}) => {
  const wrapperClasses = classNames(styles.wrapper, {
    [styles["is-active"]]: isActive,
  });

  return (
    <div className={wrapperClasses}>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value} $</span>
    </div>
  );
};
