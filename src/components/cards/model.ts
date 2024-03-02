import { DataTypes } from 'sequelize';

import { sequelize } from '../../lib/sequelize';

export const Cards = sequelize.define('Cards', {
  card_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verification_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiry_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valid_from: {
    type: DataTypes.DATE
  }
}, {});
