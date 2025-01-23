"use client";
import { Position, PositionType } from "@/entity/position";
import { sDeco, sLayout, sPage } from "@/shared/style";
import { Button } from "@/shared/ui/button/button";
import { Title } from "@/shared/ui/title/title";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sPositionLayout from "./positionLayout.module.scss";

interface PositionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  NavSlot?: React.ReactNode;
  position: PositionType;
  openContactSendModal?: () => void;
}

export const PositionLayout: FC<PositionLayoutProps> = (props) => {
  const { NavSlot, position, openContactSendModal } = props;
  return (
    <Position
      position={position}
      className={clsx(sPositionLayout.position, [sLayout.wrapper])}
    >
      <div className={sPositionLayout.inner}>
        <div className={sPositionLayout.nav}>{NavSlot}</div>
        <div
          className={clsx(sPositionLayout.main, [
            sPage.card,
            sDeco.sectionGradientBorder,
            sDeco.sectionPrimary,
          ])}
        >
          <div className={sPositionLayout.row}>
            <Position.Title className={sPositionLayout.title} />
            {/* <Position.DatePosted className={sPositionLayout.datePosted} /> */}
          </div>
          <div className={sPositionLayout.row}>
            <Title size="M" className={sPositionLayout.subtitle}>
              About The Job
            </Title>
            <Position.Description
              className={clsx(sPositionLayout.responsibilities, [
                sDeco.textSecondary,
              ])}
            />
          </div>

          <div className={sPositionLayout.row}>
            <Title size="M" className={sPositionLayout.subtitle}>
              Responsibilities
            </Title>
            <Position.Responsibilities
              className={clsx(sPositionLayout.responsibilities, [
                sDeco.textSecondary,
              ])}
            />
          </div>

          <div className={sPositionLayout.row}>
            <Title size="M" className={sPositionLayout.subtitle}>
              Requirements
            </Title>
            <Position.Requirements
              className={clsx(sPositionLayout.requirements, [
                sDeco.textSecondary,
              ])}
            />
          </div>
        </div>
        <div
          className={clsx(sPositionLayout.side, [
            sPage.card,
            sDeco.sectionGradientBorder,
            sDeco.sectionPrimary,
          ])}
        >
          <div className={sPositionLayout.row}>
            <Position.EmploymentType
              className={sPositionLayout.employmentType}
            />
            <Position.Location className={sPositionLayout.location} />
            <Position.Level className={sPositionLayout.level} />
          </div>
          <div className={sPositionLayout.row}>
            <Button
              className={sPositionLayout.button}
              onClick={openContactSendModal}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </Position>
  );
};
