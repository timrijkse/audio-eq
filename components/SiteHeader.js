import styled from "styled-components";

const NavLink = () => {
  return (
    <Styled.Svg preserveAspectRatio="xMinYMid slice">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M0,3.5 L46.9296325,3.5 C47.5983389,3.5 48.2228015,3.16579773 48.5937331,2.60940039 L49.5,1.25 C50.0242547,0.463617991 51.0867356,0.251121799 51.8731176,0.775376472 C52.0839391,0.915924092 52.2609198,1.10153306 52.3912806,1.31880103 L55.3883467,6.31391111 C55.897841,7.16306829 56.9992456,7.43841946 57.8484028,6.92892515 C58.1221722,6.76466351 58.3471182,6.53028329 58.5,6.25 L59.4314751,4.54229574 C59.7819414,3.89977412 60.4553778,3.5 61.1872662,3.5 L111,3.5 L111,3.5"
          id="active-underline"
          stroke="#718096"
        ></path>
      </g>
    </Styled.Svg>
  );
};

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
            <Styled.NavLink active={true}>
              EQ cheat sheet
              <NavLink />
            </Styled.NavLink>
            <Styled.NavLink>
              Tips
              <NavLink />
            </Styled.NavLink>
            <Styled.NavLink>
              EQ trainer
              <NavLink />
            </Styled.NavLink>
            <Styled.NavLink>
              Suggest us
              <NavLink />
            </Styled.NavLink>
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
  z-index: 7;

  article {
    margin: 0;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
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

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

Styled.NavLink = styled.a`
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin: 0 16px;
  text-align: center;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: ${(props) => (props.active ? "#fff" : "#718096")};
  letter-spacing: -0.4px;
  padding-bottom: 10px;
  line-height: 24px;
  text-decoration: none;

  &:hover {
    svg {
      clip-path: polygon(50% 0, 50% 100%, 50% 100%, 50% 0);
      clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
    }
  }
`;

Styled.Svg = styled.svg`
  pointer-events: none;
  transition: all 100ms ease-out;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  width: 110px;
  clip-path: polygon(50% 0, 50% 100%, 50% 100%, 50% 0);
`;
