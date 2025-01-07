import { FormControl } from "@/shared/ui/shadcn/form/form";
import Input from "@/shared/ui/shadcn/input/input";
import { FC, HTMLAttributes } from "react";

interface ContactPhoneNumberElementProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const ContactPhoneNumberElement: FC<ContactPhoneNumberElementProps> = (
  props,
) => {
  const { value, onChange, className } = props;

  return (
    <FormControl>
      <Input
        className={className}
        placeholder="Phone"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};
