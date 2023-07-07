import { Box, Button, Stack, Typography } from "@core/atoms";
import type { FC } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  links?: {
    github?: string;
    demo?: string;
    server?: string;
  };
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  links,
}) => {
  return (
    <Stack>
      <Box>
        <Image src={image} alt={title} />
      </Box>
      <Stack>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        {links && (
          <Stack direction="row">
            {links.demo && (
              <Button component="a" href={links.demo}>
                {links.demo}
              </Button>
            )}
            {links.github && (
              <Button component="a" href={links.github}>
                {links.github}
              </Button>
            )}
            {links.server && (
              <Button component="a" href={links.server}>
                {links.server}
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
export default ProjectCard;
