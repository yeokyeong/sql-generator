import express from "express";
import cors from "cors";
import "reflect-metadata";
import generate from "./src/generate.js";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

const prisma = new PrismaClient();

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

/*
  /business-open-close-stats?businessName=이태원
  /business-open-close-stats?year=2024
  /business-open-close-stats?sort=stor_co&order=desc
  /business-open-close-stats?offset=1&limit=50
*/
app.get("/business-open-close-stats", async (req, res) => {
  const { offset = 0, limit = 20, sort, order, year, businessName } = req.query;
  let where = {};
  let orderBy = {};
  try {
    if (year) {
      where = {
        stdr_yyqu_cd: {
          startsWith: year ? year.toString() : "",
        },
      };
    }
    if (businessName) {
      where = {
        ...where,
        trdar_cd_nm: {
          contains: businessName ? businessName.toString() : "",
        },
      };
    }
    if (sort && order) {
      orderBy = {
        [sort]: order,
      };
    }

    const [data, count] = await prisma.$transaction([
      prisma.business_open_close_stats.findMany({
        skip: offset ? (parseInt(offset) - 1) * limit : 0,
        take: parseInt(limit),
        where,
        orderBy,
      }),
      prisma.business_open_close_stats.count({ where }),
    ]);

    res.json({
      pagination: {
        total: count,
      },
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
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
