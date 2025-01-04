import { FC, HTMLAttributes, ReactNode } from "react";
import sFooterLayout from "./footerLayout.module.scss";
import { sDeco, sLayout } from "@/shared/style";
import clsx from "clsx";

interface FooterLayoutProps extends HTMLAttributes<HTMLDivElement> {
  MenuSlot: ReactNode;
  SocialSlot: ReactNode;
  CopyrightSlot: ReactNode;
}

export const FooterLayout: FC<FooterLayoutProps> = (props) => {
  const { CopyrightSlot, MenuSlot, SocialSlot } = props;

  return (
    <footer className={sLayout.wrapper}>
      <div className={sFooterLayout.inner}>
        <div
          className={clsx(
            sFooterLayout.row,
            sDeco.lineGhosty,
            sDeco.sectionGradientLineGhosty,
          )}
        >
          <div className={sFooterLayout.menu}>{MenuSlot}</div>
          <div className={sFooterLayout.social}>{SocialSlot}</div>
        </div>
        <div className={sFooterLayout.row}>
          <div className={sFooterLayout.copyright}>{CopyrightSlot}</div>
        </div>
      </div>
    </footer>
  );
};
