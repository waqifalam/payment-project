import express from "express";
import dotenv from "dotenv";

import { cardRoutes } from "./components/cards/routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Left blank");
});

app.use('/cards', cardRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
