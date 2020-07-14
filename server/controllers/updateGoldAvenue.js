const goldAvenue = require('../scrapers/goldAvenue')
const Coin = require('../models/coinModel')

const idVreneli20 = '5f0b5d3d35cf077262197edf'
const idNapoleon20 = '5ef892761a4d3f6355a8b617'

async function scrape() {
	const vreneli20 = await goldAvenue.vreneli20()
	const napoleon20 = await goldAvenue.napoleon20()

	await Coin.findByIdAndUpdate(
		idVreneli20,
		{
			'price.goldavenue': vreneli20.price
		},
		function(err, coin) {
			if (err) {
				console.log(err.message)
			}
		}
	)

	await Coin.findByIdAndUpdate(
		idNapoleon20,
		{
			'price.goldavenue': napoleon20.price
		},
		function(err, coin) {
			if (err) {
				console.log(err.message)
			}
		}
	)
	console.log(vreneli20.price, napoleon20.price)
}

module.exports = {
	scrape
}
