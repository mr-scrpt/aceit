import { POSITION_LIST } from "@/entity/postition/model/position.model";
import { PositionSnippet } from "@/entity/postition/ui/positionSnippet";
import { FC, HTMLAttributes } from "react";

interface PositionListProps extends HTMLAttributes<HTMLDivElement> {}

export const PositionList: FC<PositionListProps> = (props) => {
  return (
    <div>
      {POSITION_LIST.map((p) => (
        <PositionSnippet key={p.id} data={p} />
      ))}
    </div>
  );
};
