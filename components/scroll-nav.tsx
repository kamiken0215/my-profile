import React, { FC } from "react";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { Box, Center } from "@chakra-ui/react";
import styles from "./scroll-nav.module.css";

type Props = {
  idMap: Map<string, string>; // key:id,value:title
};

const ScrollNav: FC<Props> = ({ idMap }) => {
  if (idMap.size == 0) {
    return <></>;
  } else {
    //  create id List from idMap
    const idList = Array.from(idMap.keys());
    const titleList = Array.from(idMap.values());

    return (
      <nav style={{ position: "sticky", top: "0" }}>
        <ul className={styles.ul}>
          {idList.map((value, index) => (
            <li key={index}>
              <Scroll
                activeClass="active"
                to={value}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={styles.a}
              >
                {titleList[index]}
              </Scroll>
            </li>
          ))}
          <Box minH="60vh" borderLeftWidth="thin" marginLeft="1rem"></Box>
          <li>
            <Link href="/">
              <a className={styles.a}> &gt; home</a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a className={styles.a}> &gt; career</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a className={styles.a}> &gt; product</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default ScrollNav;
