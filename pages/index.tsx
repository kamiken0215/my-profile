import {
  Box,
  Center,
  Flex,
  Image,
  Link,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import { client } from "../libs/client";
import TabComponent from "./components/tab";
import { Profile } from "../models/profile";
import Layout from "../components/layout";

interface ProfileContents {
  contents: Profile[];
}

export default function Home() {
  return (
    <Box bg="#E5E5E5">
      <Layout></Layout>
    </Box>
  );
}

// export const getStaticProps = async () => {
//   const data: ProfileContents = await client.get({ endpoint: "profiles" });
//   console.log(data);
//   return {
//     props: {
//       profile: data.contents,
//     },
//   };
// };
