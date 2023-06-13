import styled from "styled-components";
import Image from "next/image";

import logoIcon from "../../../../public/logo.svg";
import { NavItems } from "./NavItems";

const SideNavBarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(46, 46, 56);
`;

const LogoContainer = styled.div`
  padding-top: 18px;
  padding-left: 18px;
  margin-bottom: 25px;
`;

export const SideNavBar = () => {
  return (
    <SideNavBarContainer>
      <LogoContainer>
        <Image priority src={logoIcon} alt="logo icon" />
      </LogoContainer>
      <NavItems />
    </SideNavBarContainer>
  );
};
