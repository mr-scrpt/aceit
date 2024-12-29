import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./headerLayout.module.scss";

interface HeaderLayoutProps extends HTMLAttributes<HTMLDivElement> {
  LogoSlot: ReactNode;
  MenuSlot: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
  const { LogoSlot, MenuSlot } = props;

  return (
    <header className={styles.layout}>
      <div className={styles.inner}>
        <div className={styles.logo}>{LogoSlot}</div>
        <div className={styles.menu}>{MenuSlot}</div>
      </div>
    </header>
  );
};
