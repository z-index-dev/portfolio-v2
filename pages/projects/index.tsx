import { Container, Divider, Link, Stack, Typography } from "@core/atoms";
import { ProjectCard } from "@core/organisms";
import { Layout } from "pages/layout";
import type { FC } from "react";

export const projectsObject = [
  {
    id: 0,
    title: "Portfolio with Blog",
    description:
      "I've been wanting to add a blog to my portfolio for quite some time now, and decided to use the opportunity to convert this site to something more in line with my current stack. I'm using Next.js with TypeScript as the base framework, Material UI for the component library and Vercel for hosting. For the blog, I'm publishing to a basic Wordpress setup and using GraphQL with Apollo to pull in the posts. I'll probably shift the architecture to a Turborepo setup in the future, but for now, this works great.",
    image: "/portfolio-v1.png",
    links: {
      demo: "",
      github: "",
    },
  },
  {
    id: 1,
    title: "Portfolio V1",
    description:
      "My original portfolio site with Vanilla JavaScript and SCSS for styling. I used a lot of the same designs you see here, but ran this out with a theme switcher for some added fun. I still like how this turned out, but wanted to have a larger codebase to maintain and experiment with outside of work.",
    image: "/portfolio-v1.png",
    links: {
      github: "https://github.com/z-index-dev/portfolio",
    },
  },
  {
    id: 2,
    title: "Rockets Rewards",
    description:
      'Season Ticket Member Rewards redemption page built using HTML table, SCSS and Vanilla JS. Pulls account info via query string from REST API, which is fed from MongoDB through Node.js server hosted on Heroku. User then makes selections and submits to database pending server-side validation. Server also includes export function for viewing submissions and a "wake up" function so the server never lags.',
    image: "/rewards-portfolio.jpg",
    links: {
      github: "https://github.com/z-index-dev/rockets-rewards",
      server: "https://github.com/z-index-dev/rockets-rewards-server",
    },
  },
  {
    id: 3,
    title: "Pomodoro App",
    description:
      "Pomodoro timer with to-do list built with HTML, CSS and Vanilla JS, most notably using the setInterval and clearInterval methods, and localStorage to keep track of user preferences. If you like it, feel free to use it to keep you focused at work!",
    image: "/pomodoro-portfolio.png",
    links: {
      demo: "https://z-index-pomodoro.netlify.app/",
      github: "https://github.com/z-index-dev/pomodoro-app",
    },
  },
  {
    id: 4,
    title: "Custom Video Player",
    description:
      "HTML, CSS and Vanilla JS video player with scrubbing, time updates, time tooltips on hover and fullscreen capability. I initially built this as part of Wes Bos' JavaSript30 course then added the time tracker and tooltips with a timeString regex.",
    image: "/video-player-portfolio.png",
    links: {
      demo: "https://z-index-video-player.netlify.app/",
      github: "https://github.com/z-index-dev/custom-video-player",
    },
  },
];

const Projects: FC = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Stack spacing={2}>
          <Typography variant="h1">Projects</Typography>
          <Typography variant="body1">
            I've built hundreds of webpages and applications over the course of
            my career, most of which are proprietary and can't be shared. Below
            are a few that I can show off, but please feel free to reach out if
            you'd like to see more.
          </Typography>
          <Typography variant="body1">
            If you'd like to have a look at where I spend most of my time, check
            out my current company's site at{" "}
            <Link
              href="https://octopusenergy.com"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary.main"
            >
              OctopusEnergy.com
            </Link>
            .
          </Typography>
        </Stack>
        <Stack spacing={8} mt={8} mb={8}>
          {projectsObject.map((project, index) => {
            return (
              <>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  links={project.links}
                />
                {index + 1 !== projectsObject.length && <Divider />}
              </>
            );
          })}
        </Stack>
      </Container>
    </Layout>
  );
};
export default Projects;
