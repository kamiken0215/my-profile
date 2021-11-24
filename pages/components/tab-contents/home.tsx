import { Box, Text } from "@chakra-ui/react";
import { Profile } from "../../../models/profile";

export default function Home({
  contents,
}: {
  contents: Profile[];
}): JSX.Element {
  return (
    <>
      {contents.map((content, index) => (
        <Box key={index}>
          <Text fontSize="2rem" fontWeight="bold">
            {content.title}
          </Text>
          <Box dangerouslySetInnerHTML={{ __html: content.body }} />
        </Box>
      ))}
    </>
  );
}
