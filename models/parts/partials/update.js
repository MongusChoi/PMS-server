const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const partColl = connection.collection('parts')

module.exports = {
  UpdateItem: async (param = {}) => {
    const { _id, name, code } = param
    const updateQuery = { $set: {} }

    if (name) updateQuery.$set.name = name
    if (code) updateQuery.$set.code = code

    return await partColl.updateOne({ _id: ObjectId(_id) }, updateQuery)
  }
}