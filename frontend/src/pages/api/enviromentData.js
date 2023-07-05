import { createRouter } from "next-connect";
import db from "../../db";

const router = createRouter();

router.get(async (req, res) => {
  try {
    const overviewData = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM environment", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    res.status(200).json(overviewData);
  } catch (error) {
    console.error("Error retrieving overview data:", error);
    res.status(500).json({ message: "Error retrieving overview data" });
  }
});

export default router.handler();
