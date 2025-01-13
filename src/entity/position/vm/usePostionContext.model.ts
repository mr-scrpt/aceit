import { createStrictContext, useStrictContext } from "@/shared/lib/react";
import { PositionType } from "../domain/position.type";

interface PositionContextValue {
  position: PositionType;
}

const PositionContext = createStrictContext<PositionContextValue>();

export const PositionProvider = PositionContext.Provider;

export const usePositionContext = () => {
  return useStrictContext(PositionContext);
};
