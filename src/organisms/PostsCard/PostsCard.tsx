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
import { Box, Theme, useMediaQuery } from "@mui/material";

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
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  return (
    <Card sx={{ width: { sm: "100%", md: "50%", lg: "100%" }, mx: "auto" }}>
      <Link href={`/blog/posts/${slug}`}>
        <CardActionArea>
          <Stack
            spacing={2}
            direction={isMobile ? "column" : "row"}
            alignItems="center"
          >
            <Image
              src={image}
              alt={title}
              height={300}
              width={480}
              style={{ width: "100%", height: "auto" }}
            />
            <CardContent>
              <Stack direction="column" spacing={1} px={isMobile ? 4 : 2}>
                <Typography variant="h2">{title}</Typography>
                <Stack direction="row" flexWrap={isMobile ? "wrap" : "nowrap"}>
                  {tags.map((tag) => (
                    <Chip
                      label={tag}
                      color="primary"
                      sx={{ mt: ".5rem !important", mr: ".5rem !important" }}
                    />
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
