import { FC, HTMLAttributes } from "react";
import { AboutLayout } from "./layout/aboutLayout";
import { Text } from "./text/text";
import { Work } from "./work/work";
import { Snack } from "./snack/snack";
import { Sport } from "./sport/sport";
import { Office } from "./office/office";
import { Course } from "./course/course";

interface AboutModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutModule: FC<AboutModuleProps> = (props) => {
  return (
    <AboutLayout
      TextSlot={<Text />}
      PeopleSlot={<div>People</div>}
      WorkSlot={<Work />}
      SnackSlot={<Snack />}
      SportSlot={<Sport />}
      OfficeSlot={<Office />}
      CourseSlot={<Course />}
    />
  );
};
