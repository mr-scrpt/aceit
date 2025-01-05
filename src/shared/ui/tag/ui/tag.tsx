import { FC, HTMLAttributes } from "react";
import { TagSizeType } from "../domain/size.type";
import clsx from "clsx";
import cls from "./style/tag.module.scss";
import { TAG_TO_CLASS } from "./style/tag.map";

interface tagProps extends HTMLAttributes<HTMLDivElement> {
  size?: TagSizeType;
}

export const Tag: FC<tagProps> = (props) => {
  const { size = "L", children, className, ...rest } = props;
  const clsTag = clsx(cls.tag, [className], {
    [TAG_TO_CLASS.size[size]]: true,
  });
  return (
    <div className={clsTag}>
      <span className={cls.text}>{children}</span>
    </div>
  );
};
