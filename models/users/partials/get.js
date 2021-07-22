const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const userColl = connection.collection('users')

module.exports = {
  GetList: async (param = {}, options = {}) => {
    const {
      _id,
      name,
      position,
      part,
      email,
      startDate,
      endDate,
      ip
    } = param
    const { skip, limit } = options
    const filter = {}

    if (_id) filter._id = new ObjectId(_id)
    if (name) filter.name = name
    if (position) filter.position = position
    if (part) filter.part = part
    if (email) filter.email = email
    if (startDate || endDate) {
      filter.$and = []
      if (startDate) filter.$and.push({ joinDate: { $gte: new Date(startDate) } })
      if (endDate) filter.$and.push({ joinDate: { $lte: new Date(endDate) } })
    }
    if (ip) filter.ip = ip

    const list = await userColl.find(filter,
      {
        projection: {
          name: true,
          position: true,
          part: true,
          email: true,
          joinDate: true
        },
        sort: { joinDate: -1 },
        skip,
        limit
      }).toArray()

    const count = await userColl.countDocuments(filter)

    return { list, count }
  }
}