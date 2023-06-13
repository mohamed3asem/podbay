import { Suspense } from "react";
import styled from "styled-components";

import { EpisodesSection } from "../components/EpisodesSection";
import connectMongo from "../../utils/connectMongo";
import ProdCast from "../../lib/mongoDb/models/prodcastModel";
import { Prodcastsection } from "../components/ProdcatsSection";

const Container = styled.div`
  margin-top: 20px;
  padding: 30px 0px 0px 0px;
  display: flex;
  color: white;
  flex-direction: column;
`;

export default function Search({ empyView, prodcasts, episodes, searchString }) {
  if (empyView) {
    return (
      <span style={{ margin: "80px auto", color: "rgba(255, 255, 255, 0.7)" }}>Type in a search term to start.</span>
    );
  }
  console.log(prodcasts);
  return (
    <Suspense
      fallback={() => <div style={{ width: 100, height: 100, background: "red", color: "yellow" }}>loading</div>}
    >
      <Container>
        {prodcasts.length ? <Prodcastsection prodcasts={prodcasts} searchString={searchString} /> : null}

        {episodes.length ? <EpisodesSection episodes={episodes} searchString={searchString} /> : null}
      </Container>
    </Suspense>
  );
}

export const getServerSideProps = async ({ query, res: response }) => {
  try {
    const searchString = query.q;
    console.log(searchString);
    if (!searchString) {
      return {
        props: {
          empyView: true,
        },
      };
    }
    let data = await fetch(`https://itunes.apple.com/search?term=${searchString}`);
    data = await data.json();

    console.log("conneting", data.res);
    await connectMongo();
    const prodcastsUpdateOperations = [];
    const prodcasts = [];
    const episodes = [];

    data.results.forEach((item) => {
      if (!item.trackId) return;
      const newItem = {
        trackName: item.trackName || "",
        artistName: item.artistName || "",
        kind: item.kind || "",
        artworkUrl600: item.artworkUrl600 || item.artworkUrl100,
        trackId: item.trackId,
      };
      prodcastsUpdateOperations.push({
        updateOne: {
          filter: {
            trackId: item.trackId,
          },
          update: newItem,
          upsert: true,
        },
      });
      if (newItem.kind === "podcast") {
        prodcasts.push(newItem);
      } else {
        episodes.push(newItem);
      }
    });
    const prodcast = await ProdCast.bulkWrite(prodcastsUpdateOperations);
    response.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    return { props: { prodcasts, episodes: episodes.slice(0, 15), searchString } };
  } catch (e) {
    console.log(e);
    console.log("=========");
    return {
      props: {
        empyView: true,
      },
    };
  }
};
