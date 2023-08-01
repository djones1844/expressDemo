const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    requried: true 
  },
  subscribeDate: {
    type: Date,
    requried: true,
    default: Date.now
  }
})
 
module.exports = mongoose.model('Subscriber', subscriberSchema)
 