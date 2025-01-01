import clsx from "clsx";
import { ComponentType, HTMLAttributes, memo } from "react";
import cls from "../style/icon.module.scss";
import { BoxSizeType } from "../style/size.type";
import { Icon, IconProps } from "./icon";
import { BOX_TO_CLASS } from "../style/iconBox.map";

interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  classBox?: string;
  classIcon?: string;
  size?: BoxSizeType;
}

export const withIconBox = <P extends IconProps>(
  WrappedIcon: ComponentType<P>,
) => {
  return memo((props: P & IconBoxProps) => {
    const { className, classBox, classIcon, size = "L", ...rest } = props;

    const clsWrapper = clsx(cls.box, [classBox], {
      [BOX_TO_CLASS.size[size]]: true,
    });

    const clsIconInner = clsx([classIcon]);

    return (
      <div className={clsWrapper}>
        <WrappedIcon className={clsIconInner} {...(rest as P)} />
      </div>
    );
  });
};

export const IconBox = withIconBox(Icon);
