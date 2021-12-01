import {
  Box,
  Flex,
  Spacer,
  VStack,
  Center,
  Text,
  HStack,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
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
        <title>Kentaro Kamiyama Prof</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kentaro Kamiyamaのプロフィールサイト"
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
      <Flex
        w={["22rem", "44rem"]}
        h={["22rem", "44rem"]}
        top={["-10rem", "-20rem"]}
        left="-10rem"
        rounded="full"
        bgColor="#FFECC2"
        position="absolute"
        zIndex="-1"
      ></Flex>
      <Flex
        w={["4rem", "8rem"]}
        h={["4rem", "8rem"]}
        top={["16rem", "20rem"]}
        right={["0", "14rem"]}
        rounded="full"
        bgColor="#c0f9fd"
        position="absolute"
        zIndex="-1"
      ></Flex>
      <Flex
        w="5%"
        h="35%"
        bottom="10rem"
        right="0"
        bgColor="#FFECC2"
        position="absolute"
        zIndex="-1"
      ></Flex>
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
            <Box zIndex={1} p="6">
              <Image
                width={280}
                height={340}
                src={`/images/top.jpg`}
                alt="トップ画像"
              ></Image>
            </Box>
            <VStack spacing="5" p="5" zIndex={2}>
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
            <Box
              w="100%"
              h="45vh"
              bgColor="#fffefbb5"
              position="absolute"
              zIndex="-1"
            ></Box>
          </HStack>
        </div>
      </Flex>
      <Flex
        w="100vw"
        alignItems="center"
        justifyContent="center"
        marginTop={["-2rem", "2rem"]}
        marginBottom={["1rem", "2rem"]}
      >
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
      <Center>
        <Divider
          marginBottom="2rem"
          width="80vw"
          textAlign="center"
          borderColor="#4A5568"
        />
      </Center>
      <Box minH="60vh">
        {/* <TabComponent profile={profile} /> */}
        <main>{children}</main>
      </Box>
      <Box h="4rem" w="100vw" bg="#5D5D5D">
        <Center h="100%" color="white">
          <Text fontSize={["0.6rem", "1em"]}>
            COPYRIGHT © KENTARO KAMIYAMA ALL RIGHTS RESERVED.
          </Text>
        </Center>
      </Box>
    </div>
  );
}
