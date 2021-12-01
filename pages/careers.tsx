import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import ScrollNav from "../components/scroll-nav";
import { getCareer } from "../libs/career";
import { Career, CareerContents } from "../models/career";

export default function careers({ contents }: { contents: Career[] }) {
  let idMap: Map<string, string> = new Map();
  contents.map((value) => {
    idMap.set(value.id, value.year);
  });

  return (
    <>
      <Grid templateColumns={["1fr", "repeat(8, 1fr)"]} gap={3}>
        <GridItem colStart={[1, 3]} colEnd={[2, 7]} p={5}>
          {contents.map((value, index) => (
            <section key={index} id={value.id}>
              <Center>
                <Text fontSize="2rem">{value.year}</Text>
              </Center>
              <Box h="4vh"></Box>
              <Box fontSize="1rem" wordBreak="break-word">
                <Box>
                  <div
                    key={index + "content"}
                    dangerouslySetInnerHTML={{ __html: value.content }}
                  />
                </Box>
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
  const data: CareerContents = await getCareer();
  return {
    props: {
      contents: data.contents,
    },
  };
};
