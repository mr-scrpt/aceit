import { FC, HTMLAttributes } from "react";
import { AboutLayout } from "./layout/aboutLayout";

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

export const About: FC<AboutProps> = (props) => {
  return <AboutLayout />;
};
