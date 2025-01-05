import { POSITION_LIST } from "@/entity/postition/model/position.model";
import { PositionSnippet } from "@/entity/postition/ui/positionSnippet";
import { FC, HTMLAttributes } from "react";
import sList from "./list.module.scss";
import { sDeco, sPage } from "@/shared/style";
import clsx from "clsx";

interface PositionListProps extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<PositionListProps> = (props) => {
  return (
    <div className={sList.positionList}>
      <div className={sList.inner}>
        <div className={sList.list}>
          {POSITION_LIST.map((p) => (
            <PositionSnippet
              key={p.id}
              data={p}
              className={clsx(
                sList.item,
                sPage.card,
                sDeco.sectionGradientBorder,
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
