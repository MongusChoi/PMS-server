const { FAILED_MESSAGE: { INTERNAL_ERROR } } = require('./common')

class Message {
  constructor (message) {
    this.message = message
  }
}

class SuccessMessage extends Message {
  constructor(data) {
    super('success')
    this.data = data
  }
}

class FailedMessage extends Message {
  constructor (data) {
    super('error')
    console.log(data)
    this.error_code = data.ERR_CODE
    this.description = data.DESCRIPTION
  }
}

class InternalErrorMessage extends Message {
  constructor() {
    super(INTERNAL_ERROR)
  }
}

module.exports = {
  Message,
  SuccessMessage,
  FailedMessage,
  InternalErrorMessage
}