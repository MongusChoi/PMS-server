const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const positionColl = connection.collection('position')

module.exports = {
  DeleteItem: async (param = {}) => {
    const { _id } = param
    return await positionColl.deleteOne({ _id: ObjectId(_id) })
  }
}