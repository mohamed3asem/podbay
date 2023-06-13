import connectMongo from "../connectMongo";
import Podcast from "../../lib/mongoDb/models/podcastModel";

export const getPodcasts = async () => {
  let podcasts = [],
    episodes = [];
  try {
    await connectMongo();
    const [podcastsResponse, episodesResponse] = await Promise.allSettled([
      Podcast.find(
        { kind: "podcast" },
        { _id: 0, createdAt: 0, updatedAt: 0 },
        { limit: 15, lean: true, sort: { createdAt: -1 } },
      ),
      Podcast.find(
        { kind: "episode" },
        { _id: 0, createdAt: 0, updatedAt: 0 },
        { limit: 15, lean: true, sort: { createdAt: -1 } },
      ),
    ]);

    if (podcastsResponse.status === "fulfilled") {
      podcasts = podcastsResponse.value;
    }

    if (episodesResponse.status === "fulfilled") {
      episodes = episodesResponse.value;
    }

    return { podcasts, episodes };
  } catch (e) {
    console.log(e);
    return { podcasts, episodes };
  }
};
