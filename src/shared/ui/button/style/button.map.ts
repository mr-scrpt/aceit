import cls from "../style/button.module.scss";

export const BUTTON_TO_CLASS = {
  size: {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
    XL: cls.size_xl,
  },
  view: {
    PRIMARY: cls.view_primary,
    TRANSPARENT: cls.view_transparent,
    WITH_ICON: cls.view_with_icon,
  },
  shape: {
    MAIN: cls.shape_main,
    ROUNDY: cls.shape_roundy,
    FLAT: cls.shape_flat,
  },
} as const;
