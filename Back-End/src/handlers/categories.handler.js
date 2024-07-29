import {
  allCategories,
  createCategories,
} from '../controllers/categories.controller.js'

const getCategoriesHandler = async (req, res) => {
  const categories = await allCategories()
  res.status(200).json(categories)
}

const postCategoriesHandler = async (req, res) => {
  try {
    const category = await createCategories(req.body)
    res.status(201).json(category)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export { getCategoriesHandler, postCategoriesHandler }
