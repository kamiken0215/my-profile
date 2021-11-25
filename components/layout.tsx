import {
  Box,
  Flex,
  Spacer,
  VStack,
  Image,
  Center,
  Text,
  HStack,
  IconButton,
  Img,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import styles from "./layout.module.css";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
};
export const siteTitle = "Kentaro Kamiyama's Profile Site";

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Flex h="60vh" w="100vw" alignItems="center" justifyContent="center">
        <div className={styles.imgWrap}>
          <div className={styles.cover1}></div>
          <div className={styles.cover2}></div>
          <div className={styles.cover3}></div>
          <div className={styles.cover4}></div>
          <div className={styles.cover5}></div>
          <div className={styles.cover6}></div>
          <HStack>
            <Spacer />
            <Img
              h={["40vh", "60vh"]}
              w={["50%", "65%"]}
              p="1rem"
              src="/images/top.jpg"
            ></Img>
            <VStack spacing="5" p="5">
              <section>
                <VStack marginLeft="-8rem" align="start">
                  <Box fontSize={["1.6rem", "3rem"]}>
                    <span className={styles.topNameText}>Kentaro Kamiyama</span>
                  </Box>
                  <Box fontSize={["1rem", "1.2rem"]}>
                    <span className={styles.topJobText}>
                      I Am Software Engineer.
                    </span>
                  </Box>
                  <Box fontSize={["1rem", "1.2rem"]}>
                    <span className={styles.topSubTitleText}>
                      Welcome to my profile site.
                    </span>
                  </Box>
                </VStack>
              </section>
            </VStack>
            <Spacer />
          </HStack>
        </div>
      </Flex>
      <Flex w="100vw" alignItems="center" justifyContent="center">
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/">
                <a className={styles.a}>home</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/careers">
                <a className={styles.a}>career</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/products">
                <a className={styles.a}>product</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Flex>
      <Box minH="60vh">
        {/* <TabComponent profile={profile} /> */}
        <main>{children}</main>
      </Box>
      <Box h="4rem" w="100vw" bg="#5D5D5D">
        <Center h="100%" color="white">
          <Text fontSize={["0.1rem", "1em"]}>
            COPYRIGHT © KENTARO KAMIYAMA ALL RIGHTS RESERVED.
          </Text>
        </Center>
      </Box>
    </div>
  );
}
