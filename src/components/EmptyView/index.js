import styled from "styled-components";

const Container = styled.div`
  margin: 80px auto;
  color: rgba(255, 255, 255, 0.7);
`;

export const EmptyView = () => {
  return <Container>Type in a search term to start.</Container>;
};
