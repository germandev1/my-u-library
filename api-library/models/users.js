import Sequelize from 'sequelize'
import { sequelize } from '../database/database'

const User = sequelize.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: true
})

export default User
