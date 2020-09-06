const mongoose = require('mongoose')

const CoinSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	gr: {
		type: String,
		required: true
	},
	prices: {
		'Gold Avenue': { type: Array },
		Lingor: { type: Array },
		'Au Coffre': { type: Array }
	},
	img: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	}
})

const Coin = mongoose.model('Coin', CoinSchema)
module.exports = Coin
