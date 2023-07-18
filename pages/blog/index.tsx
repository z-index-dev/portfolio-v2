import { Container, Divider, Link, Stack, Typography } from "@core/atoms";
import { GetStaticProps } from "next";
import { Layout } from "pages/layout";
import type { FC } from "react";
import { getAllPosts } from "utils";

export type PostProps = {
  code: string;
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: string[];
  };
};

const Blog: FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Stack spacing={2}>
          <Typography variant="h1">Blog</Typography>
          <Typography variant="body1">
            When I was still in college, I took a sports blogging job with
            Bleacher Report that I stuck with for five years. While I don't miss
            that hustle at all, I still enjoy writing and am excited to have
            this space as part of my personal site.
          </Typography>
          <Typography variant="body1">
            I'm sure I'll deviate somewhere down the line, but my immediate goal
            here is to provide some insight into career growth and how to
            improve as a developer. This is an overlooked part of the wide world
            of tech blogging, and I hope you find something that connects with
            where you are as a software developer.
          </Typography>
        </Stack>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Blog;
