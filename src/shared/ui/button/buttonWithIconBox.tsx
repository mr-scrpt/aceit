import { HTMLAttributes, ReactNode } from "react";

import { forwardRef } from "react";
// import { Icon } from "@/shared/component/Icon";

import clsx from "clsx";
import { ButtonShapeType } from "./domain/shape.type";
import { ButtonSizeType } from "./domain/size.type";
import { ButtonViewType } from "./domain/view.type";
import { BUTTON_TO_CLASS } from "./style/button.map";
import cls from "./style/button.module.scss";

interface ButtonWithIconBoxProps extends HTMLAttributes<HTMLButtonElement> {
  classButton?: string;
  classIcon?: string;
  classIconBox?: string;
  view?: ButtonViewType;
  size?: ButtonSizeType;
  shape?: ButtonShapeType;
  IconSlot: (iconCls: string) => ReactNode;
  img?: string;
  alt?: string;
}

export const ButtonWithIconBox = forwardRef<
  HTMLButtonElement,
  ButtonWithIconBoxProps
>((props, ref) => {
  const {
    className,
    classIcon,
    classIconBox,
    children,
    view = "PRIMARY",
    size = "L",
    shape = "MAIN",
    IconSlot,
    img,
    alt,
    ...rest
  } = props;

  const clsButton = clsx(cls.button, [className], {
    [BUTTON_TO_CLASS.size[size]]: true,
    [BUTTON_TO_CLASS.shape[shape]]: true,
    [BUTTON_TO_CLASS.view[view]]: true,
  });

  const clsText = clsx(cls.text);

  const clsIconBoxButton = clsx(cls.icon_box, [classIconBox]);
  const clsIconButton = clsx(cls.icon, [classIcon]);

  return (
    <button type="button" className={clsButton} ref={ref} {...rest}>
      <span className={clsIconBoxButton}>{IconSlot(clsIconButton)}</span>
      {children && <span className={clsText}>{children}</span>}
    </button>
  );
});
