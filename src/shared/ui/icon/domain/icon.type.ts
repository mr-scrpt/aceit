export const ICON_LIST = {
  ARROW_FLAT: "arrow_flat",
  ARRWO_TILE: "arrow_tile",
} as const;

export type IconListType = keyof typeof ICON_LIST;
