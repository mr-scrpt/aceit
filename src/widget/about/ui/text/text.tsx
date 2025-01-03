import { FC, HTMLAttributes } from "react";
import sText from "./text.module.scss";
import { sDeco } from "@/shared/style";
import clsx from "clsx";

interface TextProps extends HTMLAttributes<HTMLDivElement> {}

export const Text: FC<TextProps> = (props) => {
  return (
    <div className={sText.text}>
      <div className={sText.inner}>
        <div className={sText.subtitle}>About us</div>
        <div className={sText.title}>Get to know us better</div>
        <div className={clsx(sText.description, sDeco.textGhosty)}>
          We are young, dynamic IT company providing smart solutions. Your ideas
          turn into success cases
        </div>
      </div>
    </div>
  );
};
