import { usePositionListModel } from "@/entity/position";
import { sDeco, sPage } from "@/shared/style";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { PositionItem } from "../item/positionItem";
import sList from "./positionList.module.scss";

interface PositionListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<PositionListProps> = (props) => {
  const { positionList } = usePositionListModel();
  return (
    <div className={sList.positionList}>
      <div className={sList.inner}>
        <div className={sList.list}>
          {positionList.map((p) => (
            <PositionItem
              key={p.id}
              position={p}
              className={clsx(
                sList.item,
                sPage.card,
                sDeco.sectionGradientBorderAndHover,
                sDeco.sectionGradientPrimary,
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
