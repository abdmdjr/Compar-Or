/* eslint-disable no-unused-expressions */
const Coin = require('../models/coinModel')
const { scrapeBullionByPost } = require('../scrapers/scrapeBullionByPost')

async function bullionByPost() {
	const pieces = await scrapeBullionByPost()
	try {
		pieces.map(async (piece) => {
			await Coin.findByIdAndUpdate(piece.id, {
				'prices.BullionByPost': [
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
	bullionByPost
}
