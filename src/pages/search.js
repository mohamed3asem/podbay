import { Suspense } from "react";
import styled from "styled-components";

import { EpisodesSection } from "../components/EpisodesSection";
import { Podcastsection } from "../components/PodcatsSection";
import { fetchSavepodcasts } from "../utils/Controllers/fetchSavePodcats";
import { EmptyView } from "../components/EmptyView";

const Container = styled.div`
  margin-top: 20px;
  padding: 30px 0px 0px 0px;
  display: flex;
  color: white;
  flex-direction: column;
`;

export default function Search({ empyView, podcasts, episodes, searchString }) {
  if (empyView) {
    return <EmptyView />;
  }

  return (
    <Suspense fallback={() => <></>}>
      <Container>
        {podcasts.length ? <Podcastsection podcasts={podcasts} title={`Top podcasts for ${searchString}`} /> : null}

        {episodes.length ? <EpisodesSection episodes={episodes} title={`Top episodes for ${searchString}`} /> : null}
      </Container>
    </Suspense>
  );
}

export const getServerSideProps = async ({ query, res: response }) => {
  try {
    const searchString = query.q;
    if (!searchString) {
      return {
        props: {
          empyView: true,
          podcasts: [],
          episodes: [],
          searchString,
        },
      };
    }

    const { podcasts, episodes } = await fetchSavepodcasts(searchString);

    response.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    return { props: { podcasts, episodes: episodes.slice(0, 15), searchString, empyView: false } };
  } catch (e) {
    return {
      props: {
        empyView: true,
        podcasts: [],
        episodes: [],
        searchString,
      },
    };
  }
};
