import {
  Box,
  Flex,
  Spacer,
  VStack,
  Image,
  Link,
  Center,
} from "@chakra-ui/react";

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
        <Link href="/" padding="10">
          <a>home</a>
        </Link>
        <Link href="/career" padding="10">
          <a>career</a>
        </Link>
        <Link href="/product" padding="10">
          <a>product</a>
        </Link>
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
