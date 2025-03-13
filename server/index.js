import express from "express";
import cors from "cors";
import generate from "./generate.js";
import db from "./connect.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

db.connect();

app.get("/business-open-close-stats", (req, res) => {
  let data;
  db.query("SELECT * FROM business_open_close_stats", function (err, rows) {
    data = rows;
    console.log(rows);
    res.json({ response: data });
  });
});

app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDesc;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ response: sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(port, () => {
  console.log("listening on port", 111, port);
});
