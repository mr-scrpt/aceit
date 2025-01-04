import cls from "./title.module.scss";

export const TITLE_TO_CLASS = {
  size: {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
    XL: cls.size_xl,
  },
} as const;
