import { sDeco, sLayout } from "@/shared/style";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPositionMerqueeLayout from "./positionMerqueeLayout.module.scss";
import clsx from "clsx";

interface PostionMerqueeLayoutProps extends HTMLAttributes<HTMLDivElement> {
  PositionMerqueeSlot: ReactNode;
}

export const PositionMerqueeLayout: FC<PostionMerqueeLayoutProps> = (props) => {
  const { PositionMerqueeSlot } = props;

  return (
    <section
      className={clsx(sLayout.wrapper, sPositionMerqueeLayout.positionMerquee)}
    >
      <div className={sPositionMerqueeLayout.inner}>
        <div
          className={clsx(
            sPositionMerqueeLayout.merquee,
            sDeco.sectionOverflow,
            sDeco.sectionHiddeSide,
          )}
        >
          {PositionMerqueeSlot}
        </div>
      </div>
    </section>
  );
};
