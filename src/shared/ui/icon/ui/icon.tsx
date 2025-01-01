import { memo } from "react";
import { HTMLAttributes } from "react";

import cls from "../style/icon.module.scss";
import clsx from "clsx";
import { ICON_TO_CLASS } from "../style/icon.map";
import { IconListType } from "../domain/icon.type";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: IconListType;
  classIcon?: string;
}

export const Icon = memo((props: IconProps) => {
  const { className, icon, ...etc } = props;

  const clsIcon = clsx(cls.icon, [className], {
    [ICON_TO_CLASS[icon]]: true,
  });

  return <span className={clsIcon} {...etc} />;
});
