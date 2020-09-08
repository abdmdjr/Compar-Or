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
		'Gold Avenue': { type: [], default: undefined },
		Lingor: { type: [], default: undefined },
		'Au Coffre': { type: [], default: undefined }
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
