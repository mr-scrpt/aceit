import { FormControl } from "@/shared/ui/shadcn/form/form";
import Input from "@/shared/ui/shadcn/input/input";
import { FC, HTMLAttributes } from "react";

interface ContactEmailElementProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const ContactEmailElement: FC<ContactEmailElementProps> = (props) => {
  const { value, onChange, className } = props;

  return (
    <FormControl>
      <Input
        className={className}
        placeholder="Email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};
