const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const partColl = connection.collection('parts')

module.exports = {
  DeleteItem: async (param = {}) => {
    const { _id } = param
    return await partColl.deleteOne({ _id: ObjectId(_id) })
  }
}