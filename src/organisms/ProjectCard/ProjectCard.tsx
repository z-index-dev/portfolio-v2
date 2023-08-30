import { Box, Button, Stack, Typography } from "@core/atoms";
import type { FC } from "react";
import Image from "next/image";
import { Theme, useMediaQuery } from "@core/theme";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  links?: {
    github?: string;
    demo?: string;
    server?: string;
  };
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  links,
}) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Image src={image} alt={title} width={480} height={300} />
      </Box>
      <Stack spacing={2} pl={6}>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" pl={0.25}>
          {description}
        </Typography>
        {links && (
          <Stack direction="row" spacing={2} pt={2}>
            {links.demo && (
              <Button
                variant="outlined"
                size="large"
                component="a"
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </Button>
            )}
            {links.github && (
              <Button
                variant="outlined"
                size="large"
                component="a"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </Button>
            )}
            {links.server && (
              <Button
                variant="outlined"
                size="large"
                component="a"
                href={links.server}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Server
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
export default ProjectCard;
