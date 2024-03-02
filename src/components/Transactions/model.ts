import { DataTypes } from 'sequelize';

import { sequelize } from '../../lib/sequelize';

export const Transactions = sequelize.define('Transctions', {
  card_id: {
    type: DataTypes.STRING,
    references: {
      model: 'Cards',
      key: 'card_id',
    },
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  merchant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merchant_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {});
