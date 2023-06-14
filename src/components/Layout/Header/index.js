import { useState } from "react";
import styled from "styled-components";

import { SearchInput } from "./SearchInput";
import { ArrowRight } from "../../../../public/ArrowRight";
import { Options } from "../../../../public/Options";

const HeaderContainer = styled.div`
  display: flex;
  padding: 8px 10px;
  color: white;
  align-items: center;
  justify-content: center;
`;

const ArrowsContainer = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-left: 5px;
  font-size: 22px;
  line-height: 22px;
  & > svg {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  & > button {
    margin-right: 5px;
    padding: 7px 12px;
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: rgba(255, 255, 255, 0) 0px 1px 1px inset;
    background: linear-gradient(rgb(64, 103, 140), rgb(44, 83, 120));
    border-radius: 5px;
    color: white;
    transition: all 0.25s cubic-bezier(0.05, 0.03, 0.35, 1) 0s;
    font-size: 13px;
    font-weight: 500;
    &:hover {
      filter: brightness(1.25);
    }
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <ArrowsContainer>
        <ArrowRight
          styles={{
            marginRight: 10,
            transform: "rotate(180deg)",
          }}
        />
        <ArrowRight />
      </ArrowsContainer>

      <SearchInput />

      <ButtonsContainer>
        <button onClick={() => {}}>Log in</button>
        <button onClick={() => {}}>Sign up</button>
      </ButtonsContainer>
      <Options style={{ cursor: "pointer" }} />
    </HeaderContainer>
  );
};
