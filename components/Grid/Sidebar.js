import styled from "styled-components";
import Sticky from "./Sticky";

const Sidebar = ({ categories, sounds }) => {
  return (
    <Styled.Aside>
      {categories.map((category) => {
        return (
          <div key={category.key}>
            <Sticky>
              <Styled.Title>{category.title}</Styled.Title>
            </Sticky>
            {category.rows.map((row) => {
              return <Styled.Row key={row.key}>{row.title}</Styled.Row>;
            })}
          </div>
        );
      })}
    </Styled.Aside>
  );
};

const Styled = {};

Styled.Aside = styled.aside`
  overflow: hidden;
  position: sticky;
  left: 0;
  /* bottom: 0; */
  min-width: 192px;
  width: 11.43vw;
  margin-top: 143px;
  background: #3d4748;
  z-index: 4;
`;

Styled.Title = styled.h2`
  min-width: 192px;
  width: 11.43vw;
  height: 32px;
  margin: 0;
  padding: 8px 32px;
  background: #1a202c;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #718096;
  letter-spacing: 0.28px;
  line-height: 16px;
  text-transform: uppercase;
`;

Styled.Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 8px 32px;
  background-color: #2d3748;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: -0.35px;
  line-height: 24px;

  &:nth-child(even) {
    background-color: #4a5568;
  }
`;

export default Sidebar;
