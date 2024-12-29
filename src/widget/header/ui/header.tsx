import { FC, HTMLAttributes } from "react";
import { Layout } from "./layout/layout";

interface Header extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<Header> = (props) => {
  return <Layout>HEADER</Layout>;
};
