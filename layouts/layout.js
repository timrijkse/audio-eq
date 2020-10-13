import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import SiteHeader from "../components/SiteHeader";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #1A202C;
    padding-top: 148px;
  }
`;

const DefaultLayout = ({ children }) => {
  return (
    <Styled.Container>
      <Normalize />
      <GlobalStyle />

      <SiteHeader />

      {children}
    </Styled.Container>
  );
};

const Styled = {};

Styled.Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export default DefaultLayout;
