import { Box } from "@chakra-ui/react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { getProfile } from "../libs/profile";
import { Profile, ProfileContents } from "../models/profile";

export default function Home({ contents }: { contents: Profile[] }) {
  return (
    <>
      {contents.map((value, index) => (
        <Box key={index}>{value.title}</Box>
      ))}
    </>
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
