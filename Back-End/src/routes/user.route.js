import { Router } from 'express'
import {
  handlerCreateUser,
  handlerAllUser,
  handlerUpdateUser,
  handlerUser,
} from '../handlers/user.handler.js'

const router = Router()

router.get('/', handlerAllUser)
router.get('/:id', handlerUser)
router.post('/', handlerCreateUser)
router.put('/:id', handlerUpdateUser)

export default router
