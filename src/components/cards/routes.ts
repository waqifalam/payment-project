import express from 'express';

import { controller } from './controllers';

export const cardRoutes = express.Router();

cardRoutes.get('/', async (req, res) => {
  const cards = await controller.getCards();
  res.json(cards)
});

cardRoutes.post('/', async (req, res) => {
  const {
    name,
    number,
    verification_number,
    expiry_date,
    valid_from,
  } = req.body;
  const insertedCard = await controller.createCard(name, number, verification_number, expiry_date, valid_from);
  res.send(`Card created, id: ${insertedCard.card_id}`);
})
