import { FC, HTMLAttributes } from "react";

interface PeopleProps extends HTMLAttributes<HTMLDivElement> {}

export const People: FC<PeopleProps> = (props) => {
  return <div>People</div>;
};
