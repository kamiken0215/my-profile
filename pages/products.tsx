import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../libs/client";
import { getAllProduct } from "../libs/product";
import { Product, ProductContents } from "../models/product";

export default function products({ contents }: { contents: Product[] }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
