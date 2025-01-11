"use client";
import { FC, HTMLAttributes } from "react";
import { PositionLayout } from "./layout/positionLayout";
import { usePositonData } from "@/entity/position";
import { NavToMain } from "./nav/navToMain";

interface PositionModuleProps extends HTMLAttributes<HTMLDivElement> {
  positionId: string;
}

export const PositionModule: FC<PositionModuleProps> = (props) => {
  const { positionId } = props;
  const position = usePositonData(positionId);
  if (!position) return null;
  return <PositionLayout NavSlot={<NavToMain />} position={position} />;
};
