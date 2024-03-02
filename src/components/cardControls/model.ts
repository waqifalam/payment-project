import { DataTypes } from 'sequelize';

import { sequelize } from '../../lib/sequelize';

export const CardControls = sequelize.define('CardControls', {
  card_id: {
    type: DataTypes.STRING,
    references: {
      model: 'Cards',
      key: 'card_id',
    },
    allowNull: false
  },
  control_type: {
    type: DataTypes.ENUM('category', 'merchant', 'maxAmount', 'minAmount'),
    allowNull: false,
  },
  control_condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {});
