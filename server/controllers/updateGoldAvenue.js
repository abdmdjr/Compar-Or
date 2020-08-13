/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeGoldAvenue } = require('../scrapers/goldAvenueScrape')

async function goldAvenue() {
	const pieces = await scrapeGoldAvenue()
	pieces.map(async (piece) => {
		await Coin.findByIdAndUpdate(
			piece.id,
			{
				'prices.goldavenue': [piece.price, piece.url]
			},
			function(err, coin) {
				if (err) {
					console.log(err.message)
				}
				console.log(coin)
			}
		)
	})
}

module.exports = {
	goldAvenue
}
