// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../../utils/connectMongo";
import ProdCast from "../../../lib/mongoDb/models/prodcastModel";

export default async function handler(req, res) {
  try {
    console.log("conneting", process.env.MONGODB_URI);
    await connectMongo();
    const prodcast = ProdCast.create({ name: "fdf", email: "gfd" });

    res.status(200).json(prodcast);
  } catch (e) {
    console.log("error", e);
  }
}
