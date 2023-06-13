import { Suspense } from "react";
import styled from "styled-components";

import { Podcastsection } from "../components/PodcatsSection";
import { getPodcasts } from "../utils/Controllers/getPodcasts";

const Container = styled.div`
  margin-top: 20px;
  padding: 30px 0px 0px 0px;
  display: flex;
  color: white;
  flex-direction: column;
`;

export default function Home({ podcasts, episodes }) {
  return (
    <Suspense
      fallback={() => <div style={{ width: 100, height: 100, background: "red", color: "yellow" }}>loading</div>}
    >
      <Container>
        {podcasts.length ? <Podcastsection podcasts={podcasts} title="Top podcasts for today" /> : null}
        {podcasts.length ? <Podcastsection podcasts={episodes} title="Top episodes for today" /> : null}
      </Container>
    </Suspense>
  );
}

export const getStaticProps = async () => {
  try {
    const { episodes, podcasts } = await getPodcasts();

    return { props: { podcasts, episodes }, revalidate: 10 };
  } catch (e) {
    console.log(e);
    return { props: { podcasts: [], episodes: [] } };
  }
};
