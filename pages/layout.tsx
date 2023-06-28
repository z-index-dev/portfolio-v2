import Head from "next/head";
import { Box } from "../src/atoms";
import { Footer, NavigationBar } from "../src/organisms";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Zach Shelton | Portfolio</title>
        <meta
          name="description"
          content="Zach Shelton Developer Portfolio"
          key="description"
        />
        {/* Open Graph */}
        {/* <meta property="og:title" content={title} key="ogTitle" /> */}
        {/* <meta property="og:type" content={contentType} key="ogType" /> */}
        {/* <meta
          property="og:url"
          content={websiteURI + useRouter().asPath}
          key="ogUrl"
        /> */}
        {/* <meta property="og:image" content="/z-index-logo.png" key="ogImage" /> */}
        {/* <meta
          property="og:description"
          content={description}
          key="ogDescription"
        />
        <meta property="og:site_name" content={siteName} key="ogSiteName" /> */}
        <meta
          name="author"
          content="Zach Shelton | Z-Index Web Services, LLC"
          key="author"
        />
      </Head>
      <Box component="main">
        <NavigationBar />
        <Box pt={16}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};
