import styled from "styled-components";

import { NavItem } from "./NavItem";
import { items, yourItems } from "../staticNavItems";

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StuffTitle = styled.div`
  color: rgb(163, 163, 168);
  margin-top: 20px;
  margin-bottom: 5px;
  padding-left: 15px;
  margin-left: 3px;
  text-transform: uppercase;
  font-size: "GT America Expanded Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 12px;
  font-weight: bold;
`;

export const NavItems = () => {
  return (
    <NavItemsContainer>
      {items.map(({ imageUrl, title, to, activeImageUrl, disabled }, index) => (
        <NavItem
          key={index}
          imageUrl={imageUrl}
          title={title}
          to={to}
          activeImageUrl={activeImageUrl}
          disabled={disabled}
        />
      ))}
      <StuffTitle>YOUR STUFF</StuffTitle>

      {yourItems.map(({ imageUrl, title, to, activeImageUrl, disabled }, index) => (
        <NavItem
          key={index}
          imageUrl={imageUrl}
          title={title}
          to={to}
          activeImageUrl={activeImageUrl}
          disabled={disabled}
        />
      ))}
    </NavItemsContainer>
  );
};
