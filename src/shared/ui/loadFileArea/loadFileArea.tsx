import { FC, HTMLAttributes, useRef } from "react";
import clsx from "clsx";
import sLoadFileArea from "./loadFileArea.module.scss";

interface LoadFileAreaProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (file: File | null) => void;
  value: File | null; // Добавляем пропс value для отслеживания состояния
  error?: boolean;
}

export const LoadFileArea: FC<LoadFileAreaProps> = (props) => {
  const { className, onChange, value, error } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className={clsx(sLoadFileArea.loadFileArea, className)}>
      <div className={sLoadFileArea.inner}>
        <input
          type="file"
          className={sLoadFileArea.input}
          ref={inputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />
        <div
          className={clsx(
            sLoadFileArea.area,
            error && sLoadFileArea.error,
            value && sLoadFileArea.hasFile,
          )}
          onClick={() => inputRef.current?.click()}
        >
          <div className={sLoadFileArea.box}>
            {value ? (
              // Состояние с загруженным файлом
              <>
                ******
                <div className={sLoadFileArea.fileName}>{value.name}</div>
                <button
                  className={sLoadFileArea.removeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(null);
                    if (inputRef.current) {
                      inputRef.current.value = "";
                    }
                  }}
                >
                  ======
                </button>
              </>
            ) : (
              // Состояние без файла
              <>
                ++++++
                <div className={sLoadFileArea.text}>
                  {error ? "Please upload CV file" : "Add Your CV"}
                </div>
                <div className={sLoadFileArea.supportText}>
                  Supported formats: PDF, DOC, DOCX
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
