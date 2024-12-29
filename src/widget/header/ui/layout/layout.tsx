import { FC, HTMLAttributes } from "react";
import styles from "./layout.module.scss";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <header className={styles.layout} {...props}>
      {children}
    </header>
  );
};
