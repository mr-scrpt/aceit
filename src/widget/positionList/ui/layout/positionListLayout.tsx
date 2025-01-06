import { FC, HTMLAttributes, ReactNode } from "react";
import sPositionListLayout from "./positionListLayout.module.scss";
import { sDeco, sLayout } from "@/shared/style";
import clsx from "clsx";

interface PostionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  TitleSlot: ReactNode;
  PositionListSlot: ReactNode;
}

export const PositionListLayout: FC<PostionLayoutProps> = (props) => {
  const { TitleSlot, PositionListSlot } = props;

  return (
    <section className={sLayout.wrapper}>
      <div className={sPositionListLayout.inner}>
        <div className={sPositionListLayout.menu}>{TitleSlot}</div>
        <div className={sPositionListLayout.social}>{PositionListSlot}</div>
      </div>
    </section>
  );
};
