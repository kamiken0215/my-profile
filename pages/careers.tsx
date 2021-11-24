import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import { getCareer } from "../libs/career";
import { client } from "../libs/client";
import { Career, CareerContents } from "../models/career";

export default function careers({ contents }: { contents: Career[] }) {
  return (
    <Layout>
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
