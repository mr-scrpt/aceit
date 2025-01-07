import { FormControl } from "@/shared/ui/shadcn/form/form";
import Input from "@/shared/ui/shadcn/input/input";
import { FC, HTMLAttributes } from "react";

interface ContactFirstNameElementProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
}

export const ContactFirstNameElement: FC<ContactFirstNameElementProps> = (
  props,
) => {
  const { value, onChange } = props;

  return (
    <FormControl>
      <Input
        placeholder="First Name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};
