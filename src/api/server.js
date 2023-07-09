import express from "express";
import hiscores from "osrs-json-hiscores";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/stats/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const stats = await hiscores.getStats(username);
    res.json(stats);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving stats." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
