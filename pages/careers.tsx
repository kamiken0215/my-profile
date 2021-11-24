import { Box, Center, Text } from "@chakra-ui/react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getCareer } from "../libs/career";
import { client } from "../libs/client";
import { Career, CareerContents } from "../models/career";

export default function careers({ contents }: { contents: Career[] }) {
  return (
    <Center>
      <Box w={["90vw", "50vw"]}>
        {contents.map((value, index) => (
          <Text key={index}>{value.content}</Text>
        ))}
      </Box>
    </Center>
  );
}

export const getStaticProps = async () => {
  const data: CareerContents = await getCareer();
  return {
    props: {
      contents: data.contents,
    },
  };
};
