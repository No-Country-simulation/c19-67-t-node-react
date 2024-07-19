import server from './routes/index.js'
const port = 3001

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
