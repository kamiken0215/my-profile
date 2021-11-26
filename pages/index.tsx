import { Box, Center, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import { getProfile } from "../libs/profile";
import { Profile, ProfileContents } from "../models/profile";
import ScrollNav from "../components/scroll-nav";

export default function Home({ contents }: { contents: Profile[] }) {
  // const idList: string[] = contents.map((value) => {
  //   return value.id;
  // });
  let idMap: Map<string, string> = new Map();
  contents.map((value) => {
    idMap.set(value.id, value.title);
  });

  return (
    <>
      <Grid templateColumns={["1fr", "repeat(8, 1fr)"]} gap={3}>
        <GridItem colStart={[1, 3]} colEnd={[2, 7]}>
          <Flex alignContent="center" justifyContent="center">
            <Img
              w={["50%", "12rem"]}
              h={["100%", "14rem"]}
              src="/images/prof.jpg"
            ></Img>
          </Flex>
        </GridItem>
        <GridItem colStart={[1, 3]} colEnd={[2, 7]}>
          {contents.map((value, index) => (
            <section key={index} id={value.id}>
              <Text fontSize="2rem">{value.title}</Text>
              <Box h="4vh"></Box>
              <Box fontSize="1rem" wordBreak="break-word">
                <div
                  key={index + "content"}
                  dangerouslySetInnerHTML={{ __html: value.content }}
                />
              </Box>
              <Box h="10vh"></Box>
            </section>
          ))}
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
  const data: ProfileContents = await getProfile();
  return {
    props: {
      contents: data.contents,
    },
  };
};
