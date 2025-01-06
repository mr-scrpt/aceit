import { Title } from "@/shared/ui/title/title";
import { FC, HTMLAttributes } from "react";
import { PositionListLayout } from "./layout/positionListLayout";
import sPositionLayout from "./layout/positionListLayout.module.scss";
import { List } from "./list/list";

interface PositionListProps extends HTMLAttributes<HTMLDivElement> {}

export const PositionList: FC<PositionListProps> = (props) => {
  return (
    <PositionListLayout
      TitleSlot={
        <Title className={sPositionLayout.title}>Open Positions</Title>
      }
      PositionListSlot={<List />}
    />
  );
};
