import express from "express";
const PORT = 4000;
const app = express();

app.get("/hello", (req, res) => {
  res.json("Hello World!");
});

app.listen(PORT, () => {
  console.log(`http-server is running on port ${PORT}`);
});
