import { Title } from "@/shared/ui/title/title";
import { FC, HTMLAttributes } from "react";
import { PositionListLayout } from "./layout/positionListLayout";
import { List } from "./list/positionList";

interface PositionListModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PositionListModule: FC<PositionListModuleProps> = (props) => {
  return (
    <PositionListLayout
      TitleSlot={<Title>Open Positions</Title>}
      PositionListSlot={<List />}
    />
  );
};
