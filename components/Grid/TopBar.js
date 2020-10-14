import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TopBar = ({ colors, scrollLeft }) => {
  return (
    <Styled.TopBar>
      {colors.map((col, i) => {
        return (
          <li key={col.id}>
            <span>{col.range.max} Hz</span>
          </li>
        );
      })}
    </Styled.TopBar>
  );
};

const Styled = {};

Styled.TopBar = styled.div`
  position: sticky;
  top: 188px;
  display: flex;
  align-items: center;
  height: 32px;
  background: #2d3748;
  list-style: none;
  margin: 0;
  padding: 0;
  background: #2d3748;
  box-shadow: inset 1px 0 0 0 #4a5568;
  padding-left: 192px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 11px;
  color: #ffffff;
  letter-spacing: 0;
  z-index: 3;

  li {
    position: relative;
    min-width: 124px;
    width: 7.38vw;
    height: 100%;
    border-right: 1px solid #4a5568;

    &:last-child {
      span {
        display: none;
      }
    }
  }

  span {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background: #2d3748;
    white-space: nowrap;
  }

  strong {
    display: block;
  }

  @media (min-width: 1680px) {
    padding-left: 11.43vw;
  }
`;

export default TopBar;
