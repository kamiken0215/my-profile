import { Box, Center, Text } from "@chakra-ui/react";
import { getCareer } from "../libs/career";
import { Career, CareerContents } from "../models/career";

export default function careers({ contents }: { contents: Career[] }) {
  return (
    <Center>
      <Box w={["90vw", "50vw"]}>
        {contents.map((value, index) => (
          <div key={index + "parent"}>
            <Text key={index + "year"}>{value.year}</Text>
            <div
              key={index + "content"}
              dangerouslySetInnerHTML={{ __html: value.content }}
            />
          </div>
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
