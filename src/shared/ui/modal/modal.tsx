"use client";
import { FC, HTMLAttributes, ReactNode, memo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../shadcn/dialog/dialog";
import { Button } from "../button/button";
import sModal from "./modal.module.scss";
import { sDeco } from "@/shared/style";
import clsx from "clsx";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  params: {
    title?: string;
    description?: string;
    element?: ReactNode;
    closeText?: string;
    confirmText?: string;
    onClose: () => void;
    onConfirm: () => void;
  };
}

export const Modal: FC<ModalProps> = memo((props) => {
  const { params, children } = props;
  const {
    title,
    description,
    closeText,
    confirmText,
    onClose,
    onConfirm,
    element,
  } = params;

  return (
    <Dialog open={!!params} onOpenChange={onClose}>
      <DialogContent
        className={clsx(sModal.modal, [sDeco.sectionGradientBorder])}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div>{element}</div>

        <DialogFooter>
          {closeText && <Button onClick={onClose}>{closeText}</Button>}
          {confirmText && <Button onClick={onConfirm}>{confirmText}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

Modal.displayName = "Modal";
