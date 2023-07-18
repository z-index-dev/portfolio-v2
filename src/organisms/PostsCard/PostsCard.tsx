import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@core/atoms";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export interface PostsCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}

export const PostsCard: FC<PostsCardProps> = ({
  title,
  description,
  image,
  tags,
  slug,
}) => {
  return (
    <Link href={slug}>
      <Card>
        <CardActionArea>
          <Image src={image} alt={title} width={480} height={300} />
          <CardContent>
            <Typography variant="h2">{title}</Typography>
            {tags.map((tag) => (
              <Chip label={tag} />
            ))}
            <Typography variant="body1">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
