import express from "express";
import dotenv from "dotenv";

import { cardRoutes } from "./components/cards/routes";
import { sequelize } from './lib/sequelize';
import { cardControlsRoutes } from "./components/cardControls/routes";
import { transactionsRoutes } from "./components/Transactions/routes";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Left blank");
});

app.use('/cards', cardRoutes);
app.use('/cardControls', cardControlsRoutes);
app.use('/transactions', transactionsRoutes);

app.listen(port, async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  console.log(`Server is running at http://localhost:${port}`);
});
