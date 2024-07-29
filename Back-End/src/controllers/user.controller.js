import { prisma } from '../index.js'
import bcrypt from 'bcrypt'

const getUsers = async () => {
  const user = await prisma.user.findMany()
  return user
}

const getUserById = async (id) => {
  const user = await prisma.user.findMany({
    where: {
      id,
    },
  })
  return user
}

const createUser = async (data) => {
  try {
    const { name, email, password, role } = data
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })
    return user
  } catch (error) {
    throw new Error({ error: 'No se pudo crear el usuario' })
  }
}

const updateUser = async (id, data) => {
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
    })
    return user
  } catch (error) {
    throw new Error({ message: 'Existe un error en editar el usuario' })
  }
}

export { getUsers, getUserById, createUser, updateUser }
