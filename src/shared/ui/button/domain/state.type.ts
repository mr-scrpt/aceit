export const BUTTON_STATE = {
  DISABLED: "disabled",
} as const;

export type ButtonStateType = keyof typeof BUTTON_STATE;
