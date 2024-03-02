import { randomUUID } from 'crypto';
import { Cards } from './model';
import { encrypt } from '../../lib/encrypt';

const SECRET_ENCRYPT = process.env.SECRET_ENCRYPT || '';

type Card = {
  card_id: string;
  name: string;
  number: string;
  verification_number: string;
  expiry_date: number;
  valid_from: number;
}

export const controller = {
  getCards: async () => {
    const cards = await Cards.findAll();
    return cards;
  },
  createCard: async (name: string, number: string, verification_number: string, expiry_date: string, valid_from: string) => {
    const card = {
      card_id: randomUUID(),
      name,
      number: encrypt(number, SECRET_ENCRYPT),
      verification_number: encrypt(verification_number, SECRET_ENCRYPT),
      expiry_date: Date.parse(expiry_date),
      valid_from: Date.parse(valid_from),
    }
    return Cards.create(card);
  }
};
