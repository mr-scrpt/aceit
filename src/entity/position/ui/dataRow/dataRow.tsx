import { contentSeparator } from "@/shared/lib/contentSeparate";
import { IconListType } from "@/shared/ui/icon/domain/icon.type";
import { IconBox } from "@/shared/ui/icon/ui/iconBox";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sEmploymentType from "./employmentType.module.scss";

interface DataRowProps extends HTMLAttributes<HTMLDivElement> {
  contentData: Array<string>;
  iconName: IconListType;
  separator: string;
}

export const DataRow: FC<DataRowProps> = (props) => {
  const { className, iconName, contentData, separator } = props;
  const content = contentSeparator(contentData, separator);
  return (
    <div className={clsx(sEmploymentType.employmentType, [className])}>
      <span className={sEmploymentType.inner}>
        <IconBox iconName={iconName} className={sEmploymentType.iconBox} />
        <span className={sEmploymentType.text}>{content}</span>
      </span>
    </div>
  );
};
