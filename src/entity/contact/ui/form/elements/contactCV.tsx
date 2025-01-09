import { Button } from "@/shared/ui/button/button";
import { FormControl } from "@/shared/ui/shadcn/form/form";
import { FC, HTMLAttributes, useRef } from "react";

interface ContactCVElementProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: File | null;
  onChange: (file: File | null) => void;
  className?: string;
}

export const ContactCVElement: FC<ContactCVElementProps> = (props) => {
  const { value, onChange, className } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Можно добавить валидацию
      const isValidSize = file.size / 1024 / 1024 <= 5; // 5MB limit
      if (!isValidSize) {
        alert("File size should be less than 5MB");
        return;
      }
      onChange(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <FormControl>
      <div className="flex items-center gap-4">
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          accept="application/pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        <Button type="button" view="PRIMARY" onClick={handleClick}>
          Select Resume
        </Button>
        {value && (
          <div className="flex items-center gap-2">
            <span className="text-sm">{value.name}</span>
            <Button
              type="button"
              view="TRANSPARENT"
              onClick={() => onChange(null)}
            >
              ✕
            </Button>
          </div>
        )}
      </div>
    </FormControl>
  );
};
