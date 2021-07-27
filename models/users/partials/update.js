const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const userColl = connection.collection('users')
const crypto = require('crypto')
const { SECRET } = require('../../../global')

module.exports = {
  UpdateItem: async (param = {}) => {
    const {
      _id,
      password,
      name,
      position,
      part,
      email,
      joinDate,
      ip
    } = param

    let updateQuery = { $set: {} }

    if (password) {
      const encryptPassword = await crypto.createHmac('sha1', SECRET).update(password).digest('base64')
      updateQuery.$set.password = encryptPassword
    }
    if (name) updateQuery.$set.name = name
    if (position) updateQuery.$set.position = position
    if (part) updateQuery.$set.part = part
    if (email) updateQuery.$set.email = email
    if (joinDate) updateQuery.$set.joinDate = joinDate
    if (ip) updateQuery.$set.ip = ip

    return await userColl.updateOne({ _id: ObjectId(_id) }, updateQuery)
  }
}