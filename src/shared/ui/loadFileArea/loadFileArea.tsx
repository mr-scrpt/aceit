import { FC, HTMLAttributes, useRef, useState } from "react";
import clsx from "clsx";
import sLoadFileArea from "./loadFileArea.module.scss";
import { Icon } from "../icon/ui/icon";

interface LoadFileAreaProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (file: File | null) => void;
  value: File | null;
  error?: boolean;
}

export const LoadFileArea: FC<LoadFileAreaProps> = (props) => {
  const { className, onChange, value, error } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) onChange(file);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    if (file) onChange(file);
  };

  const iconClass = clsx(sLoadFileArea.icon, {
    [sLoadFileArea.iconDragging]: isDragging,
    [sLoadFileArea.iconError]: error,
    [sLoadFileArea.iconSuccess]: value !== null,
  });

  return (
    <div className={clsx(sLoadFileArea.loadFileArea, className)}>
      <div
        className={clsx(sLoadFileArea.inner, {
          [sLoadFileArea.dragging]: isDragging,
          [sLoadFileArea.hasFile]: value !== null,
          [sLoadFileArea.error]: error,
        })}
      >
        <input
          type="file"
          className={sLoadFileArea.input}
          ref={inputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />
        <div
          className={sLoadFileArea.area}
          onClick={() => inputRef.current?.click()}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className={sLoadFileArea.box}>
            <Icon icon="FILE_PLUS" className={iconClass} />
            {value ? (
              <>
                <div className={sLoadFileArea.fileName}>{value.name}</div>
                <div className={sLoadFileArea.removeButtonWrapper}>
                  <button
                    type="button"
                    className={sLoadFileArea.removeButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange(null);
                      if (inputRef.current) {
                        inputRef.current.value = "";
                      }
                    }}
                  >
                    Remove
                  </button>
                </div>
              </>
            ) : (
              <div className={sLoadFileArea.text}>Add Your CV</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
