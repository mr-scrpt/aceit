import { FC, HTMLAttributes } from "react";
import { ContactLayout } from "./layout/contactLayout";
import { Presentation } from "./presentation/presentation";

interface ContactModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactModule: FC<ContactModuleProps> = (props) => {
  return (
    <ContactLayout
      FormSlot={<div>Form</div>}
      PresentationSlot={<Presentation />}
    />
  );
};
