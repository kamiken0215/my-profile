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
    <Link href={`/products/${product.id}`}>
      <a>
        <Box className={styles.a}>
          <VStack p="2" justifyContent="center" alignItems="center">
            <Box>
              <Image
                height={120}
                width={200}
                src={product.thumbnail.url}
                alt="サムネイル"
              ></Image>
            </Box>

            <Text fontSize="1.2rem" fontWeight="bold">
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
        </Box>
      </a>
    </Link>
  );
};

export default Card;
