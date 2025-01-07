import { FC, HTMLAttributes } from "react";

// import { usePositionListByUserAndSettlementRefToSelectModel } from "@/entities/position/_vm/usePositionListByUserAndSettlementRefToSelect.model";
import { SelectElement } from "@/shared/ui/selectElement/selectElement";
import { PositionDefaultSelectOption } from "../../../domain/position.schema";
// import { Spinner } from "@/shared/ui/icons/spinner";

export interface PositionSelectProps extends HTMLAttributes<HTMLDivElement> {
  userId: string;
  settlementRef?: string;
  positionActive?: PositionDefaultSelectOption;
  onSelectPosition: (positionList: Array<PositionDefaultSelectOption>) => void;
}
export const PositionSelectElement: FC<PositionSelectProps> = (props) => {
  const { positionActive, userId, settlementRef, onSelectPosition } = props;

  const {
    positionListToSelect,
    isAppearancePending,
    isSuccess,
    isFetchedAfterMount,
  } = usePositionListByUserAndSettlementRefToSelectModel({
    userId,
    settlementRef,
  });

  const placeholder = isAppearancePending ? "Loading..." : "Select position";

  // if (!isFetchedAfterMount || isAppearancePending || !isSuccess) {
  //   return <Spinner />;
  // }

  return (
    <SelectElement
      optionActive={positionActive}
      onSelect={onSelectPosition}
      optionList={positionListToSelect}
      placeholder={placeholder}
    />
  );
};
