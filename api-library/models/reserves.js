import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'

const Reserve = sequelize.define('Reserves', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  copiesRequested: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  requestedDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  deliveryDate: {
    type: DataTypes.DATE,
  }
}, {
  timestamps: false
})

export default Reserve
