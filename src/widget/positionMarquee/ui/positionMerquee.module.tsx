import { FC, HTMLAttributes } from "react";
import { PositionMerqueeLayout } from "./layout/positionMerqueeLayout";
import { Marquee } from "./marquee/marquee";

interface PositionMerqueeModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PositionMerqueeModule: FC<PositionMerqueeModuleProps> = (
  props,
) => {
  return <PositionMerqueeLayout PositionMerqueeSlot={<Marquee />} />;
};
