import styled from "styled-components";
import Image from "next/image";

import { Options } from "../../../../public/Options";
import { randomColor } from "../../../../utils/helperFunctions";

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(46, 46, 56);
  padding-bottom: 7px;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  & > svg {
    color: rgb(46, 46, 56);
    & > :hover {
      color: white;
    }
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const ArtistName = styled.div`
  font-size: 12px;
  font-weight: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 210px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const TrackName = styled.div`
  font-size: 14px;
  font-weight: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  max-width: 210px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Episode = ({ episode }) => {
  return (
    <Container>
      <Image
        width={50}
        height={50}
        style={{ borderRadius: 3, marginRight: 10 }}
        src={episode.artworkUrl600}
        alt="cover image"
      />
      <DetailsContainer>
        <TrackName>{episode.trackName}</TrackName>
        <ArtistName style={{ color: randomColor() }}>{episode.artistName}</ArtistName>
      </DetailsContainer>
      <Options style={{ cursor: "pointer" }} />
    </Container>
  );
};
