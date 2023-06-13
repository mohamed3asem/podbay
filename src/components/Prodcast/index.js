import styled from "styled-components";
import Image from "next/image";
import { randomColor } from "../../utils/helperFunctions";

import { Options } from "../../../public/Options";

const ProdcastContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 220px;
  height: 262px;
  justify-content: space-between;
  font-size: 14px;
  margin-right: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  & > span:hover {
    text-decoration: underline;
  }
`;

export const Prodcast = ({ prodcast }) => {
  return (
    <ProdcastContainer>
      <Image width={220} height={220} style={{ borderRadius: 3 }} alt="cover title" src={prodcast.artworkUrl600} />
      <TitleContainer>
        <span>{prodcast.trackName}</span>
        <Options />
      </TitleContainer>

      <span style={{ color: randomColor(), fontSize: 12 }}>{prodcast.artistName}</span>
    </ProdcastContainer>
  );
};
