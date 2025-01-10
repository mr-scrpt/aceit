import { sDeco, sLayout } from "@/shared/style";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPositionListLayout from "./positionListLayout.module.scss";
import clsx from "clsx";

interface PostionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  TitleSlot: ReactNode;
  PositionListSlot: ReactNode;
}

export const PositionListLayout: FC<PostionLayoutProps> = (props) => {
  const { TitleSlot, PositionListSlot } = props;

  return (
    <section className={sLayout.wrapper}>
      <div className={clsx(sDeco.spotSection, sPositionListLayout.inner)}>
        <div className={sPositionListLayout.title}>{TitleSlot}</div>
        <div className={sPositionListLayout.list}>{PositionListSlot}</div>
      </div>
    </section>
  );
};
