import * as React from "react";
import styles from "./PopupHeader.module.scss";
import { PopupHeaderProps } from "./PopupHeader.types";

export const PopupHeader: React.FC<PopupHeaderProps> = ({ title }) => {
  return <header className={styles.header}>{title}</header>;
};
