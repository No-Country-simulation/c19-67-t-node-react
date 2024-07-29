import { prisma } from '../index.js'

const allMeditation = async () => {
  const meditation = await prisma.meditation.findMany({
    include: {
      category: true,
    },
  })
  return meditation
}

const createMeditation = async (data) => {
  const meditation = await prisma.meditation.create({
    data,
  })
  return meditation
}

export { allMeditation, createMeditation }
