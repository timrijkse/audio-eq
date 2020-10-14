import DefaultLayout from "../layouts/layout";
import Row from "../components/Grid/Row";
import Sidebar from "../components/Grid/Sidebar";
import TopBar from "../components/Grid/TopBar";
import GradientBar from "../components/Grid/GradientBar";
import styled from "styled-components";
import { useRef, useState } from "react";

import categories from "../data/categories";
import sounds from "../data/sounds";
import colors from "../data/colors";
import octaves from "../data/octaves";

export default function Home() {
  const ref = useRef();
  const [scrollLeft, setScrollLeft] = useState(0);

  const getSounds = (keys) => {
    return sounds.filter((sound) => keys.includes(sound.key));
  };

  const onScroll = (e) => {
    setScrollLeft(ref.current.scrollLeft);
  };

  return (
    <DefaultLayout>
      <GradientBar colors={colors} octaves={octaves} />

      <GradientMask />

      {/* <Styled.GridWrapper> */}
      <Sidebar categories={categories} sounds={sounds} />

      {/* <Grid ref={ref} onScroll={onScroll}> */}
      <div style={{ position: "absolute", top: "188px" }}>
        {categories.map((category) => {
          return category.rows.map((row, i) => {
            return (
              <>
                {i === 0 && <TopBar scrollLeft={scrollLeft} colors={colors} />}
                <Row index={i} colors={colors} items={getSounds(row.items)} />
              </>
            );
          });
        })}
      </div>
      {/* </Grid> */}
      {/* </Styled.GridWrapper> */}
    </DefaultLayout>
  );
}

const Styled = {};

const Grid = styled.div`
  position: relative;
  overflow: scroll;
  width: 100vw;

  > div {
    position: relative;
  }
`;

Styled.GridWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

const GradientMask = styled.div`
  position: fixed;
  left: 0;
  top: 140px;
  width: 210px;
  height: 48px;
  background: linear-gradient(
    90deg,
    #1a202c 0%,
    #1a202c 90%,
    rgba(26, 32, 44, 0)
  );
  z-index: 6;
`;
