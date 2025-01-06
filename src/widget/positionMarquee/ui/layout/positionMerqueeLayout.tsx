import { sLayout } from "@/shared/style";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPositionListLayout from "./positionMerqueeLayout.module.scss";

interface PostionMerqueeLayoutProps extends HTMLAttributes<HTMLDivElement> {
  PositionMerqueeSlot: ReactNode;
}

export const PositionMerqueeLayout: FC<PostionMerqueeLayoutProps> = (props) => {
  const { PositionMerqueeSlot } = props;

  return (
    <section className={sLayout.wrapper}>
      <div className={sPositionListLayout.inner}>
        <div className={sPositionListLayout.merquee}>{PositionMerqueeSlot}</div>
      </div>
    </section>
  );
};
