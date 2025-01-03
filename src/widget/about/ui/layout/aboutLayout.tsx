import { FC, HTMLAttributes } from "react";
import sHeaderLayout from "./aboutLayout.module.scss";
import { sLayout, sPage } from "@/shared/style";
import clsx from "clsx";
import { Text } from "../text/text";

interface AboutLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutLayout: FC<AboutLayoutProps> = (props) => {
  return (
    <div className={sLayout.wrapper}>
      <div className={sHeaderLayout.inner}>
        <div className={sHeaderLayout.row}>
          <div className={clsx(sHeaderLayout.text, sPage.card)}>
            <Text />
          </div>
          <div className={clsx(sHeaderLayout.people, sPage.card)}>People</div>
        </div>
        <div className={sHeaderLayout.row}>
          <div className={clsx(sHeaderLayout.work, sPage.card)}>Work</div>
          <div className={clsx(sHeaderLayout.snack, sPage.card)}>Snack</div>
          <div className={clsx(sHeaderLayout.sport, sPage.card)}>Sport</div>
        </div>
        <div className={sHeaderLayout.row}>
          <div className={clsx(sHeaderLayout.office, sPage.card)}>Office</div>
          <div className={clsx(sHeaderLayout.course, sPage.card)}>Course</div>
        </div>
      </div>
    </div>
  );
};
