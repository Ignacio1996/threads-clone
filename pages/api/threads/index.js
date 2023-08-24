import { Thread } from "@/db/models/thread";
import connectDB from "@/db/connectToDb";

// Connect to the database
connectDB();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        console.log("threads 13 | got to get");
        const threads = await Thread.find({});
        res.status(200).json({ success: true, data: threads });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        console.log("threads 23 | got to post", req.body);
        const thread = await Thread.create(JSON.parse(req.body));
        res.status(201).json({ success: true, data: thread });
      } catch (error) {
        console.log("threads 26 | error", error.message);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
