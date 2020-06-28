const mongoose = require('mongoose')

const CoinSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

const Coin = mongoose.model('Coin', CoinSchema)
module.exports = Coin
