import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
} from '../controllers/user.controller.js'

export const handlerAllUser = async (req, res) => {
  const users = await getUsers()
  res.status(200).json(users)
}

export const handlerUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)
    res.json({ data: user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const handlerCreateUser = async (req, res) => {
  try {
    const user = await createUser(req.body)

    res.status(201).json({ data: user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const handlerUpdateUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await updateUser(id, req.body)
    res.json({ data: user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
