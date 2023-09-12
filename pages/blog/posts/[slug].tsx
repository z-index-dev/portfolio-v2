import { Box, Chip, Container, Divider, Stack, Typography } from "@core/atoms";
import { BlogImage, Caption } from "@core/molecules";
import { styled } from "@mui/material";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticProps } from "next";
import Image from "next/image";
import { Layout } from "@core/Layout";
import { useMemo } from "react";
import { PostProps } from "..";
import { getAllPosts, getPost } from "../../../utils";

const PostContainer = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  h2: {
    color: theme.palette.primary.main,
    marginTop: "2.5rem",
  },
  p: {
    fontSize: "1.2rem",
    lineHeight: "1.8rem",
    strong: {
      color: theme.palette.secondary.main,
    },
  },
  blockquote: {
    backgroundColor: theme.palette.background.paper,
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: 16,
    p: {
      padding: "1rem 0",
    },
  },
  ul: {
    padding: ".5rem 2.5rem .75rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette.background.paper,
  },
  li: {
    fontSize: "1.2rem",
    lineHeight: "2rem",
  },
  code: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    padding: "0 .25rem",
  },
}));

const Post = ({ code, frontmatter }: PostProps) => {
  const PostComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Container maxWidth="md" sx={{ minHeight: "100vh", mb: 4 }}>
        <Box position="relative" overflow="hidden" width="100%" height="540px">
          <Image
            src={frontmatter.image}
            fill
            style={{ objectFit: "cover" }}
            alt={frontmatter.title}
          />
        </Box>
        <Typography variant="h1" mt={1}>
          {frontmatter.title}
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          {frontmatter.tags.map((tag) => (
            <Chip
              label={tag}
              color="primary"
              key={tag}
              sx={{ mt: ".5rem !important", mr: ".5rem !important" }}
            />
          ))}
        </Stack>
        <Stack spacing={0.25} mt={2} mb={2}>
          <Typography variant="body1">{frontmatter.description}</Typography>
          <Typography variant="body2">{frontmatter.date}</Typography>
        </Stack>
        <Divider />
        <PostContainer>
          <PostComponent components={{ BlogImage, Caption }} />
        </PostContainer>
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
