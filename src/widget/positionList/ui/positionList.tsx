import { Title } from "@/shared/ui/title/title";
import { FC, HTMLAttributes } from "react";
import { PositionLayout } from "./layout/positionLayout";
import sPositionLayout from "./layout/positionLayout.module.scss";
import { List } from "./list/list";

interface PositionListProps extends HTMLAttributes<HTMLDivElement> {}

export const PositionList: FC<PositionListProps> = (props) => {
  return (
    <PositionLayout
      TitleSlot={
        <Title className={sPositionLayout.title}>Open Positions</Title>
      }
      PositionListSlot={<List />}
    />
  );
};
