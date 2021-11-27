import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import MicroCMSImage from "../components/MicroCMSImage";
import ScrollNav from "../components/scroll-nav";
import { getAllProducts } from "../libs/product";
import { Product, ProductContents } from "../models/product";

export default function products({ contents }: { contents: Product[] }) {
  let idMap: Map<string, string> = new Map();
  contents.map((value) => {
    idMap.set(value.id, value.title);
  });
  return (
    <>
      <Grid templateColumns="repeat(8, 1fr)" gap={3}>
        <GridItem colStart={3} colEnd={7}>
          <Center>
            <SimpleGrid minChildWidth="240px" spacingX={5} spacingY={5}>
              {contents.map((value, index) => (
                <Box key={index}>
                  <section id={value.id}>
                    <VStack borderWidth="2px" borderRadius="10" p="4">
                      <Text fontSize="1.6rem" fontWeight="bold">
                        {value.title}
                      </Text>
                      <Box>
                        <Image
                          height={120}
                          width={120}
                          src={value.thumbnail.url}
                          alt="サムネイル"
                        ></Image>
                      </Box>
                      <Box fontSize="1rem" wordBreak="break-word">
                        <div
                          key={index + "content"}
                          dangerouslySetInnerHTML={{ __html: value.abstract }}
                        />
                      </Box>
                    </VStack>
                  </section>
                </Box>
              ))}
            </SimpleGrid>
          </Center>
        </GridItem>
        <GridItem
          colStart={2}
          colSpan={1}
          rowStart={1}
          rowSpan={2}
          display={["none", "block"]}
          fontSize="0.6rem"
          color="#8c8c8c"
        >
          <ScrollNav idMap={idMap} />
        </GridItem>
      </Grid>
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
