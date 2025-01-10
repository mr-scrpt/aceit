"use client";
import { Title } from "@/shared/ui/title/title";
import { FC, HTMLAttributes } from "react";
import { PositionListLayout } from "./layout/positionListLayout";
import { List } from "./list/positionList";
import { MENU_DATA } from "@/shared/ui/menu/model/menu.data";

interface PositionListModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const PositionListModule: FC<PositionListModuleProps> = (props) => {
  return (
    <PositionListLayout
      TitleSlot={<Title>Open Positions</Title>}
      PositionListSlot={<List />}
      anchor={MENU_DATA.jobs.href}
    />
  );
};
