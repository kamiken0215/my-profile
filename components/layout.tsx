import { Box, Flex, Spacer, VStack, Image, Center } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box>
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
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a>career</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>product</a>
            </Link>
          </li>
        </ul>
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
    </Box>
  );
}
