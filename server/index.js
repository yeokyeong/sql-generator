import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("from my API");
});

app.listen(port, () => {
  console.log("listening on port", 111, port);
});
