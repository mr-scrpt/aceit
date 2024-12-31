import { memo } from "react";
import { HTMLAttributes } from "react";

import cls from "./style/icon.module.scss";
import clsx from "clsx";
import { ICON_TO_CLASS } from "./style/icon.map";
import { IconListType } from "./domain/icon.type";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: IconListType;
  classIcon?: string;
}

export const Icon = memo((props: IconProps) => {
  const { className, icon, ...etc } = props;

  const clsIcon = clsx(cls.icon, [className], {
    [ICON_TO_CLASS[icon]]: true,
    // [cls.icon_theme]: icon === IconEnum.THEME,
    // [cls.icon_eye]: icon === IconEnum.EYE,
    // [cls.icon_calendar]: icon === IconEnum.CALENDAR,
    // [cls.icon_notify]: icon === IconEnum.NOTIFY,
    // [cls.icon_star]: icon === IconEnum.STAR,
    // [cls.icon_star_selected]: icon === IconEnum.STAR_SELECTED,
    //
    // [cls.icon_burger]: icon === IconEnum.BURGER,
    //
    // [cls.icon_menu]:
    //   icon === IconEnum.MENU_HOME ||
    //   icon === IconEnum.MENU_ABOUT ||
    //   icon === IconEnum.MENU_ARTICLE_FEED ||
    //   icon === IconEnum.MENU_PROFILE,
    // [cls.icon_menu_home]: icon === IconEnum.MENU_HOME,
    // [cls.icon_menu_about]: icon === IconEnum.MENU_ABOUT,
    // [cls.icon_menu_profile]: icon === IconEnum.MENU_PROFILE,
    // [cls.icon_menu_feed]: icon === IconEnum.MENU_ARTICLE_FEED,
    // [cls.icon_view_row]: icon === IconEnum.VIEW_ROW,
    // [cls.icon_view_tile]: icon === IconEnum.VIEW_TILE,
  });

  return <span className={clsIcon} {...etc} />;
});
