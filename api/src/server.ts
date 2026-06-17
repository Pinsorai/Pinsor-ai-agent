import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    project: "Pinsor AI",
    status: "running"
  });
});

app.listen(3001, () => {
  console.log("API running");
});
