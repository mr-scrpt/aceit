import { HTMLAttributes, ReactNode } from "react";

import { forwardRef } from "react";
// import { Icon } from "@/shared/component/Icon";

import clsx from "clsx";
import { ButtonShapeType } from "./domain/shape.type";
import { ButtonSizeType } from "./domain/size.type";
import { ButtonViewType } from "./domain/view.type";
import { BUTTON_TO_CLASS } from "./style/button.map";
import cls from "./style/button.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  classButton?: string;
  classIcon?: string;
  classImg?: string;
  view?: ButtonViewType;
  size?: ButtonSizeType;
  shape?: ButtonShapeType;
  IconSlotLeft?: (className: string) => ReactNode;
  IconSlotRight?: (className: string) => ReactNode;
  img?: string;
  alt?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      classIcon,
      classImg,
      children,
      view = "PRIMARY",
      size = "L",
      shape = "MAIN",
      IconSlotLeft,
      IconSlotRight,
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

    const clsIconButton = clsx(cls.icon, [classIcon]);
    const clsIconBoxButton = clsx(cls.icon, [classIcon]);

    return (
      <button
        type="button"
        className={clsButton}
        // disabled={disabled}
        ref={ref}
        {...rest}
      >
        {IconSlotLeft && IconSlotLeft(clsIconButton)}
        {children && <span className={clsText}>{children}</span>}
        {IconSlotRight && IconSlotRight(clsIconButton)}
      </button>
    );
  },
);
