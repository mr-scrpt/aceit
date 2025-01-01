export const BOX_SIZE = {
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
} as const;

export type BoxSizeType = keyof typeof BOX_SIZE;
