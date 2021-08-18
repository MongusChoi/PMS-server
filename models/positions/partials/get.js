const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const positionColl = connection.collection('position')

module.exports = {
  GetList: async (param = {}, options = {}) => {
    const { name, code } = param
    const { skip, limit } = options
    const filter = {}

    if (name) filter.name = name
    if (code) filter.code = code

    const list = await positionColl.find(filter, {
      projection: {
        skip,
        limit
      }
    }).toArray()

    const count = await positionColl.countDocuments(filter)

    return {
      list,
      count
    }
  },
  
  GetItem: async (param = {}) => {
    const { _id } = param
    return await positionColl.findOne({ _id: ObjectId(_id) })
  }
}