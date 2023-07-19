import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@core/atoms";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export interface PostsCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
}

export const PostsCard: FC<PostsCardProps> = ({
  title,
  date,
  description,
  image,
  tags,
  slug,
}) => {
  return (
    <Card>
      <Link href={`/blog/posts/${slug}`}>
        <CardActionArea>
          <Stack spacing={2} direction="row" alignItems="center">
            <Image src={image} alt={title} width={480} height={300} />
            <CardContent>
              <Stack direction="column" spacing={1}>
                <Typography variant="h2">{title}</Typography>
                <Stack direction="row" spacing={1}>
                  {tags.map((tag) => (
                    <Chip label={tag} color="primary" />
                  ))}
                </Stack>
                <Typography variant="body1">{description}</Typography>
                <Typography variant="body2">{date}</Typography>
              </Stack>
            </CardContent>
          </Stack>
        </CardActionArea>
      </Link>
    </Card>
  );
};
