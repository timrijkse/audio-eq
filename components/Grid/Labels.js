import { useEffect, useState } from "react";
import styled from "styled-components";

const Labels = ({ el, items }) => {
  const [formattedItems, setFormattedItems] = useState([]);

  useEffect(() => {
    if (!el?.current) return;

    const onResize = () => {
      const newData = [...formattedItems];

      items.forEach((item, i) => {
        const left =
          el?.current
            ?.querySelector(`[data-min="${item.range.min}"]`)
            .getBoundingClientRect().left - 192;

        const width =
          el?.current
            ?.querySelector(`[data-max="${item.range.max}"]`)
            .getBoundingClientRect().right -
          192 -
          left -
          1;

        newData[i] = { ...item, left, width };
      });

      setFormattedItems(newData);
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [el]);

  return (
    <Styled.Container>
      {formattedItems.map((item) => {
        return (
          <Styled.Label
            key={item.key}
            item={item}
            style={{
              left: `${item.left}px`,
              width: `${item.width}px`,
            }}
          >
            {item.title}
          </Styled.Label>
        );
      })}
    </Styled.Container>
  );
};

const Styled = {};

Styled.Container = styled.ul`
  position: absolute !important;
  left: 192px;
  top: 0;
  right: 0;
  display: block;
  list-style: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

Styled.Label = styled.li`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  padding: 8px;
  background: #edf2f7;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 -2px 0 0 rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #1a202c;
  letter-spacing: -0.35px;
  line-height: 24px;
`;

export default Labels;
