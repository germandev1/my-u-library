import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/users'

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    const encryptedPass = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      encryptedPass,
      role
    })

    return res.status(200).json({
      data: newUser,
      message: 'User created properly'
    })
  } catch (error) {
    return res.status(401).json({
      message: 'The user already exist'
    })
  }
  
}
