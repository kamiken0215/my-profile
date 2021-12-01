import { getAllProducts, getProductData } from "../../libs/product";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { ProductParams, ProductProps } from "../../models/product";
import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";

export const getStaticProps: GetStaticProps<ProductProps, ProductParams> =
  async ({ params }) => {
    const product = await getProductData(params!.id);

    return {
      props: {
        product,
      },
    };
  };

export const getStaticPaths: GetStaticPaths<ProductParams> = async () => {
  const products = await getAllProducts();
  const paths = products.contents.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Products: React.VFC<ProductProps> = ({ product }) => {
  return (
    <Center>
      <Flex overflow="auto" w={["100vw", "80vw"]} wordBreak="break-all">
        <VStack>
          <Text
            fontSize={"2rem"}
            fontWeight="bold"
            p={2}
            marginBottom={["1rem", "3rem"]}
          >
            {product.title}
          </Text>

          <div
            style={{ width: "75vw" }}
            dangerouslySetInnerHTML={{
              __html: product.content,
            }}
          ></div>
          <Link href="/products">
            <a>
              <Text
                alignItems="center"
                justifyContent="center"
                fontSize={["1.2rem", "2rem"]}
              >
                ⇦ Back
              </Text>
            </a>
          </Link>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Products;
