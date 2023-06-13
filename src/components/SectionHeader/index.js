import styled from "styled-components";

import { Options } from "../../../public/Options";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(46, 46, 56);
  padding: 0px 20px 15px 20px;
  justify-content: space-between;
`;

export const SectionHeader = ({ children, title }) => {
  return (
    <Container>
      <span>{title}</span>
      {children}

      <Options style={{ cursor: "pointer" }} />
    </Container>
  );
};
