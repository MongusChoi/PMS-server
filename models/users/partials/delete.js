const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const userColl = connection.collection('users')

module.exports = {
  DeleteItem: async (param = {}) => {
    const { _id } = param

    return userColl.deleteOne({ _id: new ObjectId(_id) })
  }
}