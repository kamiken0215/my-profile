import { Box, Center, Text } from "@chakra-ui/react";
import { getAllProducts } from "../libs/product";
import { Product, ProductContents } from "../models/product";

export default function products({ contents }: { contents: Product[] }) {
  return (
    <Center>
      <Box w={["90vw", "60vw"]}>
        {contents.map((value, index) => (
          <Text key={index}>{value.title}</Text>
        ))}
      </Box>
    </Center>
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
