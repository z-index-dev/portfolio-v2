import { Box } from "@core/atoms";
import type { FC } from "react";
import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

export const BlogImage: FC<BlogImageProps> = ({
  src,
  alt,
  width = 200,
  height = 200,
}) => {
  return (
    <Box position="relative" width={width} height={height} mx="auto">
      <Image src={src} alt={alt} fill={true} />
    </Box>
  );
};
