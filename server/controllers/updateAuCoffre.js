/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeAuCoffre } = require('../scrapers/scrapeAuCoffre')

async function auCoffre() {
	const pieces = await scrapeAuCoffre()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.aucoffre com': [
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
	auCoffre
}
