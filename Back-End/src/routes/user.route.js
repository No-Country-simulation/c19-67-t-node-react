import { Router } from 'express'
import { handlerUser } from '../handlers/index.js'

const router = Router()

router.get('/', handlerUser)

export default router
