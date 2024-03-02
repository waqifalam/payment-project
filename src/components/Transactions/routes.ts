import express from 'express';

export const transactionsRoutes = express.Router();

transactionsRoutes.get('/:cardId', (req, res) => {
  // TODO route to get all card transactions
  res.json([])
});

transactionsRoutes.post('/', (req, res) => {
  // TODO route to create a new transaction
  res.send('ok');
})
