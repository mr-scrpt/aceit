import { FC, HTMLAttributes } from "react";

import { SelectElement } from "@/shared/ui/selectElement/selectElement";
import { PositionDefaultSelectOption } from "../../../domain/position.schema";
import { usePositionListToSelectModel } from "../../../vm/usePositionListToSelect.model";

export interface PositionSelectProps extends HTMLAttributes<HTMLDivElement> {
  positionActive?: PositionDefaultSelectOption;
  onSelectPosition: (positionList: Array<PositionDefaultSelectOption>) => void;
}
export const PositionSelectElement: FC<PositionSelectProps> = (props) => {
  const { positionActive, onSelectPosition } = props;
  const { positionNameListToSelect } = usePositionListToSelectModel();

  const placeholder = "Select position...";

  console.log("output_log: PositionActive =>>>", positionActive);
  return (
    <SelectElement
      optionActive={positionActive}
      onSelect={(item) => {
        console.log("output_log: SELECT =>>>", item);
        onSelectPosition(item);
      }}
      optionList={positionNameListToSelect}
      placeholder={placeholder}
    />
  );
};
