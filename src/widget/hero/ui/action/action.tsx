import { FC, HTMLAttributes } from "react";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  return <div>Action</div>;
};
