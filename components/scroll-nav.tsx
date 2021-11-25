import React, { FC } from "react";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";

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
        <ul style={{ listStyle: "none" }}>
          {idList.map((value, index) => (
            <li key={index}>
              <Scroll
                activeClass="active"
                to={value}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {titleList[index]}
              </Scroll>
            </li>
          ))}
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a>career</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>product</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default ScrollNav;
