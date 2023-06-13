import { Schema, model, models } from "mongoose";

const prodcastSchema = new Schema({
  trackName: String,
  artistName: String,
  kind: String,
  artworkUrl600: String,
  trackId: {
    type: Number,
    unique: true,
  },
});

const ProdCast = models.ProdCast || model("ProdCast", prodcastSchema);

export default ProdCast;
