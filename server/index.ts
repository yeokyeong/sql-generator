import express from "express";
import cors from "cors";
import "reflect-metadata"
import generate from "./src/generate.js";
import {AppDataSource} from "./src/data-source.ts";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


app.get("/business-open-close-stats", async (req, res) => {
  let rowData = await AppDataSource.query(
    "SELECT * FROM business_open_close_stats limit 20;"
  );

  res.json({ response: rowData });
    
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
  console.log("listening on port : ", port);
});
