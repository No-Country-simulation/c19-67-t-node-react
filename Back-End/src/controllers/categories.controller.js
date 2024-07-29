import { prisma } from '../index.js'

const allCategories = async () => {
  const categories = await prisma.category.findMany({
    include: {
      meditation: true,
    },
  })
  return categories
}

const createCategories = async (data) => {
  try {
    const category = await prisma.category.create({
      data,
    })
    return category
  } catch (error) {
    throw new Error(`La categoria no fue creada con exito ${error.message} `)
  }
}

export { allCategories, createCategories }
