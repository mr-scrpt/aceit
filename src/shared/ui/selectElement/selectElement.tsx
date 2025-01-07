import { HTMLAttributes } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select/select";
import { FormControl } from "../shadcn/form/form";
import { DefaultSelectOption } from "@/shared/type/select.type";

interface SelectElementProps<
  T extends DefaultSelectOption = DefaultSelectOption,
> extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  onSelect: (items: Array<T>) => void;
  optionList: Array<T>;
  optionActive?: T | null;
  placeholder?: string;
}

export const SelectElement = <T extends DefaultSelectOption>(
  props: SelectElementProps<T>,
) => {
  const {
    optionActive,
    optionList,
    placeholder = "Select...",
    onSelect,
  } = props;
  const defaultValue = optionActive?.value || "";

  return (
    <Select
      defaultValue={defaultValue}
      value={defaultValue}
      onValueChange={(value) => {
        const selectedOption = optionList.find((item) => item.value === value);

        if (!selectedOption) return;

        onSelect([selectedOption]);
      }}
      disabled={!optionList.length}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {optionList.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
