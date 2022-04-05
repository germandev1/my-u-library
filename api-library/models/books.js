import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'
import Reserve from './reserves'

const Book = sequelize.define('Books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING
  },
  copies: {
    type: DataTypes.INTEGER
  },
}, {
  timestamps: false
})

Book.hasMany(Reserve, { foreignKey: 'bookId', sourceKey: 'id' })
Reserve.belongsTo(Book, { foreignKey: 'bookId', sourceKey: 'id' })

export default Book
