import {
  getCategoriesHandler,
  postCategoriesHandler,
} from '../handlers/categories.handler.js'
import { Router } from 'express'

const router = Router()

router.get('/', getCategoriesHandler)
router.post('/', postCategoriesHandler)

export default router
