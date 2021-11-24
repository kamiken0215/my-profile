import { Box } from "@chakra-ui/react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { getProfile } from "../libs/profile";
import { Profile, ProfileContents } from "../models/profile";

export default function Home({ contents }: { contents: Profile[] }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {contents.map((value, index) => (
        <Box key={index}>{value.title}</Box>
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data: ProfileContents = await getProfile();
  return {
    props: {
      contents: data.contents,
    },
  };
};
