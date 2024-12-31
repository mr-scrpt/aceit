import cls from "./style/button.module.scss";

export const CLASS_MAPS = {
  size: {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
    XL: cls.size_xl,
  },
  view: {
    PRIMARY: cls.view_primary,
    SECONDARY: cls.view_secondary,
    // TERTIARY: cls.view_tertiary,
    TRANSPARENT: cls.view_transparent,
    // TRANSPARENT_INVERTED: cls.view_transparent_inverted,
  },
  shape: {
    MAIN: cls.shape_main,
    NEXT: cls.shape_next,
    FLAT: cls.shape_flat,
  },
} as const;
