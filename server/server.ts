import * as Path from 'node:path'

import express from 'express'

const server = express()
server.use(express.json())

// ADD YOUR API ROUTES HERE
import booksRoutes from './routes/books'
server.use('/api/v1/books', booksRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
