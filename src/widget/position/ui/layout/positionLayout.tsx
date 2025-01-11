import { FC, HTMLAttributes } from "react";
import sPositionLayout from "./positionLayout.module.scss";
import { Position } from "@/entity/position";
import { ICON_LIST } from "@/shared/ui/icon/domain/icon.type";
import { DataRow } from "@/entity/position/ui/dataRow/dataRow";
import clsx from "clsx";
import { sDeco, sLayout, sPage } from "@/shared/style";
import { Title } from "@/shared/ui/title/title";
import { Button } from "@/shared/ui/button/button";

interface PositionLayoutProps extends HTMLAttributes<HTMLDivElement> {
  NavSlot?: React.ReactNode;
  position: PositionType;
}

export const PositionLayout: FC<PositionLayoutProps> = (props) => {
  const { NavSlot, position } = props;
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
            <Position.Title className={sPositionLayout.title}>
              Заголовок
            </Position.Title>
            <Position.DatePosted className={sPositionLayout.datePosted} />
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
            <Button className={sPositionLayout.button}>Apply Now</Button>
          </div>
        </div>
      </div>
    </Position>
  );
};
