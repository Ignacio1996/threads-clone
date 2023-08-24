import { Thread } from "@/db/models/thread";
import connectDB from "@/db/connectToDb";

// Connect to the database
connectDB();

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const thread = await Thread.findById(id);

        if (!thread) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: thread });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const thread = await Thread.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!thread) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: thread });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedThread = await Thread.deleteOne({ _id: id });

        if (!deletedThread) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
