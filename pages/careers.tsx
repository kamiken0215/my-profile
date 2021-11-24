import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getCareer } from "../libs/career";
import { client } from "../libs/client";
import { Career, CareerContents } from "../models/career";

export default function careers({ contents }: { contents: Career[] }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {contents.map((value, index) => (
        <Box key={index}>{value.year}</Box>
      ))}
    </Layout>
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
