export const BUTTON_SHAPE = {
  MAIN: "shape_main",
  NEXT: "shape_next",
  FLAT: "shape_flat",
} as const;

export type ButtonShapeType = keyof typeof BUTTON_SHAPE;
