import express from 'express';

import { controller } from './controller';

export const cardControlsRoutes = express.Router();

cardControlsRoutes.get('/:cardId', async (req, res) => {
  const cardControls = await controller.getCardControls(req.params.cardId);
  res.json(cardControls);
});

cardControlsRoutes.post('/', async (req, res) => {
  const cardControl = await controller.createCardControl(
    req.body.card_id,
    req.body.control_type,
    req.body.control_condition,
  )
  res.json(cardControl);
})

cardControlsRoutes.delete('/:cardControlId', async (req, res) => {
  await controller.deleteCardControl(req.params.cardControlId);
  res.send('Card control deleted');
})
