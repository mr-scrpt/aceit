import { FC, HTMLAttributes } from "react";
import sList from "./style/list.module.scss";
import clsx from "clsx";

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  listData: string[];
}

export const List: FC<ListProps> = (props) => {
  const { className, listData } = props;
  return (
    <div className={clsx(sList.list, [className])}>
      <ul className={clsx(sList.inner)}>
        {listData.map((el) => (
          <li key={el} className={sList.item}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
