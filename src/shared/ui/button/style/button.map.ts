import cls from "../style/button.module.scss";

export const CLASS_MAPS = {
  size: {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
    XL: cls.size_xl,
  },
  view: {
    PRIMARY: cls.view_primary,
    ICON: cls.view_icon,
    TRANSPARENT: cls.view_transparent,
  },
  shape: {
    MAIN: cls.shape_main,
    ROUNDY: cls.shape_roundy,
    FLAT: cls.shape_flat,
  },
} as const;
