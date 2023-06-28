import * as React from "react";
import styles from "./FlexContainer.module.scss";
import { FlexContainerProps } from "./FlexContainer.types";

export const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
