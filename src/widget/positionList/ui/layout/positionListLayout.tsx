import { sDeco, sLayout } from "@/shared/style";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPositionListLayout from "./positionListLayout.module.scss";
import clsx from "clsx";

interface PostionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  TitleSlot: ReactNode;
  PositionListSlot: ReactNode;
  anchor?: string;
}

export const PositionListLayout: FC<PostionLayoutProps> = (props) => {
  const { TitleSlot, PositionListSlot, anchor } = props;

  return (
    <section className={sLayout.wrapper} id={anchor}>
      <div className={clsx(sDeco.spotSection, sPositionListLayout.inner)}>
        <div className={sPositionListLayout.title}>{TitleSlot}</div>
        <div className={sPositionListLayout.list}>{PositionListSlot}</div>
      </div>
    </section>
  );
};
