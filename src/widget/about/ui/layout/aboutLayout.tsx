import { FC, HTMLAttributes } from "react";
import sHeaderLayout from "./aboutLayout.module.scss";
import { sLayout } from "@/shared/style";

interface AboutLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutLayout: FC<AboutLayoutProps> = (props) => {
  return (
    <div className={sLayout.wrapper}>
      <div className={sHeaderLayout.inner}>
        <div className={sHeaderLayout.row}>
          <div className={sHeaderLayout.text}>Text</div>
          <div className={sHeaderLayout.people}>People</div>
        </div>
        <div className={sHeaderLayout.row}>
          <div className={sHeaderLayout.work}>Work</div>
          <div className={sHeaderLayout.snack}>Snack</div>
          <div className={sHeaderLayout.sport}>Sport</div>
        </div>
        <div className={sHeaderLayout.row}>
          <div className={sHeaderLayout.office}>Office</div>
          <div className={sHeaderLayout.course}>Course</div>
        </div>
      </div>
    </div>
  );
};
