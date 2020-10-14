import { useEffect } from "react";
import styled from "styled-components";

const GradientBar = ({ colors, octaves }) => {
  useEffect(() => {
    const ranges = octaves.map((o) => o.range);
    ranges.map((range) => {
      console.log(range.max - range.min);
    });
  }, [octaves]);

  return (
    <Styled.GradientBar>
      <div>
        {colors.map((col) => {
          return <Styled.Col key={col.color} color={col.color} />;
        })}
        <Styled.Labels>
          {octaves.map((octave) => (
            <li key={octave.key}>
              <span>{octave.title}</span>
              <strong>
                {octave.range.min}Hz - {octave.range.max} Hz
              </strong>
            </li>
          ))}
        </Styled.Labels>
      </div>
    </Styled.GradientBar>
  );
};

const Styled = {};

Styled.GradientBar = styled.div`
  overflow: hidden;
  position: sticky;
  left: 0;
  top: 143px;
  width: 100%;
  min-width: 1680px;
  padding-left: 192px;
  background-color: #1a202c;
  z-index: 5;

  @media (min-width: 1680px) {
    padding-left: 11.43vw;

    &:before {
      width: calc(11.43vw + 40px);
    }
  }

  div {
    display: flex;
    flex-wrap: nowrap;
  }
`;

Styled.Col = styled.div`
  position: relative;
  min-width: 124px;
  width: 7.38vw;
  height: 45px;
  background: ${(props) => props.color};
  border-radius: 20px;
  filter: blur(50px);
`;

Styled.Labels = styled.ul`
  list-style: none;
  display: inline-flex;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  padding-left: 192px;

  @media (min-width: 1680px) {
    padding-left: 11.43vw;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 271px;
    /* width: 16.07vw; */
    font-family: Helvetica;
    font-size: 11px;
    color: #ffffff;
    letter-spacing: -0.28px;
    text-align: center;

    &:nth-child(1) {
      min-width: 281px;
      width: 16.73vw;
    }

    &:nth-child(2) {
      min-width: 282px;
      width: 16.73vw;
    }

    &:nth-child(3) {
      min-width: 191px;
      width: 11.37vw;
    }

    &:nth-child(4) {
      min-width: 247px;
      width: 14.7vw;
    }

    &:nth-child(5) {
      min-width: 187px;
      width: 11.13vw;
    }

    &:nth-child(6) {
      min-width: 122px;
      width: 7.26vw;
    }

    &:nth-child(7) {
      min-width: 188px;
      width: 11.19vw;
    }
  }

  strong,
  span {
    display: block;
    width: 100%;
    margin: 0;
  }
`;

export default GradientBar;
