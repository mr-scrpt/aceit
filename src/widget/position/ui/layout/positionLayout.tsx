import { FC, HTMLAttributes } from "react";
import sPositionLayout from "./positionLayout.module.scss";
import { Position } from "@/entity/position";
import { ICON_LIST } from "@/shared/ui/icon/domain/icon.type";
import { DataRow } from "@/entity/position/ui/dataRow/dataRow";

interface PositionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  NavSlot?: React.ReactNode;
  position: PositionType;
}

export const PositionLayout: FC<PositionLayoutProps> = (props) => {
  const { NavSlot, position } = props;
  return (
    <Position position={position}>
      <div className={sPositionLayout.position}>
        <div className={sPositionLayout.inner}>
          <div className={sPositionLayout.nav}>{NavSlot}</div>
          <div className={sPositionLayout.main}>
            <div className={sPositionLayout.title}>
              <Position.Title>Заголовок</Position.Title>
              <Position.Description />
              <Position.Responsibilities />
              ===
              <Position.Requirements />
              <Position.EmploymentType />
              <Position.Location />
              <Position.Level />
            </div>
          </div>
          <div className={sPositionLayout.side}></div>
        </div>
      </div>
    </Position>
  );
};
