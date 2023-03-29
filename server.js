const express = require('express'),
    cors = require('cors'),
    router = require('./router')

const server = async () => {
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    app.use('/uploads', express.static('uploads'))
    app.use('/api', router)
    app.get('/api/check-health', (_, res) => {
      res.status(200).send('Application Up')
    })
  
    // handle 404
    app.get('*', (_, res) => {
      res.status(404).send('Opps! not found...')
    })
  
    return app
}

module.exports = server