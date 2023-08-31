import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { FC } from "react";
import { IconButton, Link, Stack } from "src/atoms";

export const SocialMediaIcons: FC = () => {
  return (
    <Stack direction="row" alignItems="start">
      <Link
        href="https://github.com/z-index-dev"
        target="_blank"
        title="Github"
        mr={2}
      >
        <IconButton>
          <GitHubIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Link>
      <Link
        href="https://twitter.com/iamzachstweets"
        target="_blank"
        title="Github"
        mr={2}
      >
        <IconButton>
          <TwitterIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Link>
      <Link
        href="https://www.linkedin.com/in/zach-shelton-b1770b56/"
        target="_blank"
        title="Github"
        mr={2}
      >
        <IconButton>
          <LinkedInIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Link>
    </Stack>
  );
};
