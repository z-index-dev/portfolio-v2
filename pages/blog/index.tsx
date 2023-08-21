import { Container, Stack, Typography } from "@core/atoms";
import { PostsCard } from "@core/organisms/PostsCard";
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
    image: string;
  };
};

const Blog: FC<{ posts: PostProps[] }> = ({ posts }) => {
  const publishedPosts = posts.filter((post) => post.frontmatter.date);

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
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
            where you are as a software engineer.
          </Typography>
        </Stack>
        <Stack mt={4} spacing={4} maxWidth="lg" mx="auto">
          {publishedPosts.map(
            (post) =>
              post.frontmatter.date && (
                <PostsCard
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  description={post.frontmatter.description}
                  image={post.frontmatter.image}
                  tags={post.frontmatter.tags}
                  slug={post.slug}
                />
              )
          )}
        </Stack>
        {publishedPosts.length < 4 && (
          <Stack my={4} spacing={1}>
            <Typography variant="h1" component="p" align="center">
              🤷‍♂️
            </Typography>
            <Typography variant="body1" align="center">
              ...that's all for now!
            </Typography>
          </Stack>
        )}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Blog;
