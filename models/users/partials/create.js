const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const userColl = connection.collection('users')
const crypto = require('crypto')
const { SECRET } = require('../../../global')

module.exports = {
  Create: async (param = {}) => {
    const {
      id,
      password,
      name,
      position,
      part,
      email,
      joinDate,
      ip
    } = param

    const encryptPassword = crypto.createHmac('sha1', SECRET).update(password).digest('base64')

    return await userColl.insertOne({
      id,
      password: encryptPassword,
      name,
      position,
      part,
      email,
      joinDate,
      ip
    })
  }
}