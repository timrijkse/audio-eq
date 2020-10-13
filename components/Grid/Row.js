import { useRef } from "react";
import styled from "styled-components";

import Block from "./Block";
import Labels from "./Labels";

const Row = ({ colors, items }) => {
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
  padding-left: 192px;

  @media (min-width: 1680px) {
    padding-left: 11.43vw;
  }

  > div {
    position: relative;
  }

  &:nth-child(even):after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

export default Row;
