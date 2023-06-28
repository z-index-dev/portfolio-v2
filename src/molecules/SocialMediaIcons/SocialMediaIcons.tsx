import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { FC } from "react";
import { Link, Stack } from "src/atoms";

const SocialMediaIcons: FC = () => {
  return (
    <Stack direction="row" alignItems="start" mt={2}>
      <Link
        href="https://github.com/z-index-dev"
        target="_blank"
        title="Github"
        mr={2}
      >
        <GitHubIcon fontSize="large" style={{ color: "white" }} />
      </Link>
      <Link
        href="https://twitter.com/iamzachstweets"
        target="_blank"
        title="Github"
        mr={2}
      >
        <TwitterIcon fontSize="large" style={{ color: "white" }} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/zach-shelton-b1770b56/"
        target="_blank"
        title="Github"
        mr={2}
      >
        <LinkedInIcon fontSize="large" style={{ color: "white" }} />
      </Link>
    </Stack>
  );
};
export default SocialMediaIcons;
