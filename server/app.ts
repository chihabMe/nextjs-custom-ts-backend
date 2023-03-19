import express from "express";
import next from "next";
import { parse } from "url";

const runServer = () => {
  const dev = process.env.NODE_ENV != "production";
  console.log(
    "is node in the development mode  ",
    dev,
    " mode=",
    process.env.NODE_ENV
  );
  const nextApp = next({ dev });
  const app = express();
  const handle = nextApp.getRequestHandler();
  nextApp.prepare().then(() => {
    app.get("/api/v1/hello", (req, res) => res.json("hello world"));
    app.get("*", async (req, res) => {
      const url = parse(req.url, true);
      return await handle(req, res, url);
    });
    app.use((req, res, next) => {
      res.sendStatus(404);
    });
    app.listen(process.env.PORT ?? 3000, () => {
      console.log("running on prt 3000");
    });
    return app;
  });
};

module.exports = runServer();
