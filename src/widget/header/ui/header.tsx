import { FC, HTMLAttributes } from "react";
import { Layout } from "./layout/layout";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<HeaderProps> = (props) => {
  return <Layout>HEADER</Layout>;
};
