export const BUTTON_ICON_POSITION = {
  LEFT: "left",
  RIGHT: "right",
} as const;

export type ButtonIconPositionType = keyof typeof BUTTON_ICON_POSITION;
