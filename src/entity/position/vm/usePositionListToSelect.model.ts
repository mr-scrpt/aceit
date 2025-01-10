import { DefaultSelectOption } from "@/shared/type/select.type";
import { POSITION_LIST } from "../model/position.model";

export const usePositionListToSelectModel = () => {
  const positionNameListToSelect: DefaultSelectOption[] = POSITION_LIST.map(
    (p) => ({
      value: p.id.toString(),
      label: p.position,
    }),
  );

  return {
    positionNameListToSelect,
  };
};
