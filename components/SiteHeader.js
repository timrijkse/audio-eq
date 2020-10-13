import styled from "styled-components";

export default () => {
  return (
    <Styled.SiteHeader>
      <article>
        <h2>Audio frequency spectrum</h2>
        <h1>EQ cheat sheet</h1>
      </article>

      <nav>
        <ul>
          <li>
            <Styled.NavLink>Tips</Styled.NavLink>
          </li>
        </ul>
      </nav>
    </Styled.SiteHeader>
  );
};

const Styled = {};

Styled.SiteHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  background-color: #1a202c;
  justify-content: space-between;
  height: 144px;
  padding: 40px 32px;
  color: #fff;
  z-index: 3;

  article {
    margin: 0;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: -0.38px;
    line-height: 40px;
    margin: 0;
    color: currentColor;
  }

  h2 {
    margin: 0 0 10px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 11px;
    color: #718096;
    text-transform: uppercase;
    letter-spacing: 0.28px;
    line-height: 16px;
  }
`;

Styled.NavLink = styled.a`
  text-decoration: none;
`;
