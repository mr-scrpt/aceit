import { FC, HTMLAttributes, ReactNode } from "react";
import sHeader from "./headerLayout.module.scss";
import { sLayout } from "@/shared/style";

interface HeaderLayoutProps extends HTMLAttributes<HTMLDivElement> {
  LogoSlot: ReactNode;
  MenuSlot: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
  const { LogoSlot, MenuSlot } = props;

  return (
    <header className={sLayout.wrapper}>
      <div className={sHeader.inner}>
        <div className={sHeader.logo}>{LogoSlot}</div>
        <div className={sHeader.menu}>{MenuSlot}</div>
      </div>
    </header>
  );
};
