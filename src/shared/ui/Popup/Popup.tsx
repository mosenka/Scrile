import * as React from "react";
import styles from "./Popup.module.scss";
import { PopupProps } from "./Popup.types";

export const Popup: React.FC<PopupProps> = ({ children }) => {
  return <div className={styles.popup}>{children}</div>;
};
