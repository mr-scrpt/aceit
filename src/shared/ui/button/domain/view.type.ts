export const BUTTON_VIEW = {
  PRIMARY: "primary",
  TRANSPARENT: "transparent",
  WITH_ICON: "with_icon",
} as const;

export type ButtonViewType = keyof typeof BUTTON_VIEW;
