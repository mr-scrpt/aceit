import { FC, HTMLAttributes } from "react";
import sPositionSnippet from "./style/positionSnippet.module.scss";
import { Title } from "@/shared/ui/title/title";
import { Tag } from "@/shared/ui/tag";
import { ButtonWithIconBox } from "@/shared/ui/button/buttonWithIconBox";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { Date } from "@/shared/ui/date/ui/date";
import clsx from "clsx";

interface PositionSnippetProps extends HTMLAttributes<HTMLDivElement> {
  data: PositionType;
}

export const PositionSnippet: FC<PositionSnippetProps> = (props) => {
  const { data, className } = props;
  const {
    id,
    position,
    postingDate,
    about,
    responsibilities,
    requirements,
    employmentType,
    location,
    level,
  } = data;

  const clsPositionSnippet = clsx(sPositionSnippet.positionSnippet, [
    className,
  ]);
  return (
    <div className={clsPositionSnippet}>
      <div className={sPositionSnippet.inner}>
        <Title size="M">{position}</Title>
        <div className={sPositionSnippet.tagBox}>
          {employmentType.map((e) => (
            <Tag key={e}>{e}</Tag>
          ))}
          {level.map((l) => (
            <Tag key={l}>{l}</Tag>
          ))}
        </div>
        <div className={sPositionSnippet.line}>
          <Date>{postingDate}</Date>
          <ButtonWithIconBox
            view="WITH_ICON"
            size="M"
            shape="MAIN"
            IconSlot={(clsIcon) => (
              <Icon icon="ARROW_TILE" className={clsIcon} />
            )}
          >
            Learn more
          </ButtonWithIconBox>
        </div>
      </div>
    </div>
  );
};
