import { FC, HTMLAttributes, ReactNode } from "react";
import sHeaderLayout from "./aboutLayout.module.scss";
import { sDeco, sLayout, sPage } from "@/shared/style";
import clsx from "clsx";
import { Text } from "../text/text";

interface AboutLayoutProps extends HTMLAttributes<HTMLDivElement> {
  TextSlot: ReactNode;
  PeopleSlot: ReactNode;
  WorkSlot: ReactNode;
  SnackSlot: ReactNode;
  SportSlot: ReactNode;
  OfficeSlot: ReactNode;
  CourseSlot: ReactNode;
}

export const AboutLayout: FC<AboutLayoutProps> = (props) => {
  const {
    TextSlot,
    PeopleSlot,
    WorkSlot,
    SnackSlot,
    SportSlot,
    OfficeSlot,
    CourseSlot,
  } = props;
  return (
    <div className={sLayout.wrapper}>
      <div className={sHeaderLayout.inner}>
        <div className={sHeaderLayout.row}>
          <div className={clsx(sHeaderLayout.text, sPage.card)}>{TextSlot}</div>
          {/* <div className={clsx(sHeaderLayout.people, sPage.card)}> */}
          {/*   {PeopleSlot} */}
          {/* </div> */}
          <div className={clsx(sPage.card, sHeaderLayout.people)}>
            <div className={sDeco.sectionGradientLeftBottom}></div>
            <div className={sDeco.sectionGradientRightTop}></div>
          </div>
        </div>
        <div className={sHeaderLayout.row}>
          <div
            className={clsx(
              sHeaderLayout.work,
              sPage.card,
              sDeco.sectionGradientPrimary,
            )}
          >
            {WorkSlot}
          </div>
          <div className={clsx(sHeaderLayout.snack, sPage.card)}>
            {SnackSlot}
          </div>
          <div className={clsx(sHeaderLayout.sport, sPage.card)}>
            {SportSlot}
          </div>
        </div>
        <div className={sHeaderLayout.row}>
          <div className={clsx(sHeaderLayout.office, sPage.card)}>Office</div>
          <div className={clsx(sHeaderLayout.course, sPage.card)}>
            {CourseSlot}
          </div>
        </div>
      </div>
    </div>
  );
};
