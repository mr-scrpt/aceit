import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import sCourse from "./course.module.scss";
import { Title } from "@/shared/ui/title/title";
import Image from "next/image";
import CurseImg from "./img/img_course.png";
import { sDeco } from "@/shared/style";

interface CourseProps extends HTMLAttributes<HTMLDivElement> {}

export const Course: FC<CourseProps> = (props) => {
  return (
    <div className={sCourse.work}>
      <div className={clsx(sCourse.inner)}>
        <Image src={CurseImg} alt="work" quality={100} />
        <Title
          size="L"
          className={clsx(sCourse.title, sDeco.textGradientGhosty)}
        >
          Courses refund
        </Title>
        <div className={clsx(sCourse.description, sDeco.textGhosty)}>
          We compensate for English language courses and support the
          professional development of our employees.
        </div>
      </div>
    </div>
  );
};
