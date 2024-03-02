import { assert } from "chai";

import { controller } from "../src/components/cards/controllers";
import { sequelize } from "../src/lib/sequelize";
import { Cards } from "../src/components/cards/model";

const sampleCard = {
  name: "Waqif",
  number: "24435",
  verification_number: "1244",
  expiry_date: "01 Jan 2026",
  valid_from: "01 Jan 2023"
};

describe("Card Controller Test", () => {
  let card;
  before(async () => {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    card = await Cards.create(sampleCard);
  })

  context('Create card', () => {
    it('should create appropriate card', async () => {
      const createdCard = await controller.createCard(sampleCard.name, sampleCard.number, sampleCard.verification_number, sampleCard.expiry_date, sampleCard.valid_from);
      console.log(createdCard);
    });
  });

  context('Get Card', () => {
    it ('should get sample card', async () => {
      const cards = await controller.getCards();
      console.log({ cards });
    })
  })
});