import { Icon, Text } from "@shared/ui";
import classNames from "classnames";
import * as React from "react";
import styles from "./InformationMessage.module.scss";
import { InformationMessageProps } from "./InformationMessage.types";

export const InformationMessage: React.FC<InformationMessageProps> = ({
  text,
  isHidden = false,
}) => {
  const wrapperClasses = classNames(styles.wrapper, {
    [styles["is-hidden"]]: isHidden,
  });

  return (
    <div className={wrapperClasses}>
      <span className={styles["icon-wrapper"]}>
        <Icon icon={"information"} width={20} className={styles.icon} />
      </span>
      <Text weight={600} className={styles.text}>
        {text}
      </Text>
    </div>
  );
};
