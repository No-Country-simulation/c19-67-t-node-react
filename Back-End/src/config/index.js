import dotenv from 'dotenv'
dotenv.config()

const { NAME_DATABASE, PORT } = process.env

const config = {
  port: PORT || 4000,
  databaseName: NAME_DATABASE,
}

export default config
