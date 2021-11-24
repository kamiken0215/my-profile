import {
  Box,
  Flex,
  Spacer,
  VStack,
  Image,
  Center,
  HStack,
} from "@chakra-ui/react";
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
      <Flex h="55vh" w="100vw" alignItems="center" justifyContent="center">
        <Box
          h="100%"
          w="100%"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage="/images/home-bg.jpg"
        >
          <VStack spacing="5" align="center" padding="5">
            <Spacer />
            <Image w="8rem" h="8rem" src="/images/prof.jpg" alt="profile" />
            <Box fontWeight="bold" color="white" fontSize="3.2em">
              Kentaro Kamiyama
            </Box>
            <Box fontWeight="bold" color="white" fontSize="2em">
              I’m software engineer
            </Box>
          </VStack>
        </Box>
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
          COPYRIGHT © KENTARO KAMIYAMA ALL RIGHTS RESERVED.
        </Center>
      </Box>
    </div>
  );
}
