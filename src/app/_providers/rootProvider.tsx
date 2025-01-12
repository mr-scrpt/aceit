"use client";

import { ComposeChildren } from "@/shared/lib/react";
import { ModalProvider } from "@/widget/modal/modal.provier";
import { FC, HTMLAttributes } from "react";

interface ProvidersRootProps extends HTMLAttributes<HTMLDivElement> {}

export const ProvidersRoot: FC<ProvidersRootProps> = (props) => {
  const { children } = props;
  return (
    <ComposeChildren>
      <ModalProvider />
      <>{children}</>
    </ComposeChildren>
  );
};
