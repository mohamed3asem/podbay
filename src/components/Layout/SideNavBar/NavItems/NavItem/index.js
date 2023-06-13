import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActive ? "rgb(186, 111, 222)" : "#FFF")};
  font-size: 14px;
  padding: 10px 15px;
  border-left: 3px solid transparent;
  &:hover {
    color: ${(props) => (props.isActive ? "rgb(186, 111, 222)" : "rgba(255, 255, 255, 0.75)")};
  }
`;

export const NavItem = ({ to, title, imageUrl, activeImageUrl, disabled }) => {
  const router = useRouter();
  const isActive = disabled ? false : router.asPath === to;

  return (
    <Link href={to} style={{ textDecoration: "none" }}>
      <NavItemContainer isActive={isActive}>
        <Image
          priority
          src={isActive ? activeImageUrl : imageUrl}
          alt="logo icon"
          width={18}
          height={16}
          style={{ marginRight: 10, marginLeft: 3 }}
        />
        {title}
      </NavItemContainer>
    </Link>
  );
};
