import {
  allMeditation,
  createMeditation,
} from '../controllers/meditation.controller.js'

const getMeditationHandler = async (req, res) => {
  const meditation = await allMeditation()
  res.status(200).json(meditation)
}

const handlerCreateMeditation = async (req, res) => {
  const meditation = await createMeditation(req.body)
  res.status(201).json(meditation)
}

export { getMeditationHandler, handlerCreateMeditation }
