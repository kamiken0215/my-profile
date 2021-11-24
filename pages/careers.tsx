import { Box, Center, Text } from "@chakra-ui/react";
import { getCareer } from "../libs/career";
import { Career, CareerContents } from "../models/career";

export default function careers({ contents }: { contents: Career[] }) {
  return (
    <Center>
      <Box w={["90vw", "50vw"]}>
        {contents.map((value, index) => (
          <Text key={index}>{value.content}</Text>
        ))}
      </Box>
    </Center>
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
