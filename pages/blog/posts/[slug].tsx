import { Box, Chip, Container, Divider, Stack, Typography } from "@core/atoms";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Layout } from "pages/layout";
import { useMemo } from "react";
import { PostProps } from "..";
import { getAllPosts, getPost } from "../../../utils";

const Post = ({ code, frontmatter }: PostProps) => {
  const PostComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Container maxWidth="md" sx={{ minHeight: "100vh" }}>
        <Box position="relative" overflow="hidden" width="100%" height="540px">
          <Image
            src={frontmatter.image}
            fill={true}
            style={{ objectFit: "cover" }}
            alt={frontmatter.title}
          />
        </Box>
        <Typography variant="h1" mt={1}>
          {frontmatter.title}
        </Typography>
        <Stack direction="row" spacing={1}>
          {frontmatter.tags.map((tag) => (
            <Chip label={tag} color="primary" />
          ))}
        </Stack>
        <Stack spacing={0.25} mt={2} mb={2}>
          <Typography variant="body1">{frontmatter.description}</Typography>
          <Typography variant="body2">{frontmatter.date}</Typography>
        </Stack>
        <Divider />
        <Box mt={4}>
          <PostComponent />
        </Box>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getPost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
