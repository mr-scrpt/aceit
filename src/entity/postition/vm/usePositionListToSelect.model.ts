export const usePositionListToSelectModel = () => {
  const { positionList } = usePositionListByUserAndSettlementRefQuery(data);

  const positionListToSelect = buildPositionOptionsArray(positionList);

  const isAppearancePending = useAppearanceDelay(isPending);

  return {
    isAppearancePending,
    isSuccess,
    isFetchedAfterMount,
    positionListToSelect,
  };
};
