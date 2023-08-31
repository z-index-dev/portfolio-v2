import Image from "next/image";
import { Box, Container, Stack, Typography } from "../src/atoms";
import { Layout } from "./layout";
import { SocialMediaIcons } from "../src/molecules";
import { Theme, useMediaQuery } from "@mui/material";

export default function Home() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Layout>
      <Container maxWidth="lg">
        <Stack
          maxWidth="100%"
          direction={isMobile ? "column" : "row"}
          spacing={8}
          pt={10}
          pb={20}
          alignItems="center"
        >
          <Box
            width={300}
            height={300}
            border={6}
            borderRadius="50%"
            borderColor="primary.main"
            overflow="hidden"
          >
            <Image
              src="/portrait.jpg"
              width={300}
              height={300}
              alt="portrait"
            />
          </Box>
          <Stack direction="column">
            <Typography variant="h1">
              Zach{" "}
              <Typography variant="h1" component="span" color="primary">
                Shelton
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              component="h2"
              fontSize="1.8rem"
              fontWeight={500}
            >
              Self-taught JavaScript engineer •{" "}
              <Typography
                variant="body1"
                component="span"
                fontSize="1.8rem"
                fontWeight={500}
                color="secondary"
              >
                Houston, TX
              </Typography>
            </Typography>
            <Box mt={2}>
              <SocialMediaIcons />
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Box
        width="100%"
        position="relative"
        bgcolor="background.paper"
        pt={4}
        pb={8}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography variant="h2" component="h3" fontWeight={600}>
              Hi, I'm Zach Shelton
            </Typography>
            <Typography variant="body1">
              I'm a self-taught, full-stack JavaScript engineer, focusing mainly
              on frontend development to build awesome, responsive web
              applications.
            </Typography>
            <Typography variant="body1">
              Currently, I'm a Senior Frontend Engineer for Octopus Energy 🐙, a
              clean energy tech company that just came to United States from the
              United Kingdom. I started with the company in February 2022 after
              spending two years as the Digital Development Manager at the
              Houston Rockets 🚀🏀.
            </Typography>
            <Typography variant="body1">
              My current stack is pretty React-focused now that I'm working on a
              large-scale production app. I specifically work with TypeScript,
              Next.js, Material UI, Apollo, Cypress and Turborepo, which I'm
              particularly excited about these days.
            </Typography>
            <Typography variant="body1">
              I'm always looking for a new challenge or project, so feel free to
              hit me up on one the platforms below, and please check out my new
              blog!
            </Typography>
            <Box>
              <SocialMediaIcons />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
}
