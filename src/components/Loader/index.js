import styled from "styled-components";

const LoaderContainer = styled.div`
  position: relative;
  margin: auto;
  transform: translateY(-50px);
  & > div:nth-child(1) {
    animation-delay: -0.6s;
    border-color: rgb(155, 125, 217);
  }
  & > div:nth-child(2) {
    animation-delay: -0.4s;
    border-color: rgb(186, 111, 222);
  }
  & > div:nth-child(3) {
    animation-delay: -0.2s;
    border-color: rgb(255, 120, 201);
  }
`;

const LoadingItems = styled.div`
  position: absolute;
  top: -2px;
  left: -50px;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 2px solid rgb(155, 125, 217);
  animation: 2s cubic-bezier(0.21, 0.53, 0.56, 0.8) 0s infinite normal none running LoaderContainer;
  @keyframes LoaderContainer {
    0% {
      transform: scale(0.1);
      opacity: 1;
    }

    70% {
      transform: scale(1);
      opacity: 0.7;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const Loader = () => {
  return (
    <LoaderContainer className="LoaderContainer">
      <LoadingItems></LoadingItems>
      <LoadingItems></LoadingItems>
      <LoadingItems></LoadingItems>
    </LoaderContainer>
  );
};
