import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import sParagraph from "./style/paragraph.module.scss";

interface ParagraphProps extends HTMLAttributes<HTMLDivElement> {}

export const Paragraph: FC<ParagraphProps> = (props) => {
  const { className, children } = props;
  return (
    <p className={clsx(sParagraph.paragraph, [className])}>
      <span className={sParagraph.text}>{children}</span>
    </p>
  );
};
