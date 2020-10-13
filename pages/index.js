import DefaultLayout from "../layouts/layout";
import Row from "../components/Grid/Row";
import Sidebar from "../components/Grid/Sidebar";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import categories from "../data/categories";
import sounds from "../data/sounds";
import colors from "../data/colors";

export default function Home() {
  const getSounds = (keys) => {
    return sounds.filter((sound) => keys.includes(sound.key));
  };

  return (
    <DefaultLayout>
      <Styled.GridWrapper>
        <Sidebar categories={categories} sounds={sounds} />

        <Grid>
          {categories.map((category) => {
            return category.rows.map((row, i) => {
              return (
                <div key={row.key}>
                  {i === 0 && (
                    <Styled.TopBar>
                      {colors.map((col, i) => {
                        return (
                          <li key={col.id}>
                            <span>{col.range.max} Hz</span>
                          </li>
                        );
                      })}
                    </Styled.TopBar>
                  )}
                  <Row colors={colors} items={getSounds(row.items)} />
                </div>
              );
            });
          })}
        </Grid>
      </Styled.GridWrapper>
    </DefaultLayout>
  );
}

const Styled = {};

const Grid = styled.div`
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

Styled.TopBar = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background: #2d3748;
  box-shadow: inset 1px 0 0 0 #4a5568;
  height: 32px;
  padding-left: 192px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 11px;
  color: #ffffff;
  letter-spacing: 0;

  li {
    position: relative;
    min-width: 124px;
    width: 7.38vw;
    height: 100%;
    border-right: 1px solid #4a5568;
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
