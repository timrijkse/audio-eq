import { useEffect, createRef, useState } from "react";
import styled from "styled-components";

const Block = ({ index, cols, color, registerCoords, range, opacity = 1 }) => {
  const renderColumns = (cols) => {
    const columns = [];

    for (let i = 0; i < cols; i++) {
      const diff = Math.abs(range.max - range.min);
      const min = range.min + (diff / cols) * i;
      const max = range.min + (diff / cols) * (i + 1);

      columns.push(
        <Styled.Col
          columns={cols}
          key={i}
          data-min={min}
          data-max={max}
        ></Styled.Col>
      );
    }

    return columns;
  };

  return (
    <Styled.Block color={color} opacity={opacity}>
      {renderColumns(cols)}
    </Styled.Block>
  );
};

const Styled = {};

Styled.Block = styled.div`
  display: flex;
  min-width: 124px;
  width: 7.38vw;
  /* height: 4.76vw; */
  height: 80px;
  background-color: ${(props) => props.color};
  /* z-index: ${(props) => props.index}; */
  opacity: ${(props) => props.opacity};
`;

Styled.Col = styled.div`
  opacity: 0.15;
  width: ${(props) => `${100 / props.columns}%` || `100%`};
  height: 80px;
  border-right: 1px solid #edf2f7;
`;

export default Block;
