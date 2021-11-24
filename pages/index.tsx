import { Box, Center, Text } from "@chakra-ui/react";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import { getProfile } from "../libs/profile";
import { Profile, ProfileContents } from "../models/profile";

export default function Home({ contents }: { contents: Profile[] }) {
  return (
    <Center>
      <Box w={["90vw", "50vw"]}>
        {contents.map((value, index) => (
          <Text key={index}>{value.title}</Text>
        ))}
      </Box>
    </Center>
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
