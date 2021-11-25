import { Box, Center, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import { getProfile } from "../libs/profile";
import { Profile, ProfileContents } from "../models/profile";

export default function Home({ contents }: { contents: Profile[] }) {
  return (
    <Grid templateColumns={["1fr", "repeat(4, 1fr)"]} gap={2}>
      <GridItem colStart={[1, 2]} colEnd={[2, 3]}>
        <Flex alignContent="center" justifyContent="center">
          <Img
            w={["50%", "80%"]}
            h={["100%", "120%"]}
            src="/images/prof.jpg"
          ></Img>
        </Flex>
      </GridItem>
      <GridItem colStart={[1, 3]} colEnd={[2, 4]}>
        {contents.map((value, index) => (
          <Text key={index}>{value.title}</Text>
        ))}
      </GridItem>
    </Grid>
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
