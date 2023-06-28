import * as React from "react";
import styles from "./PopupContent.module.scss";
import { PopupContentProps } from "./PopupContent.types";

export const PopupContent: React.FC<PopupContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};