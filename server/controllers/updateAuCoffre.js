/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeAuCoffre } = require('../scrapers/scrapeAuCoffre')

async function auCoffre() {
	const pieces = await scrapeAuCoffre()
	pieces.map(async (piece) => {
		await Coin.findByIdAndUpdate(
			piece.id,
			{
				'prices.Au Coffre': [piece.price, piece.prime, piece.url]
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
	auCoffre
}
