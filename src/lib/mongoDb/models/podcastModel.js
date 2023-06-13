import { Schema, model, models } from "mongoose";

const podcastSchema = new Schema(
  {
    trackName: String,
    artistName: String,
    kind: String,
    artworkUrl600: String,
    trackId: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true },
);

podcastSchema.index({ kind: 1 });

const Podcast = models.podcast || model("podcast", podcastSchema);

export default Podcast;
