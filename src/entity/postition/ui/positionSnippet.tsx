import { FC, HTMLAttributes } from "react";
import sPositionSnippet from "./style/positionSnippet.module.scss";
import { Title } from "@/shared/ui/title/title";
import { Tag } from "@/shared/ui/tag";

interface PositionSnippetProps extends HTMLAttributes<HTMLDivElement> {
  data: PositionType;
}

export const PositionSnippet: FC<PositionSnippetProps> = (props) => {
  const { data } = props;
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
  return (
    <div className={sPositionSnippet.positionSnippet}>
      <div className={sPositionSnippet.inner}>
        <Title size="M">{position}</Title>
        <div className={sPositionSnippet.tagBox}>
          {employmentType.map((e) => (
            <Tag key={e}>{e}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};
