export const BUTTON_VIEW = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  // TERTIARY: "tertiary",
  TRANSPARENT: "transparent",
  // TRANSPARENT_INVERTED: "transparent_inverted",
} as const;

export type ButtonViewType = keyof typeof BUTTON_VIEW;
