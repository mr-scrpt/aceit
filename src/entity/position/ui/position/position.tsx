import { FC, HTMLAttributes } from "react";
import { Date } from "@/shared/ui/date/ui/date";

import clsx from "clsx";
import {
  PositionProvider,
  usePositionContext,
} from "../vm/usePostionContext.model";
import sPosition from "./position.module.scss";
import { Title } from "@/shared/ui/title/title";
import { Tag } from "@/shared/ui/tag";
import { Paragraph } from "@/shared/ui/paragraph/ui/paragraph";
import { List } from "@/shared/ui/list/ui/list";
import { DataRow } from "../dataRow/dataRow";

interface PositionProps extends HTMLAttributes<HTMLDivElement> {
  position: PositionType;
}
type PositionComponent = FC<PositionProps> & {
  Title: FC<PositionTitleProps>;
  DatePosted: FC<PositionDatePostedProps>;
  Description: FC<PositionDescriptionProps>;
  Responsibilities: FC<PositionResponsibilitiesProps>;
  Requirements: FC<PositionRequirementsProps>;
  EmploymentType: FC<PositionEmploymentTypeProps>;
  Location: FC<PositionLocationProps>;
  Level: FC<PositionLevelProps>;
  TagList: FC<PositionTagListProps>;
};

export const Position: PositionComponent = (props) => {
  const { className, children, position } = props;
  return (
    <PositionProvider value={{ position }}>
      <div className={clsx(sPosition.position, [className])}>{children}</div>
    </PositionProvider>
  );
};

// NOTE: Title
interface PositionTitleProps extends HTMLAttributes<HTMLDivElement> {}

Position.Title = function PositionTitle(props: PositionTitleProps) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <Title className={clsx(sPosition.title, [className])}>
      {position.position}
    </Title>
  );
};

// NOTE: Date Posted
interface PositionDatePostedProps extends HTMLAttributes<HTMLDivElement> {}

Position.DatePosted = function PositionDatePosted(
  props: PositionDatePostedProps,
) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <Date className={clsx(sPosition.title, [className])}>
      {position.datePosted}
    </Date>
  );
};

// NOTE: Description
interface PositionDescriptionProps extends HTMLAttributes<HTMLDivElement> {}

Position.Description = function PositonDescription(
  props: PositionDescriptionProps,
) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <Paragraph className={clsx(sPosition.title, [className])}>
      {position.about}
    </Paragraph>
  );
};

// NOTE: Responsibilities
interface PositionResponsibilitiesProps
  extends HTMLAttributes<HTMLDivElement> {}

Position.Responsibilities = function PositionResponsibilities(
  props: PositionResponsibilitiesProps,
) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <List
      className={clsx(sPosition.title, [className])}
      listData={position.responsibilities}
    />
  );
};

// NOTE: Requirements
interface PositionRequirementsProps extends HTMLAttributes<HTMLDivElement> {}

Position.Requirements = function PositionRequirements(
  props: PositionRequirementsProps,
) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <List
      className={clsx(sPosition.list, [className])}
      listData={position.requirements}
    />
  );
};

// NOTE: Employment Type
interface PositionEmploymentTypeProps extends HTMLAttributes<HTMLDivElement> {}

Position.EmploymentType = function PositionEmploymentType(
  props: PositionEmploymentTypeProps,
) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <DataRow
      contentData={position.employmentType}
      className={clsx(sPosition.dataRow, [className])}
      iconName="CLOCK"
      separator="/"
    />
  );
};

// NOTE: Location
interface PositionLocationProps extends HTMLAttributes<HTMLDivElement> {}

Position.Location = function PositionLocation(props: PositionLocationProps) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <DataRow
      contentData={position.location}
      className={clsx(sPosition.dataRow, [className])}
      iconName="LOCATION"
      separator="/"
    />
  );
};

// NOTE: Level
interface PositionLevelProps extends HTMLAttributes<HTMLDivElement> {}

Position.Level = function PositionLevel(props: PositionLevelProps) {
  const { className } = props;
  const { position } = usePositionContext();
  return (
    <DataRow
      contentData={position.level}
      className={clsx(sPosition.dataRow, [className])}
      iconName="PROFILE"
      separator=","
    />
  );
};

// NOTE: Tag List
interface PositionTagListProps extends HTMLAttributes<HTMLDivElement> {}

Position.TagList = function PositionTagList(props: PositionTagListProps) {
  const { className } = props;
  const { position } = usePositionContext();
  const tagList = position.employmentType.concat(position.level);
  return (
    <div className={clsx(sPosition.title, [className])}>
      {tagList.map((e) => (
        <Tag key={e}>{e}</Tag>
      ))}
    </div>
  );
};
