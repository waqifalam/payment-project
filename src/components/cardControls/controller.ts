import { CardControls } from "./model"

export const controller = {
  getCardControls: async (cardId: string) => {
    const cardControls = await CardControls.findAll({
      where: {
        card_id: cardId,
      }
    })

    return cardControls;
  },

  createCardControl: async (card_id: string, control_type: string, control_condition: string) => {
    // TODO: Check if cardId is a valid card that exists
    const cardControl = await CardControls.create({
      card_id,
      control_type,
      control_condition,
    })
    return cardControl;
  },

  deleteCardControl: async (cardControlId: string) => {
    await CardControls.destroy({
      where: {
        id: cardControlId,
      },
    });
  }
}