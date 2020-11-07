/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeLingor } = require('../scrapers/scrapeLingor')

async function lingor() {
	const pieces = await scrapeLingor()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.lingor fr': [
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
	lingor
}
