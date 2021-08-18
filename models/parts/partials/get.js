const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const partColl = connection.collection('parts')

module.exports = {
  GetList: async (param = {}, options = {}) => {
    const { name, code } = param
    const { skip, limit } = options
    const filter = {}

    if (name) filter.name = name
    if (code) filter.code = code

    const list = await partColl.find(filter, {
      projection: {
        skip,
        limit
      }
    }).toArray()

    const count = await partColl.countDocuments(filter)

    return {
      list,
      count
    }
  },
  
  GetItem: async (param = {}) => {
    const { _id } = param
    return await partColl.findOne({ _id: ObjectId(_id) })
  }
}