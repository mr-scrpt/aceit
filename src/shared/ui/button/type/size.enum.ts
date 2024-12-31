export const BUTTON_SIZE = {
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
} as const;

export type ButtonSizeType = keyof typeof BUTTON_SIZE;
