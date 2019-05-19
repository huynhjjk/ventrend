const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
  
    server.get('/a', (req: any, res: any) => {
      const actualPage = '/a'
      app.render(req, res, actualPage, req.query)
    })

    server.get('/b', (req: any, res: any) => {
      const actualPage = '/b'
      app.render(req, res, actualPage, req.query)
    })

    server.get('*', (req: any, res: any) => {
      return handle(req, res)
    })

    server.listen(3000, (err: any) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex: any) => {
    console.error(ex.stack)
    process.exit(1)
  })