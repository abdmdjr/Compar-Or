/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeGoldAvenue } = require('../scrapers/scrapeGoldAvenue')

async function goldAvenue() {
	const pieces = await scrapeGoldAvenue()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.goldavenue com': [
					piece.totalPrice,
					piece.price,
					piece.livraison,
					piece.url
				]
			})
		})
	} catch (error) {
		console.log(error)
		throw error
	}
}

module.exports = {
	goldAvenue
}
