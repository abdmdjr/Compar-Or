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
			await Coin.findById(piece.id).then((coin) => {
				if (!coin.chart.goldavenue.data && !coin.chart.goldavenue.createdAt) {
					coin.chart.goldavenue.data.push(piece.totalPrice)
					coin.chart.goldavenue.createdAt.push(new Date())
					coin.save()
				} else if (
					piece.totalPrice !==
					coin.chart.goldavenue.data[coin.chart.goldavenue.data.length - 1]
				) {
					coin.chart.goldavenue.data.push(piece.totalPrice)
					coin.chart.goldavenue.createdAt.push(new Date())
					coin.save()
				}
			})
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	goldAvenue
}
