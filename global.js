require('dotenv').config()

const config = {
  MONGO_CONNECTION_STRING: 'mongodb+srv://mongus:1394218v@cluster0.scinh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  MONGO_DB_NAME: 'PMS_DB',
  SECRET: 'sBnjNWbjSsZyUgthphy',
}

module.exports = config