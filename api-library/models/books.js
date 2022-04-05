import Sequelize from 'sequelize'
import { sequelize } from '../database/database'

const Book = sequelize.define('Books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  copies: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
})

export default Book
