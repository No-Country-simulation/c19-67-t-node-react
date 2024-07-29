import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import { PrismaClient } from '@prisma/client'

import routerAPI from './routes/index.js'
import config from '../src/config/index.js'

const { port } = config
export const prisma = new PrismaClient()

const app = express()

app.use(morgan('dev'))
app.use(express.json())

routerAPI(app)

app.listen(port, () => {
  console.log(colors.magenta.bold(`server running on port ${port} `))
})
