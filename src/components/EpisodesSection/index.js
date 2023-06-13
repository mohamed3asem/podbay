import styled from "styled-components";

import { Episode } from "./Episode";
import { SectionHeader } from "../SectionHeader";

const Container = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
`;

const EpisodesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  flex-wrap: wrap;
  gap: 15px;
  column-gap: 10px;
  padding: 10px 20px;
  /* flex-direction: column; */
`;

export const EpisodesSection = ({ episodes, searchString }) => {
  return (
    <Container>
      <SectionHeader title={`Top episodes for ${searchString}`} />
      <EpisodesContainer>
        {episodes.map((episode) => (
          <Episode key={episode.trackId} episode={episode} />
        ))}
      </EpisodesContainer>
    </Container>
  );
};
