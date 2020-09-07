/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeGoldAvenue } = require('../scrapers/scrapeGoldAvenue')

async function goldAvenue() {
	const pieces = await scrapeGoldAvenue()
	pieces.map(async (piece) => {
		await Coin.findByIdAndUpdate(
			piece.id,
			{
				'prices.Gold Avenue': [
					piece.price,
					piece.prime,
					piece.livraison,
					piece.url
				]
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
