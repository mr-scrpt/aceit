import { FC, HTMLAttributes } from "react";
import { AboutLayout } from "./layout/aboutLayout";
import { Text } from "./text/text";
import { Work } from "./work/work";
import { Snack } from "./snack/snack";

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

export const About: FC<AboutProps> = (props) => {
  return (
    <AboutLayout
      TextSlot={<Text />}
      WorkSlot={<Work />}
      SnackSlot={<Snack />}
    />
  );
};
