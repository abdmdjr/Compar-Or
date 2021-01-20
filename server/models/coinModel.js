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
		'goldavenue com': { type: [], default: undefined },
		'lingor fr': { type: [], default: undefined },
		'aucoffre com': { type: [], default: undefined },
		'bullionbypost fr': { type: [], default: undefined },
		'bdor fr': { type: [], default: undefined }
	},
	description: {
		type: Array,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	chart: {
		goldavenue: {
			data: Array,
			createdAt: Array
		},
		lingor: {
			data: Array,
			createdAt: Array
		},
		aucoffre: {
			data: Array,
			createdAt: Array
		},
		bullionbypost: {
			data: Array,
			createdAt: Array
		},
		bdor: {
			data: Array,
			createdAt: Array
		}
	}
})

const Coin = mongoose.model('Coin', CoinSchema)
module.exports = Coin
