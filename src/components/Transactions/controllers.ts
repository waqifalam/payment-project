import { CardControls } from '../cardControls/model';
import { Transactions } from './model';

type TransactionData = {
  card_id: string;
  amount: number;
  merchant: string;
  merchant_category: string;
}



export const controller = {
  getCardTransactions: async (cardId: string) => {
    return Transactions.findAll({
      where: {
        card_id: cardId,
      }
    })
  },
  
  processCardTransaction: async (transaction: TransactionData) => {
    const createdTransaction = await Transactions.create(transaction);
    const cardControls = await CardControls.findAll({
      where: {
        card_id: transaction.card_id,
      }
    });
    const categoryFilter = cardControls.find((control: any) => control.control_type === 'category');
    const merchantFilter = cardControls.find((control: any) => control.control_type === 'merchant');
    const maxAmountFilter = cardControls.find((control: any) => control.control_type === 'maxAmount');
    const minAmountFilter = cardControls.find((control: any) => control.control_type === 'minAmount');
    let approved = true;
    if (
      (categoryFilter && transaction.merchant_category !== categoryFilter.control_condition) ||
      (merchantFilter && transaction.merchant !== categoryFilter.control_condition) ||
      (maxAmountFilter && transaction.amount > Number(categoryFilter.control_condition)) ||
      (minAmountFilter && transaction.amount < Number(categoryFilter.control_condition))
    ) {
      approved = false;
    }
    createdTransaction.approved = approved;
    await createdTransaction.save();
    return createdTransaction;
  }
};
