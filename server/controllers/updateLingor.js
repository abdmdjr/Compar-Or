/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeLingor } = require('../scrapers/scrapeLingor')

async function lingor() {
	const pieces = await scrapeLingor()
	pieces.map(async (piece) => {
		await Coin.findByIdAndUpdate(
			piece.id,
			{
				'prices.Lingor': [piece.price, piece.prime, piece.livraison, piece.url]
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
	lingor
}
