import connectMongo from "../connectMongo";
import Podcast from "../../lib/mongoDb/models/podcastModel";

export const fetchSavepodcasts = async (searchString) => {
  try {
    let data = await fetch(`https://itunes.apple.com/search?term=${searchString}`);
    data = await data.json();

    await connectMongo();
    const podcastsUpdateOperations = [];
    const podcasts = [];
    const episodes = [];

    data.results.forEach((item) => {
      if (!item.trackId) return;
      const newItem = {
        trackName: item.trackName || "",
        artistName: item.artistName || "",
        kind: item.kind === "podcast" ? item.kind : "episode",
        artworkUrl600: item.artworkUrl600 || item.artworkUrl100,
        trackId: item.trackId,
      };

      if (newItem.kind === "podcast") {
        podcasts.push(newItem);
      } else {
        episodes.push(newItem);
      }

      podcastsUpdateOperations.push({
        updateOne: {
          filter: {
            trackId: item.trackId,
          },
          update: { ...newItem },
          upsert: true,
        },
      });
    });
    try {
      const queryResult = await Podcast.bulkWrite(podcastsUpdateOperations);
    } catch (e) {
      console.log(e);
    }

    return { podcasts, episodes: episodes.slice(0, 15) };
  } catch (e) {
    console.log("error", e, "=====================");
    return { podcasts: [], episodes: [] };
  }
};
