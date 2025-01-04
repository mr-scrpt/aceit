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
      <div className={sAboutLayout.inner}>
        <div className={sAboutLayout.row}>
          <div className={clsx(sAboutLayout.text, sPage.card)}>{TextSlot}</div>
          <div
            className={clsx(
              sPage.card,
              sAboutLayout.people,
              sDeco.sectionGradientBorder,
            )}
          >
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
            )}
          >
            {SportSlot}
          </div>
        </div>
        <div className={sAboutLayout.row}>
          <div
            className={clsx(
              sAboutLayout.office,
              sPage.card,
              sDeco.sectionGradientPrimary,
              sDeco.sectionGradientBorder,
            )}
          >
            Office
          </div>
          <div
            className={clsx(
              sAboutLayout.course,
              sPage.card,
              sDeco.sectionGradientPrimary,
              sDeco.sectionGradientBorder,
            )}
          >
            {CourseSlot}
          </div>
        </div>
      </div>
    </div>
  );
};
