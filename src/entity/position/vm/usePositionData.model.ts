import { POSITION_LIST } from "../model/position.model";

export const usePositonData = (positonId: string) => {
  return POSITION_LIST.find((p) => p.id.toString() === positonId);
};
