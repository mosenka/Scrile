import * as React from "react";

import styles from "./ErrorMessage.module.scss";

import { ErrorMessageProps } from "./ErrorMessage.types";

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>!</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
