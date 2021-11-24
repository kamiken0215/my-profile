import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import { client } from "../libs/client";
import { Career, CareerContents } from "../models/career";

export default function product({ contents }: { contents: Career[] }) {
  return (
    <Layout>
      {contents.map((value, index) => (
        <Box key={index}>{value.year}</Box>
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data: CareerContents = await client.get({ endpoint: "careers" });
  console.log(data);
  return {
    props: {
      contents: data.contents,
    },
  };
};
