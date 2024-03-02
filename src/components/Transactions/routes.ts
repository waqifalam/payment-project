import express from 'express';

import { controller } from './controllers'

export const transactionsRoutes = express.Router();

transactionsRoutes.get('/:cardId', async (req, res) => {
  const cardId = req.params.cardId;
  const cardTransactions = await controller.getCardTransactions(cardId)
  res.json(cardTransactions);
});

transactionsRoutes.post('/', async (req, res) => {
  const transaction = {
    card_id: req.body.card_id,
    amount: req.body.amount,
    merchant: req.body.merchant,
    merchant_category: req.body.merchant_category,
  }
  const createdTransaction = await controller.processCardTransaction(transaction);
  res.json(createdTransaction);
})
