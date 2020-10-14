import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Sticky = ({ scrollLeft = 0, children }) => {
  const ref = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", onScroll, false);
    onScroll();

    return () => {
      return window.removeEventListener("scroll", onScroll, false);
    };
  }, []);

  const onScroll = () => {
    if (!ref.current) return;
    const { y } = ref.current.getBoundingClientRect();
    setIsSticky(y < 188);
  };

  return (
    <div ref={ref}>
      <Container>
        <Styled.Sticky isSticky={isSticky}>{children}</Styled.Sticky>
      </Container>
    </div>
  );
};

const Styled = {};

const Container = styled.div`
  position: relative;
  height: 32px;
  z-index: 1;
  z-index: 8;
`;

Styled.Sticky = styled.div`
  width: 100%;
  height: 32px;

  ${(props) =>
    props.isSticky &&
    `
    position: fixed;
    top: 187px;
    z-index: 8;
    `}
`;

export default Sticky;
