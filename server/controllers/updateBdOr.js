/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeBdOr } = require('../scrapers/scrapeBdOr')

async function bdOr() {
	const pieces = await scrapeBdOr()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.bdor fr': [
					piece.totalPrice,
					piece.price,
					piece.livraison,
					piece.url
				]
			})
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	bdOr
}
