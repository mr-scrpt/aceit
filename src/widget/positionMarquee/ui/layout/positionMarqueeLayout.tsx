import { sLayout } from "@/shared/style";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPositionListLayout from "./positionLayout.module.scss";

interface PostionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  PositionMerqueeSlot: ReactNode;
}

export const PositionLayout: FC<PostionLayoutProps> = (props) => {
  const { PositionMerqueeSlot } = props;

  return (
    <section className={sLayout.wrapper}>
      <div className={sPositionListLayout.inner}>
        <div className={sPositionListLayout.menu}>{PositionMerqueeSlot}</div>
      </div>
    </section>
  );
};
