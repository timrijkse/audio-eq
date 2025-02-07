import styled from "styled-components";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import SiteHeader from "../components/SiteHeader";

export const GlobalStyle = createGlobalStyle`
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
  
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </Head>
      <Normalize />
      <GlobalStyle />

      <SiteHeader />

      {children}
    </>
  );
};

const Styled = {};

Styled.Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export default DefaultLayout;
