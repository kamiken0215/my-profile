import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import { client } from "../libs/client";
import { getAllProduct } from "../libs/product";
import { Product, ProductContents } from "../models/product";

export default function products({ contents }: { contents: Product[] }) {
  return (
    <Layout>
      {contents.map((value, index) => (
        <Box key={index}>{value.content}</Box>
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data: ProductContents = await getAllProduct();
  return {
    props: {
      contents: data.contents,
    },
  };
};
