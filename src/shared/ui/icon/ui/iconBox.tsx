import { FC, HTMLAttributes } from "react";
import { IconListType } from "../domain/icon.type";
import sIconBox from "../style/iconBox.module.scss";
import clsx from "clsx";
import { Icon } from "./icon";

interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  iconName: IconListType;
}

export const IconBox: FC<IconBoxProps> = (props) => {
  const { className, iconName } = props;
  return (
    <div className={clsx(sIconBox.iconBox, [className])}>
      <div className={sIconBox.inner}>
        <div className={sIconBox.box}>
          <Icon icon={iconName} className={sIconBox.icon} />
        </div>
      </div>
    </div>
  );
};
