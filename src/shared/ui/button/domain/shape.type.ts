export const BUTTON_SHAPE = {
  MAIN: "shape_main",
  ROUNDY: "shape_roundy",
  FLAT: "shape_flat",
} as const;

export type ButtonShapeType = keyof typeof BUTTON_SHAPE;
