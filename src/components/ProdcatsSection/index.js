import { useRef } from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import { ArrowRight } from "../../../public/ArrowRight";
import { SectionHeader } from "../SectionHeader";

const CarusolContainer = styled.div`
  display: flex;
  color: white;
`;

const ArrowsContainer = styled.div`
  display: flex;
  margin-left: auto;
  & > svg {
    cursor: pointer;
    border-radius: 50%;
    color: rgb(255, 255, 255, 0.5);
    &:hover {
      color: white;
      background: rgb(33, 34, 59);
      padding: 7;
    }
  }
`;
export const Prodcastsection = ({ prodcasts, searchString }) => {
  const ref = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(getComputedStyle(ref.current.children[0]).width);
      ref.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(getComputedStyle(ref.current.children[0]).width);
      ref.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

  return (
    <>
      <SectionHeader title={`Top prodcasts for ${searchString}`}>
        <ArrowsContainer>
          <ArrowRight
            onClick={prev}
            styles={{
              marginRight: 10,
              transform: "rotate(180deg)",
            }}
          />
          <ArrowRight onClick={next} />
        </ArrowsContainer>
      </SectionHeader>
      <CarusolContainer>
        <Carousel ref={ref} prodcasts={prodcasts} />
      </CarusolContainer>
    </>
  );
};
