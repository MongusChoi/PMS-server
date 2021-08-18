const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const positionColl = connection.collection('position')

module.exports = {
  UpdateItem: async (param = {}) => {
    const { _id, name, code } = param
    const updateQuery = { $set: {} }

    if (name) updateQuery.$set.name = name
    if (code) updateQuery.$set.code = code

    return await positionColl.updateOne({ _id: ObjectId(_id) }, updateQuery)
  }
}