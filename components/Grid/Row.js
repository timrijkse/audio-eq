import { useRef } from "react";
import styled from "styled-components";

import Block from "./Block";
import Labels from "./Labels";

const Row = ({ index, colors, items }) => {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <Styled.Row>
        {colors.map((col, i) => {
          return (
            <Block
              key={col.id}
              index={col.id}
              cols={col.cols}
              color={col.color}
              range={col.range}
              index={i}
              opacity={parseInt(index) % 2 === 0 ? 1 : 0.9}
            />
          );
        })}
        <Labels el={ref} items={items} />
      </Styled.Row>
    </div>
  );
};

const Styled = {};

Styled.Row = styled.div`
  position: relative;
  display: flex;
  margin-left: 192px;

  @media (min-width: 1680px) {
    margin-left: 11.43vw;
  }
`;

export default Row;
