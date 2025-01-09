export const ICON_LIST = {
  ARROW_FLAT: "arrow_flat",
  ARROW_TILE: "arrow_tile",
  CALENDAR: "calendar",
  FILE_PLUS: "file_plus",
} as const;

export type IconListType = keyof typeof ICON_LIST;
