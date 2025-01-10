import { FC, HTMLAttributes } from "react";
import sPositionLayout from "./positionLayout.module.scss";
import { Position } from "@/entity/postition";
import { EmploymentType } from "@/entity/postition/ui/employmentType/employmentType";

interface PositionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  NavSlot?: React.ReactNode;
  position: PositionType;
}

export const PositionLayout: FC<PositionLayoutProps> = (props) => {
  const { NavSlot, position } = props;
  return (
    <Position position={position}>
      <EmploymentType />
      <div className={sPositionLayout.position}>
        <div className={sPositionLayout.inner}>
          <div className={sPositionLayout.nav}>{NavSlot}</div>
          <div className={sPositionLayout.main}>
            <div className={sPositionLayout.title}>
              <Position.Title>Заголовок</Position.Title>
            </div>
          </div>
          <div className={sPositionLayout.side}></div>
        </div>
      </div>
    </Position>
  );
};
