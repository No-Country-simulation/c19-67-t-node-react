import { Router } from 'express'
import {
  getMeditationHandler,
  handlerCreateMeditation,
} from '../handlers/meditation.handler.js'

const router = Router()

router.get('/', getMeditationHandler)
router.post('/', handlerCreateMeditation)

export default router
