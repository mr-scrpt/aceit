export const TAG_SIZE = {
  // S: "s",
  // M: "m",
  L: "l",
  // XL: "xl",
} as const;

export type TagSizeType = keyof typeof TAG_SIZE;
