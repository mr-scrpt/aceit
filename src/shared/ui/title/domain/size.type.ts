export const TITLE_SIZE = {
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
} as const;

export type TitleSizeType = keyof typeof TITLE_SIZE;
