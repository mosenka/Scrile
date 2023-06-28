import * as React from "react";
import styles from "./PopupBody.module.scss";
import { PopupBodyProps } from "./PopupBody.types";

export const PopupBody: React.FC<PopupBodyProps> = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};
