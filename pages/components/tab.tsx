import {
  Flex,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Profile } from "../../models/profile";
import Career from "./tab-contents/career";
import Home from "./tab-contents/home";
import Product from "./tab-contents/product";

export default function TabComponent({
  profile,
}: {
  profile: Profile[];
}): JSX.Element {
  const home = profile
    .filter((v) => {
      return v.display.match("Home");
    })
    .sort(function (x, y) {
      return x.order - y.order;
    });
  const career = profile
    .filter((v) => {
      return v.display.match("Career");
    })
    .sort(function (x, y) {
      return x.order - y.order;
    });
  const product = profile
    .filter((v) => {
      return v.display.match("Product");
    })
    .sort(function (x, y) {
      return x.order - y.order;
    });

  return (
    <>
      <Flex
        padding="5"
        w="100vw"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#E5E5E5"
      >
        <Tabs
          w={["100vw", "100vw"]}
          fontSize="1rem"
          isFitted
          color="gray.600"
          colorScheme="cyan"
        >
          <TabList
            mb="2em"
            fontWeight="bold"
            paddingRight={[0, "25vw"]}
            paddingLeft={[0, "25vw"]}
          >
            <Tab>HOME</Tab>
            <Tab>CAREER</Tab>
            <Tab>PRODUCT</Tab>
            <Tab>
              <Link href="/product">
                <a>aaa</a>
              </Link>
            </Tab>
          </TabList>
          <TabPanels
            paddingRight={[0, "20vw"]}
            paddingLeft={[0, "20vw"]}
            alignItems="center"
            justifyContent="center"
          >
            <TabPanel>
              <Home contents={home} />
            </TabPanel>
            <TabPanel>
              <Career contents={career} />
            </TabPanel>
            <TabPanel>
              <Product contents={product} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
