import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database'
import Reserve from './reserves'

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.INTEGER
  },
}, {
  timestamps: true
})

User.hasMany(Reserve, { foreignKey: 'userId', sourceKey: 'id' })
Reserve.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' })

export default User
