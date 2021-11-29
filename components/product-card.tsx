import { Box, Center, VStack, Text } from "@chakra-ui/react";
import { VFC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../models/product";
import styles from "./product-card.module.css";

type Props = {
  product: Product;
};

const Card: VFC<Props> = ({ product }) => {
  return (
    <Box className={styles.border}>
      <Link href={`/products/${product.id}`}>
        <a>
          <VStack p="4" justifyContent="center" alignItems="center">
            <Box>
              <Image
                height={120}
                width={200}
                src={product.thumbnail.url}
                alt="サムネイル"
              ></Image>
            </Box>

            <Text fontSize="1.6rem" fontWeight="bold">
              {product.title}
            </Text>
            <Box fontSize="1rem" wordBreak="break-word">
              <div
                dangerouslySetInnerHTML={{
                  __html: product.abstract,
                }}
              />
            </Box>
          </VStack>
        </a>
      </Link>
    </Box>
  );
};

export default Card;
