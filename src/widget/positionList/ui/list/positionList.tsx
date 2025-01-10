import { PositionSnippet, usePositionListModel } from "@/entity/postition";
import { sDeco, sPage } from "@/shared/style";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sList from "./positionList.module.scss";

interface PositionListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<PositionListProps> = (props) => {
  const { positionList } = usePositionListModel();
  return (
    <div className={sList.positionList}>
      <div className={sList.inner}>
        <div className={sList.list}>
          {positionList.map((p) => (
            <PositionSnippet
              key={p.id}
              data={p}
              className={clsx(
                sList.item,
                sPage.card,
                sDeco.sectionGradientBorderAndHover,
                sDeco.sectionGradientPrimary,
                sDeco.sectionBorder,
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
