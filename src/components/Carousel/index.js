import React, { useState, useEffect, forwardRef } from "react";
import styled from "styled-components";
import { Prodcast } from "../Prodcast";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  margin: 0px 10px 20px 10px;
  scroll-behavior: smooth;
  width: 1px;
  flex: 1 0 auto;
  padding: 15px 0px 25px 0px;
  :hover {
    margin: 0px 10px 13px 10px;
  }
  :hover::-webkit-scrollbar {
    height: 10px;
  }
`;

const ForwardedCarousel = ({ forwardedRef, prodcasts }) => {
  return (
    <Wrapper className="carouselContainer" ref={forwardedRef}>
      {prodcasts?.map((prodcast) => (
        <Prodcast key={prodcast.trackId} prodcast={prodcast} />
      ))}
    </Wrapper>
  );
};

const Carousel = forwardRef((props, ref) => {
  return <ForwardedCarousel {...props} forwardedRef={ref} />;
});

export default Carousel;
