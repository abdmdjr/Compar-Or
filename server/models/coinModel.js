const mongoose = require('mongoose')

const CoinSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	prices: {
		lingor: {
			price: Number,
			livraison: Number
		},
		aucoffre: {
			price: Number,
			livraison: Number
		},
		goldavenue: {
			price: Number,
			livraison: Number
		}
	},
	img: {
		type: String,
		required: true
	}
})

const Coin = mongoose.model('Coin', CoinSchema)
module.exports = Coin
