import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import { client } from "../libs/client";
import { Product, ProductContents } from "../models/product";

export default function product({ contents }: { contents: Product[] }) {
  return (
    <Layout>
      {contents.map((value, index) => (
        <Box key={index}>{value.content}</Box>
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data: ProductContents = await client.get({ endpoint: "products" });
  console.log(data);
  return {
    props: {
      contents: data.contents,
    },
  };
};
