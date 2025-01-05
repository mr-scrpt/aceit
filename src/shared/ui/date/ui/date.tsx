import { FC, HTMLAttributes } from "react";
import { Icon } from "../../icon/ui/icon";
import sDate from "./style/date.module.scss";

interface DateProps extends HTMLAttributes<HTMLDivElement> {}

export const Date: FC<DateProps> = (props) => {
  const { children } = props;
  return (
    <div className={sDate.date}>
      <div className={sDate.inner}>
        <Icon icon="CALENDAR" className={sDate.icon} />
        <span className={sDate.text}>{children}</span>
      </div>
    </div>
  );
};
