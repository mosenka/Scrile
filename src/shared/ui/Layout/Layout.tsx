import classNames from "classnames";
import * as React from "react";

import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({
																								children

																							}) => {


	return (
		<div className={styles.layout}>
			{children}
		</div>
	);
};
