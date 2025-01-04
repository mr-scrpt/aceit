import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { FC } from "react";
import sImg from "./img.module.scss";

interface ImgProps extends ImageProps {}

export const Img: FC<ImgProps> = (props) => {
  const { className, ...rest } = props;
  const clsImg = clsx(className, sImg.img);
  return <Image className={clsImg} {...rest} />;
};
