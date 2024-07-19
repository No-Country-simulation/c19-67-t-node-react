import express from 'express'
import morgan from 'morgan'
import routerUser from './user.route.js'

const server = express()

server.use(morgan('dev'))
server.use(express.json())

server.use('/api/user', routerUser)

export default server
