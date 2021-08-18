const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const partColl = connection.collection('parts')

module.exports = {
  Create: async (params = {}) => {
    const { name, code } = params

    return await partColl.insertOne({ name, code })
  }
}