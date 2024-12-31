import { HTMLAttributes } from "react";

import { forwardRef } from "react";
// import { Icon } from "@/shared/component/Icon";

import clsx from "clsx";
import { CLASS_MAPS } from "./class.map";
import cls from "./style/button.module.scss";
import { ButtonIconPositionEnum } from "./type/buttonIconPosition.enum";
import { ButtonShapeType } from "./type/shape.enum";
import { ButtonSizeType } from "./type/size.enum";
import { ButtonViewType } from "./type/view.enum";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  classButton?: string;
  classIcon?: string;
  classImg?: string;
  view?: ButtonViewType;
  size?: ButtonSizeType;
  shape?: ButtonShapeType;
  // icon?: IconEnum;
  iconPosition?: ButtonIconPositionEnum;
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
      // icon,
      img,
      alt,
      iconPosition = ButtonIconPositionEnum.LEFT,
      // disabled,
      ...rest
    } = props;

    const clsButton = clsx(cls.button, [className], {
      [CLASS_MAPS.size[size]]: true,
      [CLASS_MAPS.shape[shape]]: true,
      [CLASS_MAPS.view[view]]: true,
    });

    const clsText = clsx(cls.text);

    // const clsIconButton = clsx(cls.icon, [classIcon]);
    const clsImgButton = clsx(cls.img, [classImg]);

    return (
      <button
        type="button"
        className={clsButton}
        // disabled={disabled}
        ref={ref}
        {...rest}
      >
        {/* TODO: Maybe slot?  */}
        {/* {icon && iconPosition === ButtonIconPositionEnum.LEFT && ( */}
        {/*   <Icon className={clsIconButton} icon={icon} /> */}
        {/* )} */}
        {img && <img className={clsImgButton} src={img} alt={alt} />}
        {children && <span className={clsText}>{children}</span>}
        {/* {icon && iconPosition === ButtonIconPositionEnum.RIGHT && ( */}
        {/*   <Icon className={clsIconButton} icon={icon} /> */}
        {/* )} */}
      </button>
    );
  },
);
