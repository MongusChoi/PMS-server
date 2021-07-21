const express = require('express')
const mongoose = require('mongoose')
const { isArray } = require('util')

const global = require('./global')

const app = express()
const server = require('http').Server(app)

const port = process.env.PORT || 2008

app.get('/', (req, res) => {
  res.send('hello world!')
})

server.listen(port, function () {
  console.log('[system] Open | Port : ' + port)
})

// DB connect
mongoose.connect(global.MONGO_CONNECTION_STRING, { 
  useNewUrlParser: true, 
  autoReconnect: true, 
  reconnectTries: Number.MAX_VALUE, 
  reconnectInterval: 1000, 
  dbName: global.MONGO_DB_NAME
})

const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('[system] mongodb connect')
})