import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { client } from "../libs/client";
import { getAllProducts } from "../libs/product";
import { Product, ProductContents } from "../models/product";

export default function products({ contents }: { contents: Product[] }) {
  return (
    <>
      {contents.map((value, index) => (
        <Box key={index}>{value.content}</Box>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const data: ProductContents = await getAllProducts();
  return {
    props: {
      contents: data.contents,
    },
  };
};
