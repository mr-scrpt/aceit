import { FC, HTMLAttributes } from "react";
import sTitle from "./style/title.module.scss";
import clsx from "clsx";
import { TITLE_TO_CLASS } from "./style/title.map";
import { TitleSizeType } from "./domain/size.type";

interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  size?: TitleSizeType;
}

export const Title: FC<TitleProps> = (props) => {
  const { className, size = "L", ...rest } = props;

  const clsTitle = clsx(sTitle.title, [className], {
    [TITLE_TO_CLASS.size[size]]: true,
  });
  return (
    <div className={clsTitle}>
      <div className={sTitle.inner}>
        <span className={sTitle.text}>{props.children}</span>
      </div>
    </div>
  );
};
