import { FC, HTMLAttributes, ReactNode } from "react";
import sAboutLayout from "./aboutLayout.module.scss";
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
  anchor?: string;
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
    anchor,
  } = props;
  return (
    <section className={sLayout.wrapper} id={anchor}>
      <div className={sAboutLayout.inner}>
        <div className={sAboutLayout.row}>
          <div className={clsx(sAboutLayout.text, sPage.card)}>{TextSlot}</div>
          <div
            className={clsx(
              sPage.card,
              sAboutLayout.people,
              sDeco.sectionGradientBorder,
              sDeco.sectionBorder,
            )}
          >
            {PeopleSlot}
            <div className={sDeco.sectionGradientLeftBottom}></div>
            <div className={sDeco.sectionGradientRightTop}></div>
          </div>
        </div>
        <div className={sAboutLayout.row}>
          <div
            className={clsx(
              sAboutLayout.work,
              sPage.card,
              sDeco.sectionGradientPrimary,
              sDeco.sectionGradientBorder,
              sDeco.sectionBorder,
            )}
          >
            {WorkSlot}
          </div>
          <div
            className={clsx(
              sAboutLayout.snack,
              sPage.card,
              sDeco.sectionGradientFillAndSpot,
              sDeco.sectionGradientBorder,
              sDeco.sectionBorder,
            )}
          >
            {SnackSlot}
          </div>
          <div
            className={clsx(
              sAboutLayout.sport,
              sPage.card,
              sDeco.sectionGradientPrimary,
              sDeco.sectionGradientBorder,
              sDeco.sectionBorder,
            )}
          >
            {SportSlot}
            <div className={sDeco.sectionBackgroundImgCircleRightTop}></div>
            <div className={sDeco.sectionBackgroundImgBallRightTop}></div>
            <div className={sDeco.sectionBackgroundImgBallRightMiddle}></div>
            <div className={sDeco.sectionBackgroundImgBallLeftMiddle}></div>
          </div>
        </div>
        <div className={sAboutLayout.row}>
          <div
            className={clsx(
              sAboutLayout.office,
              sPage.card,
              sDeco.sectionGradientPrimary,
              sDeco.sectionGradientBorder,
              sDeco.sectionBorder,
            )}
          >
            {OfficeSlot}
          </div>
          <div
            className={clsx(
              sAboutLayout.course,
              sPage.card,
              sDeco.sectionGradientPrimary,
              sDeco.sectionGradientBorder,
              sDeco.sectionBorder,
            )}
          >
            {CourseSlot}
          </div>
        </div>
      </div>
    </section>
  );
};
