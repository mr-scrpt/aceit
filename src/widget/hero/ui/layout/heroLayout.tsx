import { FC, HTMLAttributes } from "react";
import { sLayout } from "@/shared/style";
import sHeroLayout from "./heroLayout.module.scss";

interface HeroLayoutProps extends HTMLAttributes<HTMLDivElement> {
  slotBanner?: React.ReactNode;
  slotDesc?: React.ReactNode;
  slotAction?: React.ReactNode;
}

export const HeroLayout: FC<HeroLayoutProps> = (props) => {
  const { slotBanner, slotDesc, slotAction } = props;
  return (
    <section className={sLayout.wrapper}>
      <div className={sHeroLayout.inner}>
        <div className={sHeroLayout.row}>{slotBanner}</div>
        <div className={sHeroLayout.row}>{slotDesc}</div>
        <div className={sHeroLayout.row}>{slotAction}</div>
      </div>
    </section>
  );
};
