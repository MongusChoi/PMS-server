const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const positionColl = connection.collection('position')

module.exports = {
  Create: async (params = {}) => {
    const { name, code } = params

    return await positionColl.insertOne({ name, code })
  }
}