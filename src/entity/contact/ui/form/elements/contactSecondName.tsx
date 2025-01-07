import { FormControl } from "@/shared/ui/shadcn/form/form";
import Input from "@/shared/ui/shadcn/input/input";
import { FC, HTMLAttributes } from "react";

interface ContactSecondNameElementProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const ContactSecondNameElement: FC<ContactSecondNameElementProps> = (
  props,
) => {
  const { value, onChange, className } = props;

  return (
    <FormControl>
      <Input
        className={className}
        placeholder="Second Name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};
