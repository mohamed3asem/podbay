import styled from "styled-components";
import Image from "next/image";
import { randomColor } from "../../../utils/helperFunctions";

import { Options } from "../../../../public/Options";

const PodcastContainer = styled.div`
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

const TextContainer = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
  overflow: hidden;
`;

export const Podcast = ({ podcast }) => {
  return (
    <PodcastContainer>
      <Image width={220} height={220} style={{ borderRadius: 3 }} alt="cover title" src={podcast.artworkUrl600} />
      <TitleContainer>
        <TextContainer>{podcast.trackName}</TextContainer>
        <Options />
      </TitleContainer>

      <TextContainer style={{ color: randomColor(), fontSize: 12 }}>{podcast.artistName}</TextContainer>
    </PodcastContainer>
  );
};
