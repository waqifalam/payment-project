import express from 'express';

export const cardRoutes = express.Router();

cardRoutes.get('/', (req, res) => {
  // TODO route to send all cards
  res.json([])
});

cardRoutes.post('/', (req, res) => {
  // TODO route to create a new card
  res.send('ok');
})
