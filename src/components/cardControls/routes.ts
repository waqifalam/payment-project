import express from 'express';

export const cardControlsRoutes = express.Router();

cardControlsRoutes.get('/', (req, res) => {
  // TODO route to get all card controls for a card
  res.json([])
});

cardControlsRoutes.post('/', (req, res) => {
  // TODO route to create a new card control for a card
  res.send('ok');
})

cardControlsRoutes.delete('/', (req, res) => {
  // TODO route to delete a card control
  res.send('ok')
})
