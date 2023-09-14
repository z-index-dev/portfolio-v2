import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

export type MetaGenProps = {
  title: string;
  description: string;
  image: string;
  contentType: string;
  children?: ReactNode;
};

export const MetaGen: FC<MetaGenProps> = ({
  title,
  description,
  image,
  contentType,
  children,
}) => {
  const websiteURI = "https://zachshelton.dev";
  const siteName = "Zach Shelton | Portfolio & Blog";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <link
        rel="canonical"
        href={websiteURI + useRouter().asPath}
        key="canonical"
      />
      <link rel="shortcut icon" href="/z-index-logo.png" type="image/x-icon" />
      {/* Open Graph */}
      <meta property="og:title" content={title} key="ogTitle" />
      <meta property="og:type" content={contentType} key="ogType" />
      <meta
        property="og:url"
        content={websiteURI + useRouter().asPath}
        key="ogUrl"
      />
      <meta
        property="og:image"
        content={
          image ? websiteURI + image : `${websiteURI}/open-graph-image.jpg`
        }
        key="ogImage"
      />
      <meta
        property="og:description"
        content={description}
        key="ogDescription"
      />
      <meta property="og:site_name" content={siteName} key="ogSiteName" />
      <meta name="author" content="Zach Shelton" key="author" />
      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitterCard"
      />
      <meta name="twitter:title" content={title} key="twitterTitle" />
      <meta
        name="twitter:image"
        content={image ? websiteURI + image : `${websiteURI}/twitter-card.jpg`}
        key="twitterImage"
      />
      <meta
        name="twitter:description"
        content={description}
        key="twitterDescription"
      />
      <meta
        name="twitter:site:id"
        content="@iamzachstweets"
        key="twitterHandle"
      />
      {children}
    </Head>
  );
};
