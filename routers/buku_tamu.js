const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
  res.json([{ name: 'test' }])
})

module.exports = Router
