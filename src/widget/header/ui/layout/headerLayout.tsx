import { FC, HTMLAttributes, ReactNode } from "react";
import sHeaderLayout from "./headerLayout.module.scss";
import { sDeco, sLayout } from "@/shared/style";
import clsx from "clsx";

interface HeaderLayoutProps extends HTMLAttributes<HTMLDivElement> {
  LogoSlot: ReactNode;
  MenuSlot: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
  const { LogoSlot, MenuSlot } = props;

  return (
    <header className={sLayout.wrapper}>
      <div
        className={clsx(sHeaderLayout.inner, sDeco.sectionGradientLineGhosty)}
      >
        <div className={sHeaderLayout.logo}>{LogoSlot}</div>
        <div className={sHeaderLayout.menu}>{MenuSlot}</div>
      </div>
    </header>
  );
};
