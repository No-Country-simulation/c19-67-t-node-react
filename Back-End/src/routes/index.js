import { Router } from 'express'
import userRouter from './user.route.js'
import meditationRoute from './meditation.route.js'
import categorieRoute from './categories.route.js'

const routerAPI = (app) => {
  const router = Router()
  app.use('/api', router)
  router.use('/user', userRouter)
  router.use('/meditation', meditationRoute)
  router.use('/categories', categorieRoute)
}

export default routerAPI
